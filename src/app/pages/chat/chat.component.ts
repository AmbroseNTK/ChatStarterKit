import { AfterContentInit, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NbCardComponent, NbDialogService } from '@nebular/theme';
import { AddFriendDialogComponent } from './components/add-friend-dialog/add-friend-dialog.component';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, AfterViewInit {

  constructor(private dialog: NbDialogService) { }
  @ViewChild("nameCard") nameCard?: ElementRef<HTMLElement>;

  ngAfterViewInit(): void {

  }


  ngOnInit(): void {
  }

  addFriend() {
    this.dialog.open(AddFriendDialogComponent);
  }

}
