import { Component, OnInit } from '@angular/core';import { AgGridModule } from 'ag-grid-angular';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-product-lsit',
  templateUrl: './product-lsit.component.html',
  styleUrls: ['./product-lsit.component.css']
})
export class ProductLsitComponent implements OnInit {
  rowData: any;
  constructor(private http: HttpClient) {
    var b=this.http.get('https://localhost:44356/api/ProductManagement');
   }
  columnDefs = [
    {headerName: 'ProductID', field: 'productID' },
    {headerName: 'ProductName', field: 'productName' },
    {headerName: 'Tags', field: 'tags' },
    {headerName: 'ProductCategory', field: 'productCategory'},
    {headerName: 'AvailableStock', field: 'availablestock'}
];


  ngOnInit() {
      this.http.get('https://localhost:44356/api/ProductManagement').subscribe(
(input)=>{this.rowData=input}


      )
  }

}
