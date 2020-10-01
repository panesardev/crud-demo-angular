import { Component, Input } from '@angular/core';
import { Employee } from 'src/app/shared/employee.interface';

@Component({
	selector: 'app-update',
	templateUrl: './update.component.html',
	styleUrls: ['./update.component.scss']
})
export class UpdateComponent {
	
	@Input() employee: Employee;

}
