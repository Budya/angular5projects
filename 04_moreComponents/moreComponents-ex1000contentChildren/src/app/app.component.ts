import { Component, ContentChildren } from '@angular/core';

@Component({
  selector: 'Person',
  template: `
    <div>
      &nbsp;-&nbsp;<ng-content></ng-content>
    </div>
  `,
  styles: ['']
})
export class Person {}

@Component({
  selector: 'Paragraph',
  template: `
    <div>
      <ng-content></ng-content>
      <p *ngIf="people">Number of people: 
      {{people.length}}</p>
    </div>
  `,
  styles: [`div {
              border: 1px solid #c0c0c0;
              margin: 10px;
              padding: 10px;},
            p {margin: 5px 0;}
              `]
})
export class Paragraph {
  @ContentChildren(Person) people;
}

@Component({
  selector: 'app-root',
  template: `
    <Paragraph>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos debitis unde animi velit. Esse provident quisquam mollitia unde aut, assumenda nulla autem laborum libero vitae a, cum quia, error officiis?
      <Person>Albertus Flax</Person>
      <Person>Godefridus Turpilius</Person>
      <Person>Demipho Renatus</Person>
    </Paragraph>
    <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, quasi.
      <Person>Hanno Grumio</Person>
      <Person>Lycus Auxilius</Person>
    </Paragraph>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'moreComponents-ex1000contentChildren';
}
