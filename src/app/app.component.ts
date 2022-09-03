import { Component } from '@angular/core';
import { TitleStrategy } from '@angular/router';

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

  addMember(){
    if(!this.newMemberName){
      this.errorMessage = "Name not be empty";
      return;
    }
    this.errorMessage = "";
    this.members.push(this.newMemberName);
    this.newMemberName='';
  }

  generateTeams(){

    // error handler
    if(!this.numOfTeams || this.numOfTeams <=0){
      this.errorMessage = "Invalid input"
      return;
    }

    if(this.members.length < this.numOfTeams){
      this.errorMessage = "Not enought members";
      return;
    }

    this.errorMessage = "";
    const allMembers = [...this.members];

while(allMembers.length){
  for(let i =0; i < this.numOfTeams; i++){
    const randomIndex = Math.floor(Math.random() * allMembers.length);
    const member = allMembers.splice(randomIndex, 1) [0];

    if(this.teams[i]){
      this.teams[i].push(member);
      } else {
        this.teams[i] = [member];
        }
      }
    }
    this.members = [];
    this.numOfTeams = "";
  }
}
