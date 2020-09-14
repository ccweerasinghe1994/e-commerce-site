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
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.error('Error Creating A User', error.message)
        }
    }

    return userRef;

}


// // Initialize Firebase
firebase.initializeApp(firebaseConfig);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const GoogleProvider = new firebase.auth.GoogleAuthProvider();
GoogleProvider.setCustomParameters({
    prompt: 'select_account'
})



export const addCollectionAndDocuments = async (collectionKey, objectToAdd) => {

    const collectionRef = firestore.collection(collectionKey);
    console.log("collectionRef", collectionRef)
    const batch = firestore.batch();

    objectToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc()
        batch.set(newDocRef, obj);

    })
    return await batch.commit();
}
export const convertCollectionSnapShotToMap = collections => {
    const transFormedCollection = collections.docs.map(doc => {
        const {title, items} = doc.data();
        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    })

    return transFormedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {})

}
export default firebase;
