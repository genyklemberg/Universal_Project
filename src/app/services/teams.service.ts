import { Injectable } from '@angular/core';
import {Team} from '../shared/team';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Injectable()
export class TeamsService {

  teams: FirebaseListObservable<Team[]>;
  team: FirebaseObjectObservable<Team>;

  constructor(private db: AngularFireDatabase) {
    this.teams = this.db.list('/teams');
  }

  // getTeams(itemNumber?: number, startAt?: Object ): FirebaseListObservable<any>{
  //   let tempQuery = {};
  //   if (startAt) { tempQuery['startAt'] = startAt}
  //   if (itemNumber) { tempQuery['limitToFirst'] = itemNumber}
  //   if (startAt || itemNumber) {
  //     this.teams = this.db.list('/teams', {
  //       query: {
  //         startAt: startAt,
  //         limitToFirst: itemNumber
  //       }
  //     });
  //   } else {
  //     this.teams = this.db.list('/teams');
  //   }
  //   return this.teams;
  // }

  addTeam(team: Team) {
    this.teams.push(this.convertTeam(team));
  }

  updateTeam(key: string, team: Team) {
    this.teams.update(key, this.convertTeam(team));
  }

  deleteTeam(key: string) {
    this.teams.remove(key);
  }

  deleteAll() {
    this.teams.remove();
  }

  // convert date to string, Firebase cannot save Date object!
  private convertTeam(team: Team): Object {
    let obj = {};
    for (let prop in team) {
      if (prop === 'date') {
        obj[prop] = team[prop].toUTCString();
      } else {
        obj[prop] = team[prop];
      }
    }
    return obj;
  }


  // private teams: Team[] = [
  //   new Team ( 0, 'Team Empire', '../../assets/img/team/EMPIRE.png', 'team_empire', 5, 10, 17),
  //   new Team ( 1, 'Team Liquid', '../../assets/img/team/TL.png', 'TeamLiquid', 1, 20, 5),
  //   new Team ( 2, 'Virus.pro', '../../assets/img/team/VP.png', 'TeamVirtuspro', 6, 20, 5),
  //   new Team ( 3, 'Newbee', '../../assets/img/team/NEWBEE.png', 'NewbeeDota', 2, 20, 5),
  //   new Team ( 4, 'LGD', '../../assets/img/team/LGD.png', 'LGDgaming', 3, 20, 5),
  //   new Team ( 5, 'LFY', '../../assets/img/team/LFY.png', 'LGDgaming', 4, 20, 5),
  //   new Team ( 6, 'OG.Dota', '../../assets/img/team/OG.png', 'OGDota2', 5, 20, 5)
  // ];

  getTeams(): FirebaseListObservable<Team[]> {
    return this.teams = this.db.list('/teams');
  }


  getTeam(index: number) {
    return this.db.object('/teams/' + index);
  }

  // getTeam(id: number) {
  //   const team = this.teams.find(
  //     (t) => {
  //       return t.id === id;
  //     }
  //   );
  //   return team;
  // }
  //
  // updateTeam(id: number, teamInfo: {ranking: number, twitter: string}) {
  //   const team = this.teams.find(
  //     (t) => {
  //       return t.id === id;
  //     }
  //   );
  //   if (team) {
  //     team.ranking = teamInfo.ranking;
  //     team.twitter = teamInfo.twitter;
  //   }
  // }

}
