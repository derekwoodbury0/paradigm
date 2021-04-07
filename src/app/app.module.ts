import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FinancingPageComponent } from './financing-page/financing-page.component';
import { ReviewsPageComponent } from './reviews-page/reviews-page.component';
import { FeedbackPageComponent } from './feedback-page/feedback-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';
import { ApplyPageComponent } from './apply-page/apply-page.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    FinancingPageComponent,
    ReviewsPageComponent,
    FeedbackPageComponent,
    ContactPageComponent,
    BlogPageComponent,
    MobileMenuComponent,
    ApplyPageComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
