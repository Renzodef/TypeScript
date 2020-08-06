import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getRandomNumber(): number {
  return Math.floor(Math.random( ) * 10);
  }
}
