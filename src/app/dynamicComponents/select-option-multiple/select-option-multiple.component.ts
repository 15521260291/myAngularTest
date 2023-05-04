import { Component, OnInit } from '@angular/core';
import {BaseComponent} from "../../baseComponent/baseComponent";

@Component({
  selector: 'app-select-option-multiple',
  templateUrl: './select-option-multiple.component.html',
  styleUrls: ['./select-option-multiple.component.scss']
})
export class SelectOptionMultipleComponent extends BaseComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
