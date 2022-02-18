import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdvertCardComponent } from './components/advert-card/advert-card.component';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';
import { ArticleCardComponent } from './components/article-card/article-card.component';
import { VideoArticleCardComponent } from './components/video-article-card/video-article-card.component';
import { HeadlineCardComponent } from './components/headline-card/headline-card.component';
import { SideImageCardComponent } from './components/side-image-card/side-image-card.component';
import { TopNewsSlideComponent } from './components/top-news-slide/top-news-slide.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ArticlePageComponent } from './pages/article-page/article-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FooterComponent,
    AdvertCardComponent,
    WeatherCardComponent,
    ArticleCardComponent,
    VideoArticleCardComponent,
    HeadlineCardComponent,
    SideImageCardComponent,
    TopNewsSlideComponent,
    AboutPageComponent,
    ArticlePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
