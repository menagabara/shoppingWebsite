import { Component, OnInit, Input } from '@angular/core';
import { SubCategory } from '../../../../models/subCategory.model';
import { SubCategoryService } from '../../../../services/subCategory.service';

@Component({
  selector: 'app-one-sub-category',
  templateUrl: './one-sub-category.component.html',
  styleUrls: ['./one-sub-category.component.css']
}) 

export class OneSubCategoryComponent implements OnInit {
  @Input() subCategory : SubCategory
  @Input() id : number

  ngOnInit() {
  }


}
