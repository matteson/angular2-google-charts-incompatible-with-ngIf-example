import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

  defaultData: Array<any> = [
    ['Time', 'Low', 'Med', 'High'],
    [0,  0,  0,    0],
  ];
  constructor() { }

  ngOnInit() {
  }

  getData(): Array<any> {
    return this.defaultData;
  }

  goBack(): void {
    window.history.back();
  }

}
