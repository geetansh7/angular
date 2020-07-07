import { Component, OnInit } from '@angular/core';
import { FetchBooksService } from './fetch-books.service';
import {Book} from './book';
import {Observable, pipe} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'inMemoryWebApi';
  //books:Observable<Book[]>;   //returntype is just to let every reader know what is returned
  books: Book[];
  book$:Observable<Book>;         //$ is just to let every reader know that it is observable
  mybook:String;
  mybookid: Number;
  constructor(private fetchbooksservice: FetchBooksService){
  	
  }

  ngOnInit(){
  	//this.books = this.fetchbooksservice.getBooks();
  	//this.fetchbooksservice.getBook().subscribe(book=>this.book=book);
  	this.fetchbooksservice.getBooks().subscribe(books=>this.books=books);
  	this.book$ = this.fetchbooksservice.getBook();
    this.fetchbooksservice.getBook().pipe(map(book=>book.id)).subscribe(id=> this.mybookid=id);
  }
}
