import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent{
   customerList = [
    {name: 'Brian', city: 'Atlanta'},
    {name: 'Peter', city: 'San Francisco'},
    {name: 'Janet', city: 'Clolorado'}
  ]

  onCustomerClicked(customerName: String){
    alert("Customer Clicked: " + customerName);
  }; 

}
