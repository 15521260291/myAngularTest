import { Component, OnInit } from '@angular/core';
import {BaseComponent} from "../../baseComponent/baseComponent";

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent extends BaseComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
