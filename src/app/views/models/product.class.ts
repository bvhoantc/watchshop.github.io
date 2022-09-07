export class Product{
    public id: number ;
    public name: string;
    public price: number;
    public imagelink: string;
    public status: boolean;
    public describe: string;
    public gender: string;
    public type: string;
    public brand: string;
    public shellmeterial: string;
    public wirematerial: string;

    constructor(id: number,
         name: string,
          price: number,
           imagelink: string,
            status: boolean,
            describe:string,
            gender: string,
            type: string,
            brand: string,
            shellmaterial: string,
            wirematerial: string

            
            )
    {
        this.id = id;
        this.name = name;
        this.price = price;
        this.imagelink = imagelink;
        this.status = status;
        this.describe = describe;
        this.gender = gender;
        this.type = type;
        this.brand = brand;
        this.shellmeterial = shellmaterial;
        this.wirematerial = wirematerial;
    }
}