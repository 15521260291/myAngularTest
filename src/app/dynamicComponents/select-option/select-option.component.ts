import { Component, OnInit } from '@angular/core';
import {BaseComponet} from "../../abstract/abstract";

@Component({
  selector: 'app-select-option',
  templateUrl: './select-option.component.html',
  styleUrls: ['./select-option.component.scss']
})
export class SelectOptionComponent extends BaseComponet implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
    console.log(this.options, '666');
  }

}
