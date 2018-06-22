import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  // numberofpeople(arg0: any): any {
  //   throw new Error("Method not implemented.");
  // }
  // destinationaddress(arg0: any): any {
  //   throw new Error("Method not implemented.");
  // }
  // pickupaddress(arg0: any): any {
  //   throw new Error("Method not implemented.");
  // }
  // email(arg0: any): any {
  //   throw new Error("Method not implemented.");
  // }
  // mobilenumber(arg0: any): any {
  //   throw new Error("Method not implemented.");
  // }
  firstname
surname
age 
mobilenumber
email
departure
arrival
date
traveller
pickupaddress
destinationaddress
numberofpeople

  pages = [
    {name: 'displaypage', page: 'displaypage'},
    {name: 'view', page: 'view'}
  ];

  constructor(private router:Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params=>{
      this.firstname=params["firstname"];    
      this.surname=params["surname"];    
      this.age=params["age"];   
      this.mobilenumber=params["mobilenumber"];
      this.email=params["email"];  
      this.departure=params["departure"];
      this.arrival=params["arrival"];  
      this.date=params["date"];
      this.traveller=params["traveller"]  ; 
      this.pickupaddress=params["pickupaddress"];
      this.destinationaddress=params["destinationaddress"];
      this.numberofpeople=params["numberofpeople"]; 
      
      console.log(this.firstname);
      console.log(this.surname);
      console.log(this.age);
      console.log(this.mobilenumber);
      console.log(this.email);
      console.log(this.departure);
      console.log(this.arrival);
      console.log(this.date);
      console.log(this.traveller);
      console.log(this.pickupaddress);
      console.log(this.destinationaddress);
      console.log(this.numberofpeople);
      
     
    })
  }

}
