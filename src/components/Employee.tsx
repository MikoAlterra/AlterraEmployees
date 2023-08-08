import '../styles/Employee.css';
import database from '../Database.json';
import queryString from 'query-string';

function Employee() {
	const employees: Employees = database.employees;
	const query = queryString.parse(location.search);
	const employee = query.id as string;

	interface Employee {
		name: string;
		pfp: string;
		jobTitle: string;
		compartment: string;
		id: string;
	}

	interface Employees {
		[key: string]: Employee;
	}

	function renderEmployeeProfile(employee: Employee) {
		return (
			<div className="employee">
				<h1>{`${employee.name} - Alterra Employee`}</h1>
				<div className="employee-details">
					<img src={`/src/assets/pfp/${employee.pfp}.jpg`} />
					<div>
						<h2>{employee.name}</h2>
						<p>
							<b>Job Title:</b> {employee.jobTitle}
						</p>
						<p>
							<b>Work Compartment:</b> {employee.compartment}
						</p>
						<p>
							<b>Worker ID:</b> {employee.id}
						</p>
					</div>
				</div>
				<form
					action={'/List'}
					method="POST"
				>
					<button>
						<span className="circle1"></span>
						<span className="circle2"></span>
						<span className="circle3"></span>
						<span className="circle4"></span>
						<span className="circle5"></span>
						<span className="text">Back</span>
					</button>
				</form>
			</div>
		);
	}

	return renderEmployeeProfile(employees[employee]);
}

export default Employee;
