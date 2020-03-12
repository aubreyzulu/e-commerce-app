import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const Config = {
    apiKey: "AIzaSyCoSR8x2seuP5EEuUhqAZTflgpcpBiFUvo",
    authDomain: "e-commerce-app-98303.firebaseapp.com",
    databaseURL: "https://e-commerce-app-98303.firebaseio.com",
    projectId: "e-commerce-app-98303",
    storageBucket: "e-commerce-app-98303.appspot.com",
    messagingSenderId: "344187104744",
    appId: "1:344187104744:web:2502cd3e9b8976b0c3485d",
    measurementId: "G-WD2HQK136N"
};


export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }

    return userRef;
}

firebase.initializeApp(Config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;