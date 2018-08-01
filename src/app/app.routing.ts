import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewpageComponent } from './newpage/newpage.component';
import { FirstComponent } from './first/first.component';

const routes: Routes = [
    { path: '', component: FirstComponent },
    { path: 'newpage', component: NewpageComponent },
    { path: 'edit', component: HomeComponent },
    { path: 'first', component: FirstComponent }
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule {}