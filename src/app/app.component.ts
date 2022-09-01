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
  numOfTeams: number | '' = '' ;
  teams: string[][] = [];

  onInput(member: string){
    this.newMemberName = member;
  }

  onNumOfTeamsInput(value: string){
    this.numOfTeams = Number(value);
  }

  generateTeams(){
    if(!this.numOfTeams || this.numOfTeams <=0){
      return;
    }
    const allMembers = [...this.members];

    for(let i =0; i<this.numOfTeams; i++){
      const randomIndex = Math.floor(Math.random() * allMembers.length);
      const member = allMembers.slice(randomIndex, 1) [0];
    }
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
