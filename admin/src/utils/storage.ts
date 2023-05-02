import { useState, useEffect } from "react";

export interface LocalStorageService {
  getItem: (key: string) => string | null;
  setItem: (key: string, value: string) => void;
  removeItem: (key: string) => void;
}

const useLocalStorageService = (): LocalStorageService => {
  const [storage, setStorage] = useState<Storage | null>(null);

  useEffect(() => {
    setStorage(window.localStorage);
  }, []);

  const getItem = (key: string): string | null => {
    if (storage) {
      return storage.getItem(key);
    }
    return null;
  };

  const setItem = (key: string, value: string): void => {
    if (storage) {
      storage.setItem(key, value);
    }
  };

  const removeItem = (key: string): void => {
    if (storage) {
      storage.removeItem(key);
    }
  };

  return {
    getItem,
    setItem,
    removeItem,
  };
};

export default useLocalStorageService;
