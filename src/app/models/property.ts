export class Property {
    public id: number;
    public name: string;
    public location: string;
    public imageUrl: string;
    public price: number;

    constructor() {
        this.id = 0;
        this.name = "";
        this.location = "";
        this.imageUrl = "";
        this.price = 0;
    }
}