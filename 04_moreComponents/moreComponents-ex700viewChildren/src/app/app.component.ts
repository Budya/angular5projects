import { AfterViewInit, Component, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChildren('paragraph1, paragraph2') paragraps;
  title = 'moreComponents-ex700viewChildren';
  note: string = '';

  ngAfterViewInit() {
    setTimeout((_: any) => {
      this.note = 'Number of Paragraphs:' +
      this.paragraps.length 
    });
  }
}
