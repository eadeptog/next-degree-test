
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import {UserProvider} from '@auth0/nextjs-auth0/client';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Login from "@/app/components/home/login";
import {Drawer} from "@mui/material";


const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Film Academy Fake - Star Wars',
    description: 'Generated by Adrian',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {

    return (
        <html lang="en">
        <body className={inter.className}>
        <UserProvider>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Star Wars
                    </Typography>
                    <Login/>
                </Toolbar>
            </AppBar>
        </Box>
            {children}
        </UserProvider>
        </body>
        </html>
    )
}
