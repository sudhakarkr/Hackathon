export class Product {

    productId: Number;
    productName: String;
    categoryId: Number;
    productImage: String;
    regionId: Number;
    startDate: Date;
    endDate: Date;

    constructor(productId: Number, productName: String, categoryId: Number, productImage: String, regionId: Number, startDate: Date, endDate: Date) {
        this.productId = productId;
        this.productName = productName;
        this.categoryId = categoryId;
        this.productImage = productImage;
        this.regionId = regionId;
        this.startDate = startDate;
        this.endDate = endDate;
    }
}
