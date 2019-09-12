import {Component, OnInit} from '@angular/core';
import {ProductCategory} from '../../../shared/models/product.category';
import {SideBarModel} from './sidebar.model';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

    productCategories: Array<ProductCategory> = [];

    constructor(private sideBarModel: SideBarModel) {
    }

    ngOnInit() {
        this.sideBarModel.getProductCategories()
            .filter(categories => categories !== null)
            .subscribe(categories => {
                this.productCategories = [...categories];
            });
    }

}
