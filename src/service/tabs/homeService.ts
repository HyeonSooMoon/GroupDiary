import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class HomeService {

  constructor (private http:Http) {
  }


  findAll() {
    let headers = new Headers();
    headers.append('Accept','application/json')
    let repos:any = this.http.get('http://moonghome.iptime.org/api/books',{headers:headers});
    return repos;
  }

}
