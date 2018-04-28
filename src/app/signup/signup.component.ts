// import { Component, OnInit ,ElementRef } from '@angular/core';
// import { NgForm } from '@angular/forms';

// @Component({
//   selector: 'app-signup',
//   templateUrl: './signup.component.html',
//   styleUrls: ['./signup.component.css']
// })
// export class SignupComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }
//   onSubmit(form: NgForm){
//     console.log(form)
//   }
// }
import { Component } from '@angular/core';

import { User } from '../models/user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  
  model = new User(18, 'your name', 'your email', 'your password','your address','');

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  newHero() {
    this.model = new User(42, '', '','','','');
  }

  skyDog(): User {
    let myHero =  new User(42, 'SkyDog',
                           'skydog@yahoo.com',
                           '12345678',
                          'cairo',
                        '');
    console.log('My hero is called ' + myHero.name); // "My hero is called SkyDog"
    return myHero;
  }

  //////// NOT SHOWN IN DOCS ////////

  // Reveal in html:
  //   Name via form.controls = {{showFormControls(heroForm)}}
  showFormControls(form: any) {
    return form && form.controls['name'] &&
    form.controls['name'].value; // Dr. IQ
  }

  /////////////////////////////

}