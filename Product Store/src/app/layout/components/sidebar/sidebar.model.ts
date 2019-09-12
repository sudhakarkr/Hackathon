import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {ProductCategory} from '../../../shared/models/product.category';
import {SideBarApi} from './sidebar.api';
import {AvengersModel} from '../../../shared/rxmodel/avengers.model';

@Injectable()
export class SideBarModel implements AvengersModel {

    private productCategorySubject = new BehaviorSubject<ProductCategory[]>(null);

    constructor(private sideBarApi: SideBarApi) {
    }

    getProductCategories() {
        this.sideBarApi.getCategories()
            .subscribe(productCategories => this.productCategorySubject.next(productCategories));
        return this.productCategorySubject.distinctUntilChanged();
    }

    poll() {
        //this should be responsible to refresh data automatically
    }
}
