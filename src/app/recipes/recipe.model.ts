export class Recipe {
    public id: number;
    public name: string;
    public desc: string;

    constructor(id: number, name: string, desc: string) {
        this.id = id;
        this.name = name;
        this.desc = desc;
    }
}
