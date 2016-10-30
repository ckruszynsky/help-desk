import {inject} from 'aurelia-framework';
import {User} from 'backend/server';
import routes from './routes';

@inject(User)
export class Shell {
  constructor(user) {
    this.user = user;
  }

  //sets up router
  configureRouter(config, router) {
    this.router = router;
    config.map(routes);
  }
}
