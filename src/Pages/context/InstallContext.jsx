 import React, { createContext, useState, useContext, useEffect } from 'react';

const InstallContext = createContext();

export const InstallProvider = ({ children }) => {
 
  const [installedApps, setInstalledApps] = useState(() => {
    const savedApps = localStorage.getItem('my_installed_apps');
    return savedApps ? JSON.parse(savedApps) : [];
  });

  
  useEffect(() => {
    localStorage.setItem('my_installed_apps', JSON.stringify(installedApps));
  }, [installedApps]);

   
  const addToInstallList = (app) => {
     
    const isExist = installedApps.find((item) => item.id === app.id);
    if (!isExist) {
      setInstalledApps((prev) => [...prev, app]);
    } else {
      console.log("App already installed!");
    }
  };

  
  const removeFromInstallList = (id) => {
    setInstalledApps((prev) => prev.filter(app => app.id !== id));
  };

  return (
    <InstallContext.Provider value={{ installedApps, addToInstallList, removeFromInstallList }}>
      {children}
    </InstallContext.Provider>
  );
};
 
export const useInstall = () => {
  const context = useContext(InstallContext);
  if (!context) {
    throw new Error("useInstall must be used within an InstallProvider");
  }
  return context;
};