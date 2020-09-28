import { Injectable } from '@angular/core';
import { Employee } from './employee.interface';
import { employees } from './employee.array';

@Injectable({ providedIn: 'root' })
export class EmployeeService {

	private employees: Employee[];

	constructor() {
		this.employees = employees;
	}

	insert(employee: Employee): void {
		const lastId = this.employees[this.employees.length - 1].id;
		employee.id = lastId + 1;
		this.employees.push(employee);
	}

	update(employee: Employee): void {
		const index = this.employees
			.findIndex(e => e.id === employee.id);
		this.employees[index] = employee;
	}

	delete(id: number): void {
		const index = this.employees
			.findIndex(e => e.id === id);
		this.employees.splice(index, 1);
	}

	getAll(): Employee[] {
		return this.employees;
	}

}
