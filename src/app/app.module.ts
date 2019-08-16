import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { UploadService } from "./services/upload-service.service";
import { HttpClientModule } from "@angular/common/http";
import { CommandRosterComponent } from './components/command-roster/command-roster.component';

@NgModule({
    declarations: [
        AppComponent,
        FileUploadComponent,
        CommandRosterComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    providers: [
        UploadService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
