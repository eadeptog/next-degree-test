'use client'
import {useUser} from "@auth0/nextjs-auth0/client";

export default function Home() {
    const { user, error, isLoading } = useUser();
    if(user){
        return (
            <main>
                {user.name}
            </main>
        )
    }
  return (
      <main>
          <a href="/api/auth/login">Login</a>
          <a href="/api/auth/logout">Logout</a>
      </main>
  )
}
