import { Component } from '@angular/core';
import '../assets/app.css';
@Component({
  moduleId: module.id.toString(),
  // selector: 'app',
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  valueSelected = 'categories'

  onSelectedVal(val){
    this.valueSelected = val
  }
}
