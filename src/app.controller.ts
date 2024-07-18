import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/fortune_number')
  getFortuneNumber(): number {
    return this.appService.getFortuneNumber();
  }

  @Get('/fortune_number_string')
  getFortuneNumberString(): string {
    return this.appService.getFortuneNumberString();
  }
}
