import { Component, OnInit, ContentChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-tab-panel',
  template: '<ng-content></ng-content>'
})
export class TabPanel {

}


@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {

  @ContentChildren(TabPanel) tabPanels: QueryList<TabPanel>;

  constructor() { }

  ngOnInit() {
  }

}
