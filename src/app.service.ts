import { Injectable } from '@nestjs/common';


@Injectable()
export class AppService {
  getHome(): {} {
    return {title:'Home Page'};
  }
  getAboutUs(): {} {
    return {title:'About Us Page'};
  } 
  getHello(): string {
    return 'Hello World from ISMS 2020!';
  }
  getHello2(): {} {
    return {title: 'My Greeting App', message: 'Hello World!' };
  }
}

 
 