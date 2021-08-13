import { Inject, Component, OnInit } from '@angular/core';

import { AjsAppService } from '../../angularjs';

import { User, UserService } from '../user/user.service';

@Component({
  selector: 'app',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  name = 'Angular';
  user: User;

  constructor(
    private ajsAppService: AjsAppService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.user = this.userService.getUser();
  }

  updateUsername() {
    this.user.username += '!';

    // we have to manualy detect changes in the child Angular JS component
    this.ajsAppService.detectChanges();
  }
}
