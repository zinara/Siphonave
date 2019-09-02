export class Item {
    public id: string;
    public mode: string;
    public link: string;
    public name: string;
    public description: string;
    public tags: string[];
    public date: number;
   // public advanced: Boolean;
}

export class ItemClass {
    public id: string;
    public name: string;
    public description: string;
    public tags: string[];
    public date: Date;
    public children?: ChildItems[];
    public isOpen: boolean;
    public showForm: boolean;
}

export class ChildItems {
    public clasId: string;
    public name?: string;
    public link?: string;
}
