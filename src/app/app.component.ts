import {Component, Input} from '@angular/core';

import {COURSES} from '../db-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
course = COURSES[0];
desc = COURSES[0].description





}
