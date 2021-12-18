export interface Icategory{
    name:String;
    image:String;
}

export class Category implements Icategory
{
    name!: String;
    image!: String;
}