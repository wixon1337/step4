import { Injectable } from '@angular/core';

@Injectable()
export class LogServiceService {

  constructor() { }

  public log(message: string) {
    console.log(message);
  }
}
