import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getFortuneNumber(): number {
    return Math.floor(1000 + Math.random() * 9999);
  }

  getFortuneNumberString(): string {
    return this.getFortuneNumber().toString();
  }
}
