import { StorageKeys } from "@/config/constants";
import axios from "axios";

export async function login(body, localStorageService) {
  const response = await axios.post(process.env.API_ENDPOINT + "/admin/login", {
    login: body.login,
    password: body.password,
  });
  if (response.data.token) {
    localStorageService.setItem(StorageKeys.token, response.data.token);
  }
  if (response.data.error) {
    throw { detail: response.data.error };
  }
}
