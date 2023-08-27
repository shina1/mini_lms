import { auth } from '@/store/config';
import {signOut} from 'firebase/auth'
import { Dispatch, SetStateAction } from 'react';
import { useRouter } from "next/router";



export const logOut = (setIsLogIn: Dispatch<SetStateAction<boolean>>) => {
    const router = useRouter();
    signOut(auth).then(()=>{
        localStorage.clear()
        setIsLogIn(false)
        router.push('/')
    })
}