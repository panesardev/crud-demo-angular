import { Component, EventEmitter, Output } from '@angular/core';
import { Employee } from 'src/app/shared/employee.interface';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
	selector: 'app-insert',
	templateUrl: './insert.component.html',
	styleUrls: ['./insert.component.scss']
})
export class InsertComponent {

	employee: Employee = {} as Employee;
	
	@Output() close = new EventEmitter();

	constructor(private employeeService: EmployeeService) { }

	insert(): void {
		this.employeeService.insert(this.employee);
		this.close.emit();
	}

	cancel(): void {
		this.close.emit();
	}
}
