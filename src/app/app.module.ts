import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { VoiceComponent } from './components/voice/voice.component';

import { VoiceService } from './shared/voice.service';
import { EmployeeService } from './shared/employee.service';

import { UpdateComponent } from './components/update/update.component';
import { DeleteComponent } from './components/delete/delete.component';
import { InsertComponent } from './components/insert/insert.component';
import { HeaderComponent } from './components/header/header.component';
import { ListComponent } from './components/list/list.component';

@NgModule({
	declarations: [
		AppComponent,
		VoiceComponent,
		UpdateComponent,
		DeleteComponent,
		InsertComponent,
		HeaderComponent,
		ListComponent,	
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		Ng2SearchPipeModule,
		FormsModule
	],
	providers: [
		VoiceService,
		EmployeeService
	],
	schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
	bootstrap: [AppComponent]
})
export class AppModule { }
