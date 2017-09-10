import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { EditorModule } from 'primeng/primeng';
import { ButtonModule} from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms'; 
import { YandexTranslatorService } from './yandex-translator.service';
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    EditorModule,
    ButtonModule
  ],
  providers: [YandexTranslatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
