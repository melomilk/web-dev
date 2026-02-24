import { bootstrapApplication } from '@angular/platform-browser'; //we launch the app
import { appConfig } from './app/app.config'; //routers,providers, are all stored there (settings)
import { App } from './app/app'; //the main component!

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err)); //we launch the app, if the error is found we will see it in console
