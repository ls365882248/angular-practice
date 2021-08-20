import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
class Level2Module1Service {

  constructor(
    private http: HttpClient,
  ) { }

  private log(message: string) {
    console.log(222222)
  }
}

export {
  Level2Module1Service
}
