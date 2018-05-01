import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  page = 'http://eguzman.com/alina/Moon.JPG';

  constructor() { }

  ngOnInit() {
  }

}
