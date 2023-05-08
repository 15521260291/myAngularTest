import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {BaseComponent} from "../../baseComponent/baseComponent";
import {NzSelectComponent, NzSelectSearchComponent} from "ng-zorro-antd/select";

@Component({
  selector: 'app-select-option-multiple',
  templateUrl: './select-option-multiple.component.html',
  styleUrls: ['./select-option-multiple.component.scss']
})
export class SelectOptionMultipleComponent extends BaseComponent implements OnInit {
  @ViewChild(NzSelectSearchComponent, {static: true})
  NzSelectComponent: any = null;

  @ViewChild('htmlComponent', {static: true})
  select: any = null;

  constructor(private render: Renderer2, private host: ElementRef<HTMLElement>,) {
    super();
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void{
    // this.render.
    // console.log(document.querySelector('input'), this.host, 'input');
    // this.host.nativeElement.focus();
    // setTimeout(() => {
    //   document.querySelector('input')?.focus();
    // })

    // console.log(this.NzSelectComponent, 'uuu');
  }

  ngAfterViewChecked(): void{
    console.log(this.NzSelectComponent, '888');
  }



}
