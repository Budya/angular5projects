import { Component, ContentChild } from '@angular/core';

@Component({
  selector: 'Paragraph',
  template: `
  <div>
    <b>{{title.nativeElement.innerHTML}}</b>
    <p><ng-content></ng-content></p>
  </div>
  `,
  styles: ['p {border: 1px solid #c0c0c0}']
})
export class Paragraph {
  @ContentChild('title') title;
}

@Component({
  selector: 'app-root',
  template: `
  <p>
  <Paragraph>
    <title #title>Paragraph 1</title>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic optio incidunt
    voluptas, quaerat laudantium magni asperiores? Quaerat harum illum error saepe earum facere odio nam in molestias
    laboriosam, minus optio.
  </Paragraph>
  <Paragraph>
    <title #title>Paragraph 2</title>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam ullam iusto
    perferendis magnam necessitatibus ea veniam? Perferendis quae sunt maiores doloremque et, alias iusto laboriosam ea
    voluptas, officia, quod quibusdam!
  </Paragraph>
  </p>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'moreComponents-ex900contentChild';
}
