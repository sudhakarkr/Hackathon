import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../../router.animations';
import {DashBoardModel} from './dashboard.model';
import {Product} from '../../shared/models/product';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {

    products: Array<Product> = [];

    constructor(private dashBoardModel: DashBoardModel) {
    }

    ngOnInit() {
        this.dashBoardModel.getProducts()
            .filter(products => products !== null)
            .subscribe(products => {
                this.products = [...products];
            });
    }


}
