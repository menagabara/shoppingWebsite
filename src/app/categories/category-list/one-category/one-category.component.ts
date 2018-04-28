import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../../../models/category.model';

@Component({
  selector: 'app-one-category',
  templateUrl: './one-category.component.html',
  styleUrls: ['./one-category.component.css']
})

export class OneCategoryComponent implements OnInit {
  @Input() category : Category
  @Input() id : number

  ngOnInit() {
  }

}
