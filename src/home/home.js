import {inject} from 'aurelia-framework';
import {Server} from 'backend/server';
import {CommonDialogs} from '../resources/dialogs/common-dialogs';

@inject(Server,CommonDialogs)
export class Home {
  constructor(server,commonDialogs){
    this.server = server;
    this.activity = null;
    this.news = null;
    this.commonDialogs = commonDialogs;   
  }

  activate() {
    //won't render until all promises have returned and we have all the data.
    return Promise.all([
      this.server.getRecentActivity().then(activity => this.activity = activity),
      this.server.getNews().then(news => this.news = news)
    ]);
  }
}
