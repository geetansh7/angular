import { Injectable } from '@angular/core';
import { Book } from './book';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/observable';

@Injectable({
  providedIn: 'root'
})
export class FetchBooksService {
	
	books:Book[] = [{id: 1, name: 'book1'}, {id: 2, name: 'book2'}];

  constructor(private http: HttpClient) { }

  getBooks():Observable<Book[]>{
  	return this.http.get<Book[]>('/api/books');
  }
  getBook():Observable<Book>{
  	return this.http.get<Book>('/api/books/2');
  }
}
