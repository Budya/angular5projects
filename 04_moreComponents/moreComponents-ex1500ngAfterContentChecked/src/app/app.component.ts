import { Component, ContentChild,AfterContentChecked, AfterViewChecked } from '@angular/core';

@Component ({
  selector: 'card',
  template: `
    <ng-content></ng-content>
  `,
  styles: []})
export class CardComponent {}

@Component({
  selector: 'app-root',
  template: `
    <card>{{card}}</card>
    <button (click)="pickCard()">
    Pick a Card</button>
  `,
  styles: []
})
export class AppComponent implements AfterContentChecked {
  title = 'moreComponents-ex1500ngAfterContentChecked';
  card = CARD_ACE_OF_SPADES;

  @ContentChild(CardComponent) contentChild: CardComponent;

  ngAfterContentChecked(){
    console.log("content iside card has been checked: " + this.card);
    
  }

  pickCard(){
    this.card = this.card === CARD_ACE_OF_SPADES ? CARD_TEN_OF_CLUBS : CARD_ACE_OF_SPADES;    
  }
}

const CARD_ACE_OF_SPADES = 'ace of spades';
const CARD_TEN_OF_CLUBS = 'ten of clubs';
