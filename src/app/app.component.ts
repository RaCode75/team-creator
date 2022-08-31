import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  newMemberName: string = '';
  members: string[] = [];
  errorMessage: string = '';

  onInput(member: string){
    this.newMemberName = member;

  }


  addMember(){
    if(!this.newMemberName){
      this.errorMessage = "Name not be empty";
      return;
    }
    this.errorMessage = "";
    this.members.push(this.newMemberName);
    this.newMemberName='';

  }
}
