import {Injectable} from '@angular/core';
import {RestCallService} from '../../shared/services/restcall/restcallservice';

@Injectable()
export class DashBoardApi {

    products_api_url: string = 'http://localhost:8080/api/products';

    constructor(private restCallService: RestCallService) {
    }

    getProducts() {
        return this.restCallService.doGet(this.products_api_url);
    }

}
