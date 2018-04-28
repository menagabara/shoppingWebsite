import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //pass it to the app component.
  @Output() dropDownSelected = new EventEmitter<string>()

  onSelect(category) {
    this.dropDownSelected.emit(category)
  }

}
