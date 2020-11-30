import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Post } from './post';
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';
 
@Component({
  selector: 'app-root',
  template: `
    <ul>
      <li *ngFor="let post of _posts">
        <b>{{post.title}}: </b> {{post.body}}
      </li>
    </ul>
    
  `,
  styles: []
})
export class AppComponent {
  title = 'http-ex500httpRespRxMapOperator';

  _posts: Array<Post>;

  tempPosts: Array<Post>;
  constructor(private _http: HttpClient){}

  ngOnInit(){
    return this._http.get<Array<Post>>(`http://jsonplaceholder.
    typicode.com/posts`).pipe(
      map(resp => {
          const tempPost = new Post(resp['title'], resp['body']);
          this.tempPosts.push(tempPost);
      })
       
    ).subscribe()
  }
}

//https://yandex.by/search/?text=observable%20map%20to%20array&lr=157&src=suggest_T
