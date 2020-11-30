import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Post } from './post';
import { map } from 'rxjs/operators';

 
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

  _posts: Post[]=[];
  
  constructor(private _http: HttpClient){}

  ngOnInit(){
    return this._http.get<Array<Post>>(`http://jsonplaceholder.typicode.com/posts`).pipe(
      map(response=>{
        let postArray: Post[] = new Array<Post>();
        for(let responseItem of response){
          const post =
            new Post(responseItem['title'], responseItem['body']);
          postArray.push(post);
        }
        return postArray;
      })
    )
    .subscribe(
      response => {        
        this._posts = response;
      }
    )
    

  }
}

//https://yandex.by/search/?text=observable%20map%20to%20array&lr=157&src=suggest_T
