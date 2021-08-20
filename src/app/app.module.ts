import { BrowserModule } from '@angular/platform-browser';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DeepModuleModule } from './deep-module/deep-module.module';

import { AppComponent } from './app.component';
import { HeroesComponent, ChildComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailComponent } from './detail/detail.component';
import { InMemoryDataService } from './in-memory-data.service';
import { AngularAppComponent } from './angular-app/angular-app.component';
import { HeaderComponent } from './angular-app/header/header.component';
import { ShoppingListComponent } from './angular-app/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './angular-app/shopping-list/shopping-edit/shopping-edit.component';
import { RecipeComponent } from './angular-app/recipe/recipe.component';
import { RecipeListComponent } from './angular-app/recipe/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './angular-app/recipe/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './angular-app/recipe/recipe-detail/recipe-detail.component';
import { VideoComponent } from './video/video.component';
import { FlvComponent } from './flv/flv.component';
import { MediaComponent } from './media/media.component';
import { DeepModuleService } from './deep-module/deep-module.service';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    DashboardComponent,
    DetailComponent,
    AngularAppComponent,
    HeaderComponent,
    ChildComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipeComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    VideoComponent,
    FlvComponent,
    MediaComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    DeepModuleModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
