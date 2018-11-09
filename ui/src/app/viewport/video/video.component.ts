import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  @Input() public streamURL = 'https://' + location.host + ':8081/?action=stream';

  constructor() {
  }

  ngOnInit() {

  }
}
