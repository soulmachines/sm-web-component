import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { IconComponent } from './icon.component';
import iconPaths from './icon-paths';
import { SimpleChange, SimpleChanges } from '@angular/core';

describe('IconComponent', () => {
  let component: IconComponent;
  let fixture: ComponentFixture<IconComponent>;
  let svg;
  let path;

  function simpleChangeName(name): SimpleChanges {
    return {
      name: new SimpleChange(null, name, true),
    };
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IconComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IconComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();

    svg = fixture.debugElement.query(By.css('svg'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
