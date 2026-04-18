import { auth } from "../firebase/Firebase.js";
import { GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from "firebase/auth";



export const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
        const result = await signInWithPopup(auth, provider);
        console.log("Google login result:", result);

        const user = result.user;

        return {
            username: user.displayName,
            email: user.email,
            //   photo: user.photoURL,
            uid: user.uid
        };

    } catch (error) {
        throw error;
    }
};

export const loginWithGithub = async () => {
    const provider = new GithubAuthProvider();
    try {
        const result = await signInWithPopup(auth, provider);

        console.log("GitHub login result:", result);
        return {
            username: result.user.displayName,
            email: result.user.email || `${result.user.uid}@github.com`, // GitHub may not provide email, so we create a dummy one using uid
            uid: result.user.uid
        };
    } catch (error) {
        throw error;

    }
};