import { Injectable } from '@nestjs/common';

@Injectable()
export class BookManipulateService {
  public  booksArray = [
        {
          id: '1',
          name: '7 atomic habits ',
        },
        {
          id: '2',
          name: 'clean code',
        },
        {
          id: '3',
          name: 'do not repeat yourself',
        },
    ];  

  findAllBooks():any[] {
    return this.booksArray

  }

  addBooks(id:String,name:String):any{
  
     const newBooks= [id,name];
    this.booksArray.push();

  }




}
