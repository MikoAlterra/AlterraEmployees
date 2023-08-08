import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { lazy } from 'react';

// import Home from './pages/Home';
// import Games from './pages/Games';
// import Add from './pages/Add';

const List = lazy(() => import('./List'));
const Employee = lazy(() => import('./Employee'));

function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={<List />}
				/>
				<Route
					path="/Employee"
					element={<Employee />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
