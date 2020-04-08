import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

//Inyecta el modulo en el navegador para que arranque el proyecto
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
