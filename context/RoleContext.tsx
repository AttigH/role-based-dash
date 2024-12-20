'use client';

import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

// Define the type for the role and context
type RoleContextType = {
  role: string | null;
  setRole: (role: string) => void;
};

// Create the context with default values
const RoleContext = createContext<RoleContextType>({
  role: null,
  setRole: () => {},
});

// RoleProvider component
export const RoleProvider = ({ children }: { children: ReactNode }) => {
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    // Fetch the role from localStorage when the provider is mounted
    const savedRole = localStorage.getItem('role');
    setRole(savedRole);
  }, []);

  return <RoleContext.Provider value={{ role, setRole }}>{children}</RoleContext.Provider>;
};

// Custom hook to use the RoleContext
export const useRole = () => useContext(RoleContext);
