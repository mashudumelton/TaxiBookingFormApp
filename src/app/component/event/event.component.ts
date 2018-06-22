import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  navigation(){
   
    this.router.navigate(['bookingform']);
  }
}
