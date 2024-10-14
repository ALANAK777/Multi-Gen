import React, { createContext, useState } from 'react';

type UpdateCreditUsageContextType = {
  updateCreditUsage: number;
  setUpdateCreditUsage: React.Dispatch<React.SetStateAction<number>>;
};

export const UpdateCreditUsageContext = createContext<UpdateCreditUsageContextType>({
  updateCreditUsage: 0,
  setUpdateCreditUsage: () => {},
});

export const UpdateCreditUsageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [updateCreditUsage, setUpdateCreditUsage] = useState<number>(0);

  return (
    <UpdateCreditUsageContext.Provider value={{ updateCreditUsage, setUpdateCreditUsage }}>
      {children}
    </UpdateCreditUsageContext.Provider>
  );
};
