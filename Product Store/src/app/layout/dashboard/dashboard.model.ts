import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Product} from '../../shared/models/product';
import {DashBoardApi} from './dashboard.api';
import {AvengersModel} from '../../shared/rxmodel/avengers.model';

@Injectable()
export class DashBoardModel implements AvengersModel {

    private productSubject = new BehaviorSubject<Product[]>(null);

    constructor(private dashBoardApi: DashBoardApi) {
    }

    getProducts() {
        this.dashBoardApi.getProducts()
            .subscribe(products =>
                this.productSubject.next(products)
            );
        return this.productSubject.distinctUntilChanged();
    }

    poll() {
        //Interface calls to refresh
    }

}
