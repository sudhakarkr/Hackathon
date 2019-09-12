import {Injectable} from '@angular/core';
import {RestCallService} from '../../../shared/services/restcall/restcallservice';

@Injectable()
export class SideBarApi {

    category_api_url: string = 'http://localhost:8001/getCategories';

    constructor(private restCallService: RestCallService) {
    }

    getCategories() {
        return this.restCallService.doGet(this.category_api_url);
    }

}
