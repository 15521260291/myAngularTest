import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-drawer-component',
  templateUrl: './drawer-component.component.html',
  styleUrls: ['./drawer-component.component.scss']
})
export class DrawerComponentComponent implements OnInit {

  constructor(private http: HttpClient) { }

  data: any = [];

  ngOnInit(): void {
    this.http.get('/api/getData').subscribe(resp => {
      this.data = resp;
    })
  }

}
