import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-bookingform',
  templateUrl: './bookingform.component.html',
  styleUrls: ['./bookingform.component.css']
})
export class BookingformComponent implements OnInit {
  
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
  constructor(private router:Router) { }

  ngOnInit() {
  }
  booking(){
    //sending parameteres to another page
    this.router.navigate(['detail'],{queryParams:{firstname:this.firstname,surname:this.surname,age:this.age,mobilenumber:this.mobilenumber,email:this.email,departure:this.departure,arrival:this.arrival,date:this.date, traveller:this.traveller,  pickupaddress:this.pickupaddress,  destinationaddress:this.destinationaddress,  numberofpeople:this.numberofpeople}});
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
    // alert("TAXI HAS BEEN BOOKED");
  }

}
