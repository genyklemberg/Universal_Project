import { Component, OnInit} from '@angular/core';
import {Team} from '../../shared/team';
import {TeamsService} from '../../services/teams.service';
import {Router} from '@angular/router';
import { AngularFireModule } from 'angularfire2';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css'],
  providers: [TeamsService]
})
export class TeamsComponent implements OnInit {
  teams: Team[];
  screenSize: number;

  constructor(private teamsService: TeamsService, private router: Router) { }

  ngOnInit() {
    this.teams = [];
    this.teamsService.getTeams().subscribe((teams: Team[]) => {
      this.teams = teams;
    });
    this.screenSize = screen.width;
  }


}
