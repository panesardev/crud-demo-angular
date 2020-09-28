import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { EmployeeService } from './employee.service';

@Injectable({ providedIn: 'root' })
export class VoiceService {

	private recognition = new window['webkitSpeechRecognition'];
	private transcript = new BehaviorSubject<string>('');
	private isStoppedSpeechRecog: boolean;

	constructor(private employeeService: EmployeeService) { }

	init(): void {
		this.recognition.addEventListener('result', (e: SpeechRecognitionEvent) => {
			const transcript = Array.from(e.results)
				.map((result) => result[0])
				.map((result) => result.transcript)
				.join('');
			console.log(transcript);
			this.transcript.next(transcript);
		});
	}

	start() {
		this.isStoppedSpeechRecog = false;
		this.recognition.start();
		this.recognition.onend = () => {
			if (this.isStoppedSpeechRecog) {
				this.recognition.stop();
			}
		};
	}
	
	stop() {
		this.isStoppedSpeechRecog = true;
		this.recognition.stop();
	}

	getUserSpeech(): Observable<string> {
		return this.transcript.asObservable();
	}

}
