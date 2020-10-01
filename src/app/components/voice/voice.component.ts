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
		this.recognition.addEventListener('result', (e) => {
			this.transcript = Array.from(e.results)
				.map(result => result[0])
				.map(result => result.transcript)
				.join('');
		});
		this.recognition.addEventListener('end', () => {
			if (this.isListening) {
				this.recognition.stop();
			}
			this.isListening = false;
			// process transcript
			if (this.verifyTranscript()) {
				this.voiceService.process(this.transcript);
			}
		});
		this.start();
	}

	start(): void {
		this.isListening = true;
		this.recognition.start();
	}

	stop(): void {
		this.isListening = false;
		this.recognition.stop();
	}

	verifyTranscript(): boolean {
		if (!this.transcript || this.transcript === '' || this.transcript === ' ') {
			this.transcript = 'Invalid Command, Please try again';
			return false;
		}
		else return true;
	}

	ngOnDestroy(): void {
		this.stop();
		this.close.emit();
	}

}
