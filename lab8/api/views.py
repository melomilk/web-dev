from django.http import JsonResponse
from django.shortcuts import get_object_or_404

from .models import Category, Product


def _product_to_dict(product):
    return {
        "id": product.id,
        "name": product.name,
        "price": product.price,
        "description": product.description,
        "count": product.count,
        "is_active": product.is_active,
        "category_id": product.category_id,
    }


def _category_to_dict(category):
    return {
        "id": category.id,
        "name": category.name,
    }


def product_list(request):
    products = Product.objects.select_related("category").order_by("id")
    return JsonResponse(
        [_product_to_dict(p) for p in products],
        safe=False,
    )


def product_detail(request, id):
    product = get_object_or_404(Product.objects.select_related("category"), pk=id)
    return JsonResponse(_product_to_dict(product))


def category_list(request):
    categories = Category.objects.order_by("id")
    return JsonResponse(
        [_category_to_dict(c) for c in categories],
        safe=False,
    )


def category_detail(request, id):
    category = get_object_or_404(Category, pk=id)
    return JsonResponse(_category_to_dict(category))


def category_products(request, id):
    get_object_or_404(Category, pk=id)
    products = (
        Product.objects.filter(category_id=id)
        .select_related("category")
        .order_by("id")
    )
    return JsonResponse(
        [_product_to_dict(p) for p in products],
        safe=False,
    )
