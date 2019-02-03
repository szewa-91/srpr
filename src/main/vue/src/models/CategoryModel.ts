export class Category {

    public static fromArray(rawCategories: any[]): Category[] {
        const categories = [] as Category[];
        rawCategories.forEach(r => {
            categories.push(new Category(r));
        });
        return categories;
    }

    public name: string;
    public icon: string;
    public description?: string;
    public background?: string;

    constructor(rawCategory: any) {
        this.name = rawCategory.name;
        this.icon = rawCategory.icon;
        this.description = rawCategory.description;
        this.background = rawCategory.background;
    }
}