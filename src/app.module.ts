import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ngHeader }  from './headers/header.component';
import { ngFooter }  from './headers/footer.component';
import { ngMenu }  from './headers/menu.component';  
import { SingupComponent }  from './singup/singup.component';  
import { DefaultComponent }  from './singup/default.component';
import { MainComponent } from './main/main.component';
import { NewsComponent } from './content/news.component'; 
import { ProfileComponent } from './content/profile.component'; 
import { SearchComponent } from './content/search.component'; 
import { ContentComponent } from './content/content.component';
import { TruncatePipe } from './headers/truncate.pipe';
import { GlobalService } from './service/global.service';

const appRoutes: Routes = [
  { path: 'home', component: DefaultComponent },
  { path: 'singup', component: SingupComponent },
  { path: 'm', component: MainComponent },
  { path: 'p', component: ProfileComponent },
  { path: 'n', component: NewsComponent },
  { path: 's', component: SearchComponent },
  { path: 'c', component: ContentComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
    imports: [ BrowserModule, RouterModule.forRoot(appRoutes) ,HttpModule, FormsModule],
    declarations: [ AppComponent , ngHeader, ngFooter, SingupComponent, DefaultComponent, MainComponent, ngMenu,
                  ProfileComponent, NewsComponent, SearchComponent, ContentComponent, TruncatePipe],
    bootstrap: [ AppComponent ],
    providers: [GlobalService],
})
export class AppModule {}

