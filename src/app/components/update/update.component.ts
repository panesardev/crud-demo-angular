import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from 'src/app/shared/employee.interface';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
	selector: 'app-update',
	templateUrl: './update.component.html',
	styleUrls: ['./update.component.scss']
})
export class UpdateComponent {
	
	@Input() employee: Employee;

}
