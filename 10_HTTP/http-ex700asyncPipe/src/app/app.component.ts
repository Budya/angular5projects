import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  template: `
    <h1>Post Title Names</h1>
    <p>{{_result|async}}</p>
    
  `,
  styles: []
})
export class AppComponent {
  title = 'http-ex700asyncPipe';

  _result: any;

  constructor(private _http: HttpClient){

  }

  ngOnInit(){
    this._result=
      this._http.get<Array<any>>(`http://jsonplaceholder.typicode.com/posts`)
      .pipe(map(
        response=>{
          let titles = '';
          for(let responseItem of response){
            titles += responseItem['title'];
          }
          return titles;
        }
      )        
    );
  }
}
