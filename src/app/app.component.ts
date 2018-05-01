import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public title = 'app';
  public selectedValue = '';
  public items = [
    { value: '0', view: 'zero' },
    { value: '1', view: 'one' },
    { value: '2', view: 'Two' }
  ];

  constructor() {

  }
}
