import { Injectable } from '@angular/core';
import { EmployeeService } from './employee.service';

@Injectable({ providedIn: 'root' })
export class VoiceService {

	constructor(private employeeService: EmployeeService) { }

	process(transcript: string): void {
		const words: string[] = transcript.split(' ');
		console.log(words);
	}

}
