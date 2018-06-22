import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  firstname
  surname
  age 
  departure
  arrival
  date
  traveller
  destinationaddress
pickupaddress
email
mobilenumber
numberofpeople

  constructor(private route: ActivatedRoute, private router:Router) { }

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
      console.log(this.departure);
      console.log(this.arrival);
      console.log(this.date);
      console.log(this.traveller);
      console.log(this.email);
      console.log(this.mobilenumber);
      console.log(this.numberofpeople);
      console.log(this.pickupaddress);
      console.log(this.destinationaddress)
      
     
    })
  
  }

}
