import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { AfterContentInit, Component, ContentChildren, QueryList } from '@angular/core';

@Component({
  selector: 'member',
  template: `
    <p [style.backgroundColor]="getBackgroundColor()">
    <ng-content></ng-content></p>
  `,
  styles: ["p{padding: 5px}"]
})
export class MemberComponent {
  selected = false;
  getBackgroundColor(){
    return this.selected ? "#ffcccc" : "#ccffff";
  }
}

@Component({
  selector: 'crew',
  template: `
    <p><ng-content></ng-content></p>    
  `,
  styles: []
})
export class CrewComponent implements AfterContentInit{
  @ContentChildren(MemberComponent) members: QueryList<MemberComponent>;

  ngAfterContentInit(){
    this.members.first.selected = true;
  }
}

@Component({
  selector: 'app-root',
  template: `
    <crew>
      <member>Capitan Kirk</member>
      <member>Spock</member>
      <member>Sulu</member>
      <member>Boned</member>
      <member>Checkov</member>
    </crew>
    
  `,
  styles: []
})
export class AppComponent {
  title = 'moreComponents-ex1300';
}
