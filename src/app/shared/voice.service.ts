import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { EmployeeService } from './employee.service';

@Injectable({ providedIn: 'root' })
export class VoiceService {

	constructor(private employeeService: EmployeeService) { }

}
