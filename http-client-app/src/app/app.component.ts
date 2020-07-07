import { Component } from '@angular/core';
import { Book } from './book';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from './book.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'http-client-app';
  datasaved = false;
  bookForm: FormGroup;
  allBooks: Observable<Book[]>;
  bookiToUpdate;
  constructor(private formBuilder: FormBuilder, private bookService: BookService){

  }
  ngOnInit(){
  	this.bookForm = this.formBuilder.group({
  		name: ['', Validators.required],
  		category: ['', Validators.required],
  		writer: ['', Validators.required]
  	});
  }
  onFormSubmit(){
  	this.datasaved = false;
  	let book = this.bookForm.value;
  	this.createbooks(book);
  	this.bookForm.reset();
  }
  createbooks(book: Book){
  if(this.bookiToUpdate == null){
  	this.bookService.createBook(book).subscribe(book => {
  		this.datasaved = true;
  		this.getsoftBooks();
      this.bookiToUpdate = null;
  	});
    }else{
      book.id = this.bookiToUpdate;
      this.bookService.updateBook(book).subscribe(book=>{
        this.datasaved = true;
        this.getsoftBooks();
        this.bookiToUpdate = null;
      });
    }
  }
  getsoftBooks(){
  	this.allBooks = this.bookService.getBooksFromStore();
  }
  booktoEdit(bookid: string){
    this.bookService.getbookbyid(bookid).subscribe(book => {
      this.bookiToUpdate = bookid;
      this.bookForm.controls['name'].setValue(book.name);
      this.bookForm.controls['category'].setValue(book.category);
      this.bookForm.controls['writer'].setValue(book.writer);
    });
  }
  booktoDelete(bookid: string){
    this.bookService.deleteBook(bookid).subscribe(book => {
      this.getsoftBooks();
      console.log(book);
    });
  }
}
