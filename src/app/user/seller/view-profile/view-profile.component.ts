import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {

  userName = "Ahmed"
  userEmail = "ahmed@gmail.com"
  userAddress = "october, Giza, Egypt"
  constructor() { }

  ngOnInit() {
  }

}
