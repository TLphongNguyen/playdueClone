// // Import the functions you need from the SDKs you need
// import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
// import { getStorage } from 'firebase/storage';

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
// 	apiKey: 'AIzaSyCbn6tEFG4T4WaXmzJ1mSZFwMMCrcB7pCk',
// 	authDomain: 'playerduo-5c5dd.firebaseapp.com',
// 	projectId: 'playerduo-5c5dd',
// 	storageBucket: 'playerduo-5c5dd.appspot.com',
// 	messagingSenderId: '662281093639',
// 	appId: '1:662281093639:web:f8c1196832f78b9bc4a0a2',
// 	measurementId: 'G-0M7Q54R6DD',
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const storage = getStorage(app);
// export { app, analytics, storage };

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyCbn6tEFG4T4WaXmzJ1mSZFwMMCrcB7pCk',
	authDomain: 'playerduo-5c5dd.firebaseapp.com',
	projectId: 'playerduo-5c5dd',
	storageBucket: 'gs://playerduo-5c5dd.appspot.com',
	messagingSenderId: '662281093639',
	appId: '1:662281093639:web:f8c1196832f78b9bc4a0a2',
	measurementId: 'G-0M7Q54R6DD',
};

// Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);
export { app, analytics, storage };
