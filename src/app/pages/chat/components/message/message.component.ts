import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  constructor() { }

  @Input()
  message: string = "A message";
  @Input()
  time: string = "12:00";
  @Input()
  isSender: boolean = false;

  @Input()
  photo: string = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";

  ngOnInit(): void {
  }

}
