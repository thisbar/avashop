import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBJy6CCwTFDUOG5JV9JDgtwKEF0MkBWIzY",
    authDomain: "avashop-f06be.firebaseapp.com",
    projectId: "avashop-f06be",
    storageBucket: "avashop-f06be.appspot.com",
    messagingSenderId: "143601704269",
    appId: "1:143601704269:web:04087e2d1e8eac2a4bab04"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
