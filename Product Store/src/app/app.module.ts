import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LanguageTranslationModule} from './shared/modules/language-translation/language-translation.module';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthGuard} from './shared';
import {SideBarModel} from './layout/components/sidebar/sidebar.model';
import {SideBarApi} from './layout/components/sidebar/sidebar.api';
import {RestCallService} from './shared/services/restcall/restcallservice';
import {DashBoardModel} from './layout/dashboard/dashboard.model';
import {DashBoardApi} from './layout/dashboard/dashboard.api';
import {AvengersHttpInterceptor} from './shared/interceptor/http.interceptor';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        LanguageTranslationModule,
        AppRoutingModule
    ],
    declarations: [AppComponent],
    providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: AvengersHttpInterceptor,
        multi: true
    },
        AuthGuard, SideBarModel, SideBarApi, RestCallService, DashBoardModel, DashBoardApi],
    bootstrap: [AppComponent]
})
export class AppModule {
}
