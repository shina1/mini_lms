import { auth, provider } from "@/store/config";
import { signInWithPopup } from "firebase/auth";

export const authSigninWithGoogle = (e, setIsLogIn, router) => {
  e.preventDefault();

  signInWithPopup(auth, provider).then((result) => {
    console.log("result", result);
    localStorage.setItem("isLogIn", "true");
    setIsLogIn(true);
    router.push("/");
  });
};
