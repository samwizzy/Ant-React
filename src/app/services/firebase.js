import firebaseConfig from './firebaseConfig'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import '@firebase/messaging'

class firebaseService {
    init() {
        if (firebase.apps.length) {
            return;
        }
        firebase.initializeApp(firebaseConfig)
        this.auth = firebase.auth();
        this.db = firebase.database();
        this.messaging = firebase.messaging(); // Messaging: This browser doesn't support the API's required to use the firebase SDK. (messaging/unsupported-browser)
        this.messaging.usePublicVapidKey(
            "BMI3bjKzQpjd7hOxTOe7yS-8EDdUYsENHfOoiGkJnaMtnjupbztBfOMi25CkgIYw3fOMwnqlVbiFqqW3NGsYmXg"
        );
    }

    currentUser = () => {
        if (!this.auth) {
            return;
        }

        const user = firebase.auth().currentUser;

        if (user) {
            return user;
        } else {
            this.onAuthStateChanged(user => {
                console.log("logged in")
                return user;
            })
        }
    };

    pushNotification = () => {
        if (!this.messaging) {
            return;
        }

        this.messaging.requestPermission()
            .then((permission) => {
                console.log("Permission granted")
                return this.messaging.getToken()
            })
            .then((token) => {
                console.log("Firebase token: ", token)
            })
            .catch((error) => {
                console.log("Firebase token error: ", error)
            })

        this.messaging.onMessage((payload) => {
            console.log("onMessage: ", payload)
        })
    }

    pushUser() {
        const ref = this.db.ref().child('users')
        var postsRef = ref.child("posts");

        const data = {
            author: "gracehop",
            title: "Announcing AngularJS, a New Programming Language"
        }

        postsRef.push(data);
    }

    setUser() {
        const ref = this.db.ref().child('users')
        var postsRef = ref.child("posts");

        const data = {
            author: "gracehop",
            title: "Announcing AngularJS, a New Programming Language"
        }
        var newPostRef = postsRef.push();
        newPostRef.set(data); // this will generate key 
    }

    updateUser(data) {
        if (!firebase.apps.length) {
            return;
        }
        const { userId, displayName } = data
        this.db.ref(`users/${userId}`).update({
            displayName
        })
        /** OR */
        this.db.ref(`users/${userId}/displayName`).set(displayName)
    }

    signIn(email, password) {
        this.auth.signInWithEmailAndPassword(email, password)
            .then((response) => {
                // logged in
            })
            .catch((error) => {
                console.log(error, 'error')
            });
    }

    createUser(data) {
        const { email, password, displayName } = data
        this.auth.createUserWithEmailAndPassword(email, password)
            .then(() => {
                let user = firebase.auth().currentUser;
                user.updateProfile({
                    displayName
                })
                this.writeUserData(user, data)
            })
            .catch((error) => {
                console.log(error, "error")
            })
    }

    getUsers = (user) => {
        if (!firebase.apps.length) {
            return;
        }

        return new Promise((resolve, reject) => {
            this.db.ref().child('users')
                .on('value', snapshot => {
                    return resolve(snapshot.val())
                })
        })
    }

    getUserData = (userId) => {
        if (!firebase.apps.length) {
            return;
        }
        return new Promise((resolve, reject) => {
            this.db.ref(`users/${userId}`)
                .once('value')
                .then((snapshot) => {
                    const user = snapshot.val();
                    console.log(user, "single user")
                    resolve(user);
                });
        });
    };

    queryUserData = (userId) => {
        if (!firebase.apps.length) {
            return;
        }
        return new Promise((resolve, reject) => {
            const query = this.db.ref('users').orderByChild('uid').equalTo(userId)
            query.once("child_added", snapshot => {
                return resolve(snapshot.val())
            })
        });
    };

    getChildList = (user) => {
        if (!firebase.apps.length) {
            return;
        }

        return new Promise((resolve, reject) => {
            this.db.ref().child('users').child('hobbies')
                .on('child_added', snapshot => {
                    console.log(snapshot.val())
                })
        })
    }

    checkUserNode = (email) => {
        if (!firebase.apps.length) {
            return;
        }

        return new Promise((resolve, reject) => {
            this.db.ref(`users`)
                .orderByChild('email').equalTo(`${email}`)
                .on('value', snapshot => {
                    const user = snapshot.val();
                    console.log(user, "user checkUserNode")

                    return resolve(user)
                })
        });
    };


    onAuthStateChanged(callback) {
        if (!this.auth) {
            return;
        }

        this.auth.onAuthStateChanged(callback);
    }

    writeUserData(authUser, data) {
        firebase.database().ref().child(`users/${authUser.uid}`).set({
            id: authUser.uid,
            displayName: data.displayName,
            email: authUser.email,
        });
    }

    signOut = () => {
        if (!this.auth) {
            return;
        }
        this.auth.signOut();
    }
}

const instance = new firebaseService()

export default instance