import { Component, OnInit } from '@angular/core';
import { User }    from '../../models/user.model';

@Component({
  selector: 'app-seller-signup',
  templateUrl: './seller-signup.component.html',
  styleUrls: ['./seller-signup.component.css']
})
export class SellerSignupComponent  {
  model = new User(18, 'your name', 'your email', 'your password','your address','your national id');

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
                        '123789');
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

  
  