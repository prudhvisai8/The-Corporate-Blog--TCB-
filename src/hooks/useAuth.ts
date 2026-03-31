import { useState, useEffect } from "react";

interface MockUser {
  id: string;
  email: string;
}

interface MockSession {
  user: MockUser;
}

export function useAuth() {
  const [user, setUser] = useState<MockUser | null>(null);
  const [session, setSession] = useState<MockSession | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Check localStorage for mock auth
    const stored = localStorage.getItem("mock-auth-user");
    if (stored) {
      const u = JSON.parse(stored) as MockUser;
      setUser(u);
      setSession({ user: u });
    }
    setLoading(false);
  }, []);

  const signIn = (email: string, _password: string) => {
    const u: MockUser = { id: "user-mock-1", email };
    localStorage.setItem("mock-auth-user", JSON.stringify(u));
    setUser(u);
    setSession({ user: u });
  };

  const signUp = (email: string, _password: string, _fullName?: string) => {
    const u: MockUser = { id: "user-mock-1", email };
    localStorage.setItem("mock-auth-user", JSON.stringify(u));
    setUser(u);
    setSession({ user: u });
  };

  const signOut = async () => {
    localStorage.removeItem("mock-auth-user");
    setUser(null);
    setSession(null);
  };

  return { user, session, loading, signIn, signUp, signOut };
}
