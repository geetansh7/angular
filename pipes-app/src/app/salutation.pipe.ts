import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salutation'
})
export class SalutationPipe implements PipeTransform {

  transform(value: string, gender: string): string {
    if(gender.toLowerCase() === "male"){
    	value = 'Mr. ' + value;
    }else if(gender.toLowerCase() === "female"){
    	value = 'Ms. ' + value;
    }
    return value;
  }

}
