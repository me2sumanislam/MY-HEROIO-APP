 import React, { createContext, useState, useContext, useEffect } from 'react';
import { toast } from "react-toastify";

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
    const isExist = installedApps.find(
      (item) => Number(item.id) === Number(app.id)
    );

    if (!isExist) {
      setInstalledApps((prev) => [...prev, app]);
 
    }
  };

  const removeFromInstallList = (id) => {
    
    setInstalledApps((prev) =>
      prev.filter((app) => Number(app.id) !== Number(id))
    );

    toast.error(`Uninstalled Successfully `, {
      position: "top-right",
      autoClose: 1500,
      theme: "colored",
    });
  };

  return (
    <InstallContext.Provider value={{ 
      installedApps, 
      addToInstallList, 
      removeFromInstallList 
    }}>
      {children}
    </InstallContext.Provider>
  );
};

export const useInstall = () => {
  const context = useContext(InstallContext);
  if (!context) {
    throw new Error("useInstall must be used within InstallProvider");
  }
  return context;
};