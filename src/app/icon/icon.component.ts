import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import iconPaths from './icon-paths';

type IconName = keyof typeof iconPaths;
@Component({
  selector: 'studio-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent implements OnChanges {
  @Input() public name: IconName;

  public paths: string[] = [];

  ngOnChanges(changes: SimpleChanges) {
    const { name } = changes;

    if (name) {
      const iconPath = iconPaths[name.currentValue];
      this.paths = Array.isArray(iconPath) ? iconPath : [iconPath];
    }
  }
}
