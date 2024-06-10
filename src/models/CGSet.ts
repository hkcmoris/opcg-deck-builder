class CGSet {
    public name : string;
    public code : string;
    public releaseDate : Date;
    public releaseOrderNumber : number;
    public totalCards : number;
    public isReleased : boolean;

    constructor(name: string, code: string, releaseDate: Date, releaseOrderNumber: number, totalCards: number, isReleased: boolean) {
        this.name = name;
        this.code = code;
        this.releaseDate = releaseDate;
        this.releaseOrderNumber = releaseOrderNumber;
        this.totalCards = totalCards;
        this.isReleased = isReleased;
    }
}