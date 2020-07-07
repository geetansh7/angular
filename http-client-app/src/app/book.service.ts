import { Injectable } from '@angular/core';
import { Book } from './book';
import { Observable } from 'rxjs';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

bookUrl = "/api/books";

  constructor(private http: HttpClient) { }

  getbookbyid(bookid: string){
    return this.http.get<Book>(this.bookUrl + "/" + bookid);
  }
  createBook(book: Book):Observable<Book>{
  	let httpheaders = new HttpHeaders().set('Content-Type', 'application/json');
  	let options = { headers: httpheaders };
  	return this.http.post<Book>(this.bookUrl, book, options);
  }

  getBooksFromStore():Observable<Book[]>{
  	return this.http.get<Book[]>(this.bookUrl);
  }

  updateBook(book: Book): Observable<Number>{
    let httpheaders = new HttpHeaders().set('Content-Type', 'application/json');
    let options = {
      headers: httpheaders
    }
    return this.http.put<number>(this.bookUrl + "/" + book.id, book, options);
  }

  deleteBook(bookid: string): Observable<Number>{
    let httpheaders = new HttpHeaders().set('Content-Type', 'application/json');
    let options = {
      headers: httpheaders
    }
    return this.http.delete<number>(this.bookUrl + "/" + bookid);
  }
}
