'use client'
import {useUser} from "@auth0/nextjs-auth0/client";
import Button from "@mui/material/Button";
import * as React from "react";
import Typography from "@mui/material/Typography";

export default function LandingPage(){
    return (
        <main>
            <div className="flex flex-col lg:flex-row">
                <div className="lg:basis-1/2">
                    <div className="flex flex-row p-10">
                        <div className="basis-1/3"></div>
                        <div className="basis-1/3">

                            <img src="star-wars-1.svg" alt=""/>
                        </div>
                        <div className="basis-1/3"></div>
                    </div>
                    <Typography className="m-2 text-center lg:py-10" variant="h2" gutterBottom>
                        Welcome to the fake academy of Star Wars
                    </Typography>

                    <div className="flex flex-row">
                        <div className="basis-1/3"></div>
                        <div className="basis-1/3">
                            <a href="/api/auth/login" data-testid="login-button"><Button className="w-full" variant="outlined">Login</Button></a>
                        </div>
                        <div className="basis-1/3"></div>
                    </div>
                </div>
                <div className="lg:basis-1/2">
                    <div className="m-5 py-10 lg:p-0">
                        <img
                            sizes="(max-width: 1185px) 100vw, 1185px"
                            srcSet="
                                star-wars-poster_hxzaym_c_scale,w_200.jpg 200w,
                                star-wars-poster_hxzaym_c_scale,w_348.jpg 348w,
                                star-wars-poster_hxzaym_c_scale,w_428.jpg 428w,
                                star-wars-poster_hxzaym_c_scale,w_518.jpg 518w,
                                star-wars-poster_hxzaym_c_scale,w_595.jpg 595w,
                                star-wars-poster_hxzaym_c_scale,w_666.jpg 666w,
                                star-wars-poster_hxzaym_c_scale,w_725.jpg 725w,
                                star-wars-poster_hxzaym_c_scale,w_794.jpg 794w,
                                star-wars-poster_hxzaym_c_scale,w_846.jpg 846w,
                                star-wars-poster_hxzaym_c_scale,w_900.jpg 900w,
                                star-wars-poster_hxzaym_c_scale,w_953.jpg 953w,
                                star-wars-poster_hxzaym_c_scale,w_1007.jpg 1007w,
                                star-wars-poster_hxzaym_c_scale,w_1055.jpg 1055w,
                                star-wars-poster_hxzaym_c_scale,w_1104.jpg 1104w,
                                star-wars-poster_hxzaym_c_scale,w_1185.jpg 1185w"
                            src="star-wars-poster_hxzaym_c_scale,w_1185.jpg"
                            alt="star wars image"/>
                    </div>
                </div>
            </div>
        </main>
    )
}