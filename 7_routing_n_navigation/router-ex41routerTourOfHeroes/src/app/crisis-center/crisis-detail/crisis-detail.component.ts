import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Crisis } from '../crisis';
import { CrisisService } from '../crisis.service';
import { switchMap } from 'rxjs/operators'
import { Observable } from 'rxjs';
import { DialogService } from 'src/app/dialog.service';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.css']
})
export class CrisisDetailComponent implements OnInit {

  crisis: Crisis;
  editName: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dialogService: DialogService
  ) { }

  ngOnInit() {
    this.route.data
      .subscribe((data : {crisis: Crisis}) => {
        this.editName = data.crisis.name;
        this.crisis = data.crisis;
      });  
  }

  cancel(){
    this.gotoCrises();
  }

  canDeactivate(): Observable<boolean> | boolean {
    if(this.crisis || this.crisis.name === this.editName){
      return true;
    }

    return this.dialogService.confirm ('Discard changes?');
  }

  gotoCrises(){
    const crisisId = this.crisis ? this.crisis.id : null;
    this.router.navigate(['../', {id: crisisId, foo: 'foo'}], {relativeTo: this.route});
    
  }

}