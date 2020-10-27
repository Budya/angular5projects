import { Component } from '@angular/core';
import { LoggingService } from './logging.service' 

@Component({
  selector: 'app-root',
  template: `
   <h1>
    {{title}}
   </h1>
    
  `,
  styles: [],
  providers: [provideLoggingService()]
})
export class AppComponent {
  title = 'dependencyInjection-ex400factoryProvider';
  constructor(private logging: LoggingService){
    logging.log('test log');
  }  
}

export const LOGGING_USE_DATE= true;
export function provideLoggingService(){
  return{
    provide: LoggingService,
    useFactory: () => new LoggingService(LOGGING_USE_DATE)
  }
}
