import {InMemoryDbService} from 'angular-in-memory-web-api';

export class TestData implements InMemoryDbService{
	createDb(){
		let bookDetails = [
		{
			id: 1, 
			name: 'Good'
		},
		{
			id: 2, 
			name: 'Bad'
		}];
	return {books: bookDetails};
	}
}