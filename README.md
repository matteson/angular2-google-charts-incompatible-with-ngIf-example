# Reproduce

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.15.

It demonstrates an issue with [angular2-google-charts](https://github.com/vimalavinisha/angular2-google-chart) in which charts wrapped by `<div *ngIf="..."></div>` throw an error the second time they are rendered. The error generated by this project is: 
`./PlotComponent class PlotComponent - inline template:1:5 caused by: The container #my_chart is not defined.
Error: The container #my_chart is not defined.`

Generate the error by navigating home -> dashboard -> home -> dashboard. The last navigation causes the error.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Would love a solution or a workaround
At this time, I can't figure out how to avoid this error other than keeping charts out of `*ngIf` blocks. If you have an idea please open an issue.
