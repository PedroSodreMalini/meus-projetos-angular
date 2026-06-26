import { Component, inject } from '@angular/core';
import { Users } from '../../services/users';
import { AsyncPipe } from '@angular/common';
import { UserStatusPipe } from '../../services/pipes/user-status-pipe';

@Component({
  selector: 'app-custom-pipe',
  imports: [
    AsyncPipe,
    UserStatusPipe,
  ],
  templateUrl: './custom-pipe.html',
  styleUrl: './custom-pipe.css',
})
export class CustomPipe {
  public userService = inject(Users)
}
