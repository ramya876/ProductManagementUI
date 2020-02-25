import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private http: HttpClient) { }
  productID:number;
  productName :string;
  tags:string;
  productCategory:string;
  availablestock:number;

  ngOnInit() {
  }

  Add(){
    this.http.post("https://localhost:44356/api/ProductManagement",{

    "ProductName": this.productName,
    "Tags":this.tags,
    "ProductCategory": this.productCategory,
    "Availablestock": this.availablestock}).subscribe();
  }
  Delete(){

    this.http.delete("https://localhost:44356/api/ProductManagement/Delete/").subscribe();


  }
}
