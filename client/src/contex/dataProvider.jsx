import { createContext, useState } from "react";

export const DataContex = createContext(null);

const DataProvider = ({ children }) => {
  const [account, setAccount] = useState("");

  return (
    <DataContex.Provider
      value={{
        account,
        setAccount,
      }}
    >
      {children}
    </DataContex.Provider>
  );
};

export default DataProvider;
