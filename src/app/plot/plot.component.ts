import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-plot',
  templateUrl: './plot.component.html',
  styleUrls: ['./plot.component.css']
})
export class PlotComponent implements OnInit {

  @Input()
  public lineChartData: Array<any>;

  public lineChartOptions = {
    title: 'Free Drug PK',
    curveType: 'none',
  };

  constructor() { }

  ngOnInit() {
  }

}
