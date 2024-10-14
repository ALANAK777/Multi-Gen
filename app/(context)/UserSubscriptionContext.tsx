import React, { createContext, useState, useContext } from 'react';

interface UserSubscriptionContextType {
  userSubscription: any;
  setUserSubscription: React.Dispatch<React.SetStateAction<any>>;
}

const defaultValue: UserSubscriptionContextType = {
  userSubscription: null,
  setUserSubscription: () => {},
};

export const UserSubscriptionContext = createContext<UserSubscriptionContextType>(defaultValue);

export const useUserSubscription = () => useContext(UserSubscriptionContext);

export const UserSubscriptionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userSubscription, setUserSubscription] = useState<any>(null);

  return (
    <UserSubscriptionContext.Provider value={{ userSubscription, setUserSubscription }}>
      {children}
    </UserSubscriptionContext.Provider>
  );
};
