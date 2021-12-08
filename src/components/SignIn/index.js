import { GoogleAuthProvider, signInWithPopup } from "@firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import { authconst, provider } from '../../services/firebase/config';
import Button from "../forms/Button";
import './styles.scss';

const SignIn = () => {
    let navigate = useNavigate()

    let handleSubmit = async e => {
        e.preventDefault()
    }

    let signInWithGoogle = () => signInWithPopup(authconst, provider).then((result) => {
        const credentials = GoogleAuthProvider.credentialFromResult(result);
        const token = credentials.accessToken;
        const user = result.user;
        navigate("/")
        return { user, token };
    }).catch((error) => {
        const err_code = error.code;
        const err_message = error.message;
        const err_email = error.email;
        const err_credential = GoogleAuthProvider.credentialFromError(error);
        const err_obj = { err_code, err_message, err_email, err_credential };
        console.log(err_obj);
    })


    return (
        <div className="signin">
            <div className="wrap">
                <h2>
                    Login
                </h2>
                <div className="formWrap">
                    <form onSubmit={handleSubmit}>
                        <div className="socialSignIn">
                            <div className="row">
                                <Button onClick={signInWithGoogle}>
                                    SignIn With Google
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default SignIn;
