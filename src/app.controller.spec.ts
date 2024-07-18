import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  let appService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
    appService = app.get<AppService>(AppService);
  });

  describe('root', () => {
    it('should return "Hello World!', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });

  describe('Test Fortune Number', () => {
    it('Validate type of return equal number', () => {
      expect(typeof appController.getFortuneNumber()).toBe('number');
    });

    it('Validate size of fortune number == 4', () => {
      expect(appController.getFortuneNumber().toString().length).toBe(4);
    });

    it('Validate fortune number >= 0', () => {
      expect(appController.getFortuneNumber()).toBeGreaterThan(-1);
    });

    it('Validate random', () => {
      const v1: number = appController.getFortuneNumber();
      const v2: number = appController.getFortuneNumber();
      expect(v1).not.toEqual(v2);
    });
  });

  describe('Test Fortune Number String', () => {
    it('Validate type of return equal string', () => {
      jest.spyOn(appService, 'getFortuneNumber').mockReturnValue(1234);
      expect(typeof appController.getFortuneNumberString()).toBe('string');
    });
  });
});
