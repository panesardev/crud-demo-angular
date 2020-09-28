import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from 'src/app/shared/employee.interface';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
	selector: 'app-delete',
	templateUrl: './delete.component.html',
	styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

	@Input() employee: Employee;
	
	@Output() done = new EventEmitter();
	@Output() close = new EventEmitter();

	constructor(private employeeService: EmployeeService) { }

	ngOnInit(): void {
	}

	delete(): void {
		this.employeeService.delete(this.employee.id);
		this.done.emit();
		this.close.emit();
	}

	cancel(): void {
		this.close.emit();
	}

}
