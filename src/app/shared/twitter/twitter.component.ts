import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {TeamsService} from '../../services/teams.service';


import {Team} from 'app/shared/team';
import {Ng4TwitterTimelineService} from 'ng4-twitter-timeline/lib';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.css']
})
export class TwitterComponent implements OnInit, OnDestroy {
  @Input() id: number;
  selectedTeam: Team = {
    id: undefined,
    title: 'Cyber Gates',
    imgPath: undefined,
    twitter: 'cybergates_gg',
    ranking: 1,
    wins: 1,
    looses: 0
  };
  showTw;
  private subscription: Subscription;


  constructor(private teamsService: TeamsService,
              private route: ActivatedRoute,
              private ng4TwitterTimelineService: Ng4TwitterTimelineService) {
  }


  ngOnInit() {

    this.route.params
      .subscribe(
        (params: Params) => {
          this.showTw = false;
          this.id = +params['id'];
          if (this.id >= 0) {
            this.subscription = this.teamsService.getTeam(this.id)
              .subscribe(team => this.selectedTeam = team);
          }

          setTimeout(() => this.showTw = true, 0)

        }
      );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

  // ngDoCheck() {
  //   // const TwitTimeline = document.getElementsByTagName('ng4-twitter-timeline')[0];
  //   // const childNode = document.getElementsByTagName('iframe')[0];
  //   const parent = document.getElementById('twtl');
  //   if (this.selectedTeam.id >= 0) {
  //     console.log(parent);
  //     // parent.parentNode.removeChild(parent);
  //   }
  // }
