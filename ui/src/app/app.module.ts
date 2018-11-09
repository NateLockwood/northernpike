import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {SwitchesComponent} from './switches/switches.component';
import {LinearGaugeComponent} from './linear-gauge/linear-gauge.component';
import {RadialGaugeComponent} from './radial-gauge/radial-gauge.component';
import {WebsocketService} from './websocket.service';
import {RovStateService} from './rovstate.service';
import {ViewportModule} from './viewport/viewport.module';

@NgModule({
  declarations: [
    AppComponent,
    SwitchesComponent,
    LinearGaugeComponent,
    RadialGaugeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    ViewportModule
  ],
  providers: [WebsocketService, RovStateService],
  bootstrap: [AppComponent],
  exports: [
    AppComponent,
    SwitchesComponent,
    LinearGaugeComponent,
    RadialGaugeComponent,
  ]
})
export class AppModule {
}
