import { TestBed } from '@angular/core/testing'; //testim
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);//create instance
    const app = fixture.componentInstance;//we get the object
    expect(app).toBeTruthy();//does it exist?
  });

  it('should render title', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, online-store'); //we check if h1 actually has the text and the title is visible fr
  });
});
