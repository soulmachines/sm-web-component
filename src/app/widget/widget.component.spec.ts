import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WidgetComponent } from './widget.component';
import { Component, Input } from '@angular/core';
import { IconModule } from '../icon/icon.module';

@Component({
  selector: 'app-video',
  template: '<p class="app-video">mock app video</p>',
})
class MockVideoComponent {
  @Input('token-server') public tokenServer: string;
  @Input('api-key') public apiKey: string;
  @Input('auto-connect') public autoConnect: string;
}

@Component({
  selector: 'app-greeting',
  template: '<p class="app-greeting">mock app greeting</p>',
})
class MockGreetingComponent {
  @Input() greeting: string;
}

describe('WidgetComponent', () => {
  let component: WidgetComponent;
  let fixture: ComponentFixture<WidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WidgetComponent, MockVideoComponent, MockGreetingComponent],
      imports: [IconModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
