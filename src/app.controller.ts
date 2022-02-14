import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('home.html') // indicates the template to render
  getHome(): {} {
    return this.appService.getHome(); 
  }   

  @Get('about-us')
  @Render('about-us.html')
  getAboutUs(): {} {
    return this.appService.getAboutUs();
  }
  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }
  
  @Get('hello2')
  @Render('index.html') // indicte the template to render
  getHello2(): {} {
    return this.appService.getHello2(); 
  }

}
