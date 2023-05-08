import {Component, OnInit, ViewChild} from '@angular/core';
import {BaseComponent} from "../../baseComponent/baseComponent";

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent extends BaseComponent implements OnInit {
  @ViewChild('htmlComponent', {static: true})
  htmlComponent: any = null;

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
