import { InMemoryDbService } from 'angular-in-memory-web-api';

export class TestData implements InMemoryDbService{
	createDb(){
		let bookDetails = [
			{ id: 100, name: 'angular book', category: 'angular', writer: 'geet'}
		];
		return {books: bookDetails};
	}
}