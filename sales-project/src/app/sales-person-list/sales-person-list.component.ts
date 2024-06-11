import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sales-person-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrl: './sales-person-list.component.css'
})
export class SalesPersonListComponent implements OnInit{

  salesPersonList: SalesPerson[] = [
    new SalesPerson("Bhumika","Saini","bhumikasaini189@gmail.com",8000),
    new SalesPerson("Garima","Issar","garimaIssar@gmail.com",7000),
    new SalesPerson("Shivani","Singla","shivanisingla12@gmail.com",2000),
    new SalesPerson("Mehak","Kamboj","mehakKamboj@gmail.com",1000),
  ];
  constructor(){

  }
  ngOnInit(): void {
  }

}
