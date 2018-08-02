import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { NewpageComponent } from './newpage/newpage.component';
import { HomeComponent } from './home/home.component';
import { FirstComponent } from './first/first.component';
import { ServicefirstService } from './servicefirst.service';
@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        NewpageComponent,
        HomeComponent,
        FirstComponent
    ],
    providers:[ServicefirstService],
    bootstrap: [AppComponent]
})

export class AppModule { }