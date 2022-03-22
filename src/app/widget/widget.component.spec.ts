import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WidgetComponent } from './widget.component';
import { VideoModule } from '../video/video.module';
import { GreetingModule } from '../greeting/greeting.module';

describe.skip('WidgetComponent', () => {
  let component: WidgetComponent;
  let fixture: ComponentFixture<WidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WidgetComponent],
      imports: [VideoModule, GreetingModule],
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
