// import cmp from './components/cmp';
import List from './components/List';

function App() {
	console.clear(); // Used to remove 3rd party extension errors.
	return (
		<div className="App">
			{/* <cmp /> */}
			<List />
		</div>
	);
}

export default App;

// // Import the functions you need from the SDKs you need
// import initializeApp from 'firebase/app';
// import getAnalytics from 'firebase/analytics';
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
// 	apiKey: 'AIzaSyCYAoTeCr8Ymx7fmmj1DllzjWQzEdMdbEs',
// 	authDomain: 'alterra-employees.firebaseapp.com',
// 	projectId: 'alterra-employees',
// 	storageBucket: 'alterra-employees.appspot.com',
// 	messagingSenderId: '25349113653',
// 	appId: '1:25349113653:web:865a77edc95f18681bee7c',
// 	measurementId: 'G-BRD7HN5B3W',
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
