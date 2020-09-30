import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { VoiceService } from '../../shared/voice.service';

@Component({
	selector: 'app-voice',
	templateUrl: './voice.component.html',
	styleUrls: ['./voice.component.scss']
})
export class VoiceComponent implements OnInit, OnDestroy {

	@Output() close = new EventEmitter();

	private recognition = new window['webkitSpeechRecognition'];
	
	transcript: string = '';
	isListening: boolean = true;

	constructor(private voiceService: VoiceService) { }

	ngOnInit(): void {
		this.start();
		this.recognition.addEventListener('result', (e: SpeechRecognitionEvent) => {
			this.transcript = Array.from(e.results)
				.map((result) => result[0])
				.map((result) => result.transcript)
				.join('');
		});
		this.recognition.addEventListener('end', () => {
			if (this.isListening) {
				this.recognition.stop();
			}
			this.isListening = false;
		});
	}

	start(): void {
		this.isListening = true;
		this.recognition.start();
	}

	stop(): void {
		this.recognition.stop();
	}

	verifyTranscript(): void {
		if (this.transcript === '' || this.transcript === ' ') {
			this.transcript = 'Invalid Command, Please try again'
		}
	}

	ngOnDestroy(): void {
		this.stop();
		this.close.emit();
	}

}
