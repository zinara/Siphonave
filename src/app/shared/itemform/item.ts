export class Item {
    public link: string;
    public name: string;
    public description: string;
    public tag: string[];
    public date: Date;
}

export class ItemClass {
    public name: string;
    public description: string;
    public tag: string[];
    public date: Date;
    public children?: ChildItems[];
}

export class ChildItems {
    public name?: string;
    public link?: string;
}
