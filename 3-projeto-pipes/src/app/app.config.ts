import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
  LOCALE_ID,
  DEFAULT_CURRENCY_CODE,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { DATE_PIPE_DEFAULT_OPTIONS } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    /* 
    Colocar o LOCALE brasileiro por padrão
    |-- OBS: importar pt-BR em 'main.ts' antes!
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR',
    }
    */
    /*
    Configuração padrão Currency Pipe
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: "BRL",
    }
    */
    /* 
    Configurações padrão DatePipe
    {
       provide: DATE_PIPE_DEFAULT_OPTIONS,
       useValue: {
         dateFormat: 'full', // formatação padrão
         timezone: '+0900',  // Fuso horário padrão
       }
    }
    */
  ]
};
