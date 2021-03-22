export class Users {
    Serial: string;
    BloodBank: string;
    Details: string;
    Category: string;
    APositive: number;
    ANegative: number;
    BPositive: number;
    BNegative: number;
    OPositive: number;
    ONegative: number;
    ABPositive: number;
    ABNegative: number;
    Type: string;

    constructor(Serial, BloodBank, Details, Category, APositive, ANegative, BPositive, BNegative,
        OPositive, ONegative, ABPositive, ABNegative, Type){
        this.Serial = Serial;
        this.BloodBank = BloodBank;
        this.Details = Details;
        this.Category = Category;
        this.APositive = APositive;
        this.ANegative = ANegative;
        this.BPositive = BPositive;
        this.BNegative = BNegative;
        this.OPositive = OPositive;
        this.ONegative = ONegative;
        this.ABPositive = ABPositive;
        this.ABNegative = ABNegative;
        this.Type = Type;
    }
}
