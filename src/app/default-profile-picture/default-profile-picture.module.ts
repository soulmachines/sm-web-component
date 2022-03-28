import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultProfilePictureComponent } from './default-profile-picture.component';

@NgModule({
  imports: [CommonModule],
  declarations: [DefaultProfilePictureComponent],
  exports: [DefaultProfilePictureComponent],
})
export class DefaultProfilePictureModule {}
