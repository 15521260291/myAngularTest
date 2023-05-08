import { Component, OnInit } from '@angular/core';
import {BaseComponent} from "../../baseComponent/baseComponent";

@Component({
  selector: 'app-boolean-component',
  templateUrl: './boolean-component.component.html',
  styleUrls: ['./boolean-component.component.scss']
})
export class BooleanComponentComponent extends BaseComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
