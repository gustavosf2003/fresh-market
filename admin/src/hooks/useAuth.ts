import { useLayoutEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { StorageKeys } from "@/config/constants";
import { RoutesName } from "@/config/routes";

interface AuthResponse {
  isAuthenticated: boolean;
}

const useAuth = () => {
  const router = useRouter();
  const logout = () => {
    localStorage.getItem(StorageKeys.token);
    router.push(RoutesName.login);
  };
  useLayoutEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.post<AuthResponse>(
          process.env.API_ENDPOINT + "/admin/isAuthenticated",
          {
            token: localStorage.getItem(StorageKeys.token),
          }
        );
        if (!response.data.isAuthenticated) {
          console.log("notAuthenticated");
          logout();
        }
      } catch (error) {
        console.error(error);
        logout();
      }
    };

    checkAuth();
  }, []);

  return null;
};

export default useAuth;
