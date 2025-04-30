// src/modules/users/contexts/UsersContext.tsx
import React, { createContext, useContext } from 'react';

import { User } from '@/modules/users/contracts/user';
import { UseCase } from '@/packages/common';

interface UsersContextProps {
  services: {
    getUsersService: UseCase<void, Promise<User[]>>;
  };
}

const AppContext = createContext<UsersContextProps | null>(null);

interface AppProviderProps {
  children: React.ReactNode;
  services: {
    getUsersService: UseCase<void, Promise<User[]>>;
  };
}

export const AppProvider: React.FC<AppProviderProps> = ({ children, services }) => {
  return <AppContext.Provider value={{ services }}>{children}</AppContext.Provider>;
};

export const useUsersContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('Sem contexto');
  }

  return context;
};
