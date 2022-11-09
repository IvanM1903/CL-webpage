import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { ContactComponent } from './shared/contact/contact.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { RecentWorkComponent } from './components/recent-work/recent-work.component';
import { MoreInfoComponent } from './components/more-info/more-info.component';
import { SectionTitleComponent } from './shared/section-title/section-title.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    ContactComponent,
    AboutUsComponent,
    RecentWorkComponent,
    MoreInfoComponent,
    SectionTitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
