// import React from 'react';
import '../styles/List.css';

function List() {
	return (
		<div className="List">
			<h1>Alterra Employee List</h1>
			<div className="employee">
				<img
					src="/src/assets/pfp/miko.jpg"
					alt="Miko"
				/>
				<div className="employee-details">
					<h2>
						<a href="/employees/MAArson">Miko 'Alterra' Arson</a>
					</h2>
					<p>Job Title: CEO</p>
				</div>
			</div>
			<div className="employee">
				<img
					src="/src/assets/pfp/levi.jpg"
					alt="Levi"
				/>
				<div className="employee-details">
					<h2>
						<a href="/employees/Levi">Levi</a>
					</h2>
					<p>Job Title: Hardware Testing</p>
				</div>
			</div>
			<div className="employee">
				<img
					src="/src/assets/pfp/olivan.jpg"
					alt="Olivan"
				/>
				<div className="employee-details">
					<h2>
						<a href="/employees/Olivan">Olivan</a>
					</h2>
					<p>Job Title: Document Specialist</p>
				</div>
			</div>
			<div className="employee">
				<img
					src="/src/assets/pfp/scarlette.jpg"
					alt="Scarlette"
				/>
				<div className="employee-details">
					<h2>
						<a href="/employees/Scarlette">Scarlette</a>
					</h2>
					<p>Job Title: Head Engineer</p>
				</div>
			</div>
			<div className="employee">
				<img
					src="/src/assets/pfp/blue.jpg"
					alt="Blue Ross"
				/>
				<div className="employee-details">
					<h2>
						<a href="/employees/Blue">Blue</a>
					</h2>
					<p>Job Title: Advertising</p>
				</div>
			</div>
			<div className="employee">
				<img
					src="/src/assets/pfp/juni.jpg"
					alt="Juni"
				/>
				<div className="employee-details">
					<h2>
						<a href="/employees/JPop">Juniper Pop</a>
					</h2>
					<p>Job Title: Advertising</p>
				</div>
			</div>
			<div className="company-logo">
				<img
					src="/src/assets/alterra_logo.jpg"
					alt="Alterra Logo"
				/>
			</div>
			<form
				action="apply.html"
				method="POST"
			>
				<button className="continue-application">
					<div>
						<div className="pencil"></div>
						<div className="folder">
							<div className="top">
								<svg viewBox="0 0 24 27">
									<path d="M1,0 L23,0 C23.5522847,-1.01453063e-16 24,0.44771525 24,1 L24,8.17157288 C24,8.70200585 23.7892863,9.21071368 23.4142136,9.58578644 L20.5857864,12.4142136 C20.2107137,12.7892863 20,13.2979941 20,13.8284271 L20,26 C20,26.5522847 19.5522847,27 19,27 L1,27 C0.44771525,27 6.76353751e-17,26.5522847 0,26 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 Z"></path>
								</svg>
							</div>
							<div className="paper"></div>
						</div>
					</div>
					Add Application
				</button>
			</form>
		</div>
	);
}

export default List;
