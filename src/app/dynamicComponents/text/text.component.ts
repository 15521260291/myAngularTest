import { Component, OnInit } from '@angular/core';
import {BaseComponet} from "../../abstract/abstract";

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent extends BaseComponet implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
