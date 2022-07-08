import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from "@angular/common/http";
import { Book } from "./model/Book";

@Injectable()
export class BooksService {

private url = 'https://sheet.best/api/sheets/1e25b5d2-84ab-4613-aa70-07dba6877771';  

httpOptions = {
    Headers: new HttpHeaders({'content-type': 'aplication/json'})
}

constructor (private http: HttpClient){}

getBook(){
    return this.http.get(this.url);
}






}