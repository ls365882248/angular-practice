import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {} from './level2-module1/level2-module1.service'

@Injectable()
class DeepModuleService {

  constructor(
    private http: HttpClient,
  ) { }

  private log(message: string) {
    console.log(111111)
  }
}

export {
  DeepModuleService
}
