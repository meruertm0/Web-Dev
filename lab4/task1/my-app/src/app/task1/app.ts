import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  template: `<app-user name="meruert"></app-user>`,
  standalone: true,
  imports: [User],
})
export class App {}