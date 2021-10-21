import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {
//create an array of sales person object
salesPersonList : SalesPerson[]=[
  new SalesPerson("Anup","Kumar","anup.kumar@luv2code.com",50000),
  new SalesPerson("john","doe","anup.kumar@luv2code.com",40000),
  new SalesPerson("claire","muphy","anup.kumar@luv2code.com",90000),
  new SalesPerson("mai","truong","anup.kumar@luv2code.com",60000)
]
  constructor() { }

  ngOnInit(): void {
  }

}
