import {Component, OnInit, ViewChild} from '@angular/core';
import {BaseComponent} from "../../baseComponent/baseComponent";

@Component({
  selector: 'app-select-option',
  templateUrl: './select-option.component.html',
  styleUrls: ['./select-option.component.scss']
})
export class SelectOptionComponent extends BaseComponent implements OnInit {
  @ViewChild('htmlComponent', {static: true})
  htmlComponent: any = null;

  selectOptionEle: any = null;


  constructor() {
    super();
  }


  ngOnInit(): void {
  }


}
