'use client'
import {useUser} from "@auth0/nextjs-auth0/client";
import Button from "@mui/material/Button";
import * as React from "react";

export default function Login(){
    const { user, error, isLoading } = useUser();
    if(error){
        return(<>
            Error loading user
        </>)
    }
    if(isLoading){
        return(<>
            Loading...
        </>)
    }
    if(user){
        return (
            <>
                Logged in as: {user.name} -
                <span className="p-2"></span>
                <Button color="inherit" variant="outlined">
                    <a href="/api/auth/logout"> Logout</a>
                </Button>
            </>
        )
    }
    return (
        <>
        <Button color="inherit"><a href="/api/auth/login">Login</a></Button>
        </>
    )
}