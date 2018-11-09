import {NgModule} from '@angular/core';
import {ThreejsComponent} from './threejs/threejs.component';
import {VideoComponent} from './video/video.component';
import {CameraviewComponent} from './cameraview/cameraview.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule
  ],
  declarations: [
    ThreejsComponent,
    VideoComponent,
    CameraviewComponent
  ],
  exports: [
    ThreejsComponent,
    VideoComponent,
    CameraviewComponent
  ]
})
export class ViewportModule {
}
