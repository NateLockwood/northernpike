import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {WebsocketService} from './websocket.service';
import {Telemetry} from './telemetry';

const WS_URL = 'ws://' + location.host + '/ws';

@Injectable({
  providedIn: 'root'
})
export class RovStateService {

  public state = new BehaviorSubject(new Telemetry());
  private socket: Subject<MessageEvent>;

  constructor(websocket: WebsocketService) {
    this.socket = websocket.connect(WS_URL);
    this.socket.subscribe((msg: MessageEvent) => {
      this.state.next(JSON.parse(msg.data));
    });
  }

  public pushState(newState: Telemetry): void {
    this.socket.next(new MessageEvent('telemetry', {data: newState}));
  }
}
