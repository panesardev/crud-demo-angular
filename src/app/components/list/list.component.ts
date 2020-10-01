import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../shared/employee.service';
import { Employee } from '../../shared/employee.interface';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

	employees: Employee[];
	selectEmployee: Employee;

	showInsert: boolean;
	showUpdate: boolean;
	showDelete: boolean;

	search: string;
	
	constructor(private employeeService: EmployeeService) {}
	
	ngOnInit(): void {
		this.employees = this.employeeService.getAll();
	}

	closeModal(event: any): void {
		const classes: string[] = event.target.className.split(' ');
		if (classes.includes('modal')) {
			this.showInsert = this.showUpdate = this.showDelete = false;			
		}		
	}

}
