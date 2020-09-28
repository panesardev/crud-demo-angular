import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { VoiceService } from '../../shared/voice.service';

@Component({
	selector: 'app-voice',
	templateUrl: './voice.component.html',
	styleUrls: ['./voice.component.scss']
})
export class VoiceComponent implements OnInit, OnDestroy {

	@Output() close = new EventEmitter();

	isListening: boolean = true;
	transcript: string;

	private subscription: Subscription;

	constructor(public voiceService: VoiceService) { 
		voiceService.init();
	}

	ngOnInit(): void {
		this.start();
		this.subscription = this.voiceService.getUserSpeech()
			.subscribe(transcript => this.transcript = transcript);
	}

	start(): void {
	 	this.voiceService.start();
		this.isListening = true;
	}
  
	stop(): void {
		this.voiceService.stop();
		this.isListening = false;
	}

	ngOnDestroy(): void {
		this.stop();
		this.transcript = '';
		this.subscription.unsubscribe();
		this.close.emit();
	}

}
