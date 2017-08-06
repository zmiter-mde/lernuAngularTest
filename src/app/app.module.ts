import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppRoutingModule } from './router/app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SingleTestComponent } from './single-test/single-test.component';

import { QuestionsService } from './service/questions.service';
import { BlocksService } from './service/blocks.service';

import { ContentComponent } from './content/content.component';
import { TestBlocksComponent } from './test-blocks/test-blocks.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SingleTestComponent,
    ContentComponent,
    TestBlocksComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [QuestionsService, BlocksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
