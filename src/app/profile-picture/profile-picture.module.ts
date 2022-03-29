import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePictureComponent } from './profile-picture.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ProfilePictureComponent],
  exports: [ProfilePictureComponent],
})
export class ProfilePictureModule {}
