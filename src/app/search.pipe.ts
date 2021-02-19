import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(testpipe:any, term:string): object[] {
    return testpipe.filter((movy:any)=>{

    if(movy.tittle ) {
      return movy.tittle.toLowerCase().includes(term.toLowerCase())
    }
    else{
      return movy.name.toLowerCase().includes(term.toLowerCase())
    }
    })
    
  
  }
}
