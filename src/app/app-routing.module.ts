import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component'
import { FinancingPageComponent } from './financing-page/financing-page.component'
import { ReviewsPageComponent } from './reviews-page/reviews-page.component'
import { FeedbackPageComponent } from './feedback-page/feedback-page.component'
import { ContactPageComponent } from './contact-page/contact-page.component'
import { BlogPageComponent } from './blog-page/blog-page.component'
import { ApplyPageComponent } from './apply-page/apply-page.component'
import { applySourceSpanToExpressionIfNeeded } from '@angular/compiler/src/output/output_ast';

const routes: Routes = [
  {path: 'home', component: HomepageComponent},
  {path: 'financing', component: FinancingPageComponent},
  {path: 'reviews', component: ReviewsPageComponent},
  {path: 'feedback', component: FeedbackPageComponent},
  {path: 'contact', component: ContactPageComponent},
  {path: 'blog', component: BlogPageComponent},
  {path: 'apply', component: ApplyPageComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
