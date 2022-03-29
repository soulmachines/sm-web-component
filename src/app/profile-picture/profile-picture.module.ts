import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePictureComponent } from './profile-picture.component';
import { IconModule } from '../icon/icon.module';
@NgModule({
  imports: [CommonModule, IconModule],
  declarations: [ProfilePictureComponent],
  exports: [ProfilePictureComponent],
})
export class ProfilePictureModule {}
