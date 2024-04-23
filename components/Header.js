// components/Header.js

import { useSession, signIn, signOut } from "next-auth/react";

export default function Header() {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  return (
    <header className="bg-white shadow">
      <nav className="flex justify-between items-center py-6 px-10">
        <div className="text-xl">Proxy Real Estate</div>
        <div>
          <a href="#" className="text-blue-600 px-4">Home</a>
          <a href="#" className="text-blue-600 px-4">Our Concept</a>
          <a href="#" className="text-blue-600 px-4">How It Works</a>
          <a href="#" className="text-blue-600 px-4">About Us</a>
          {loading ? (
            <p>Loading...</p>
          ) : session ? (
            <>
              <p>Welcome, {session.user.email}</p>
              <button onClick={() => signOut()}>Sign out</button>
            </>
          ) : (
            <button onClick={() => signIn()}>Sign in</button>
          )}
        </div>
      </nav>
    </header>
  );
}

