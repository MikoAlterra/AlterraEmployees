import React from 'react';
import '../styles/List.css';
import database from '../Database.json';

function List() {
	const employees: Employees = database.employees;

	interface Employee {
		name: string;
		pfp: string;
		jobTitle: string;
	}

	interface Employees {
		[key: string]: Employee;
	}

	function renderEmployee(employee: Employee, key: string) {
		return (
			<div
				className="employee"
				key={key}
			>
				<img src={`/src/assets/pfp/${employee.pfp}.jpg`} />
				<div className="employee-details">
					<h2>
						<a href={`/employee/?id=${key}`}>{employee.name}</a>
					</h2>
					<p>Job Title: {employee.jobTitle}</p>
				</div>
			</div>
		);
	}

	return (
		<div className="List">
			<h1>Alterra Employee List</h1>
			{Object.keys(employees).map((key, index) => renderEmployee(employees[key], key))}
		</div>
	);
}

export default List;
