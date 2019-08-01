import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IDetail } from './details';


@Injectable({
  providedIn: 'root'
})
export class HmsserviceService {

  constructor(private http:HttpClient) { }
  _url:string="http://10.236.246.18:8086/onlinehotelmanagement/";
  _url2:string="http://10.236.246.18:8086/onlinehotelmanagement/book";
    getCancel(id:number):Observable<any>{
  return this.http.get(this._url+id);
    }
    sendBookRoom(bookObject:IDetail):Observable<any[]>{
      console.log(bookObject);
return this.http.post<any[]>(this._url2,bookObject);

    }
  }

