enum CGColor {
  RED, GREEN, BLUE, PURPLE, BLACK, YELLOW
}

enum CGType {
  LEADER, CHARACTER, EVENT, STAGE, DON
}

class CGCard {
  public id : number;
  public set : CGSet;
  public rarity : string;
  public alternateArt : boolean;
  public name : string;
  public type : CGType;
}

class CGCardLeader extends CGCard {
  public color : [CGColor];
  public life : number;
}