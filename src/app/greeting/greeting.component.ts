import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss'],
})
export class GreetingComponent implements OnInit {
  @Input() public greeting: string;
  public isOn: boolean = true;
  constructor() {}

  ngOnInit(): void {}

  closeGreeting() {
    this.isOn = false;
  }
}
