import { Component } from '@angular/core';
// import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
   constructor(){

    const firebaseConfig = {
      apiKey: "AIzaSyDIvqhn1D9Yo1T4wd7mUXYnvHs-qZSfiEo",
      authDomain: "bibliotheque-app-135a4.firebaseapp.com",
      projectId: "bibliotheque-app-135a4",
      storageBucket: "bibliotheque-app-135a4.firebasestorage.app",
      messagingSenderId: "814140375734",
      appId: "1:814140375734:web:db6ea379c32a1604db1c17",
      measurementId: "G-FC656T1KYV"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    // const analytics = getAnalytics(app);
   }
}
