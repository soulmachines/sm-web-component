import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss'],
})
export class GreetingComponent {
  @Input() greeting: string;
  isOn: boolean = true;

  constructor() {}

  closeGreeting() {
    this.isOn = false;
  }
}
