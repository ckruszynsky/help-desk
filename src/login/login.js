import {inject} from 'aurelia-dependency-injection';
import {Aurelia} from 'aurelia-framework';
import {Server, User} from 'backend/server';

@inject(Aurelia, Server)
export class Login {
  
  constructor(aurelia, server) {
    this.aurelia = aurelia;
    this.server = server;
    this.username = '';
    this.password = '';
    this.message = '';
  }
  
  login() {
    this.server.login(this.username, this.password).then(result => {
      if (result) {
        this.message = '';
        
        //push the user into the dependency injection container 
        //so that anytime we request a User in our application after 
        //logging in we will get the same user instance everytime. 
        this.aurelia.use.instance(User,result);
        
        //set the root component to where we want the user to go after login.
        this.aurelia.setRoot('shell/shell');    
        
       } else {

        this.message = 'Incorrect Username or Password!';
      }
    });
  }
}
