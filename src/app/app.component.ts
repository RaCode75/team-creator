import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  newMemberName: string = '';
  members: string[] = [];

  onInput(member: string){
    this.newMemberName = member;
    console.log(this.newMemberName);
  }


  addMember(){
    this.members.push(this.newMemberName);
    this.newMemberName='';
    console.log(this.members);
  }
}
