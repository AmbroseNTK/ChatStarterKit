import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  templateUrl: './add-friend-dialog.component.html',
  styleUrls: ['./add-friend-dialog.component.scss']
})
export class AddFriendDialogComponent implements OnInit {

  constructor(private dialogRef: NbDialogRef<AddFriendDialogComponent>) { }

  ngOnInit(): void {
  }

  addFriend() { }

  cancel() {
    this.dialogRef.close();
  }

}
