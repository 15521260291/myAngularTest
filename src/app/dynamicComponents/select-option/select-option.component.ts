import { Component, OnInit } from '@angular/core';
import {BaseComponent} from "../../baseComponent/baseComponent";

@Component({
  selector: 'app-select-option',
  templateUrl: './select-option.component.html',
  styleUrls: ['./select-option.component.scss']
})
export class SelectOptionComponent extends BaseComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
    console.log(this.options, '666');
  }

}
