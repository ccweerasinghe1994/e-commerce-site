import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore'


// // Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBau7xj548JjjK6e89i0w1164EX--heQ44",
    authDomain: "e-commerce-site-762d1.firebaseapp.com",
    databaseURL: "https://e-commerce-site-762d1.firebaseio.com",
    projectId: "e-commerce-site-762d1",
    storageBucket: "e-commerce-site-762d1.appspot.com",
    messagingSenderId: "323957775284",
    appId: "1:323957775284:web:a01b1b6a9aa40ecea070e1",
    measurementId: "G-GDW36HKZ73"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const collectionRef = firestore.collection('users');
    const collectionSnapShot = await collectionRef.get();
    console.log("collectionSnapShot",collectionSnapShot)

    const snapShot = await userRef.get();

    if (!snapShot.exists){
        const {displayName,email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch (error){
            console.error('Error Creating A User',error.message)
        }
    }

    return userRef;

}

// // Initialize Firebase
firebase.initializeApp(firebaseConfig);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
})

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
