import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HomeListComponent } from './home-list/home-list.component';
import { AboutComponent } from './about/about.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { FrameworkComponent } from './framework/framework.component';
import { FormsModule} from '@angular/forms';

import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { DetailsPageComponent } from './details-page/details-page.component';

@NgModule({
  declarations: [
    HomeListComponent,
    AboutComponent,
    HomepageComponent,
    HeaderComponent,
    FrameworkComponent,
    CreateComponent,
    DetailsPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule, RouterModule.forRoot([
      {
        path: '',
        component: HomepageComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'create',
        component: CreateComponent
      },
      {
        path: 'food/:foodid',
        component: DetailsPageComponent
      }
    ])
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [FrameworkComponent]
})
export class AppModule { }
