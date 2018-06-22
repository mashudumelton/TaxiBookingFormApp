import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { prepareProfile } from 'selenium-webdriver/firefox';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  @Input() name;
  @Input() page;


  @Input() firstname
  @Input() surname
  @Input() age
  @Input() mobilenumber
  @Input() email 
  @Input() departure
  @Input() arrival
  @Input() date
  @Input() traveller
@Input() pickupaddress
@Input() destinationaddress
@Input() numberofpeople
  constructor(private router:Router) { }

  ngOnInit() {
  }
  navigate(){
    
    if(this.name === 'displaypage'){
      this.router.navigate(['detail/displaypage'],{queryParams:{firstname:this.firstname,surname:this.surname,age:this.age,mobilenumber:this.mobilenumber,email:this.email,departure:this.departure,arrival:this.arrival,date:this.date, traveller:this.traveller,pickupaddress:this.pickupaddress,destinationaddress:this.destinationaddress,numberofpeople:this.numberofpeople,}}); 
    }else if(this.name === 'view'){
      this.router.navigate(['detail/view'], {queryParams:{firstname:this.firstname,surname:this.surname,age:this.age,mobilenumber:this.mobilenumber,email:this.email,departure:this.departure,arrival:this.arrival,date:this.date, traveller:this.traveller,pickupaddress:this.pickupaddress,destinationaddress:this.destinationaddress,numberofpeople:this.numberofpeople,}});
    }
  //    if(this.name === 'view'){
  //      this.router.navigate(['detail/view'],{queryParams:{firstname:this.firstname,surname:this.surname,age:this.age,mobilenumber:this.mobilenumber,email:this.email,departure:this.departure,arrival:this.arrival,date:this.date, traveller:this.traveller,pickupdestination:this.pickupdsetination,destinationaddress:this.destinationaddress,numberofpeople:this.numberofpeople,}});
  // }

}

}