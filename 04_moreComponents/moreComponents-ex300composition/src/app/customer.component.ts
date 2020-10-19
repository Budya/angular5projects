import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent{
  @Input() customer;
  @Output() clicked: EventEmitter<String> = new EventEmitter<String>();

  onClicked(){
    this.clicked.emit(this.customer.name);
  }

}
