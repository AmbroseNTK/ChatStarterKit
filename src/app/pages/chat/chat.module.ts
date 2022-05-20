import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat.component';
import { NbButtonModule, NbCardModule, NbDialogModule, NbFormFieldModule, NbIconModule, NbInputModule, NbLayoutModule, NbListModule, NbSidebarModule, NbTooltipModule, NbUserModule } from '@nebular/theme';
import { MessageComponent } from './components/message/message.component';
import { AddFriendDialogComponent } from './components/add-friend-dialog/add-friend-dialog.component';


@NgModule({
  declarations: [
    ChatComponent,
    MessageComponent,
    AddFriendDialogComponent
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
    NbSidebarModule,
    NbInputModule,
    NbFormFieldModule,
    NbCardModule, NbListModule,
    NbLayoutModule,
    NbButtonModule,
    NbIconModule,
    NbTooltipModule,
    NbDialogModule.forChild({
      closeOnBackdropClick: true
    }),
    NbUserModule
  ]
})
export class ChatModule { }
