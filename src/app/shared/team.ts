export class Team {

  public id: number;
  public title: string;
  public imgPath: string;
  public twitter: string;
  public ranking: number;
  public wins: number;
  public looses: number;

  constructor(id: number, title: string, imgPath: string, twitter: string, ranking: number, wins: number, looses: number) {
    this.id = id;
    this.title = title;
    this.imgPath = imgPath;
    this.twitter = twitter;
    this.ranking = ranking;
    this.wins = wins;
    this.looses = looses;
  }
}
