import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  template: '<button (click)="toDashboard()">To Dashboard</button>'
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  toDashboard(): void {
      this.router.navigate(
      ['/dashboard']
    );
  }

}
