import { Component, OnInit, ContentChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-tab-panel',
  template: `
<div *ngIf="visible">
  <ng-content></ng-content>
 </div>`
})
export class TabPanel {
  visible: Boolean = true;
}


@Component({
  selector: 'app-tab',
  template: `
<div style="border: 2px solid blue; padding: 1rem; margin: 2px;">
  <h4>My super awesome tab</h4>
  <ng-content></ng-content>
</div>
`
})
export class TabComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
