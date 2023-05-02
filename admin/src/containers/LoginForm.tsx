import { Controller, useForm } from "react-hook-form";
import { Button } from "@/components/Button/Index";
import { InputText } from "@/components/InputText/Index";
import useLocalStorageService from "@/utils/storage";
import { login } from "@/services/login";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { StorageKeys } from "@/config/constants";
import { RoutesName } from "@/config/routes";

export default function AuthenticateForm() {
  const router = useRouter();
  const localStorageService = useLocalStorageService();
  const {
    register,
    handleSubmit,
    control,
    setFocus,
    setError,
    formState: { isDirty, isValid, errors },
  } = useForm({
    mode: "onChange",
    defaultValues: { login: "", password: "" },
  });

  useEffect(() => {
    localStorageService.removeItem(StorageKeys.token);
  }, []);

  const onLogin = handleSubmit(async (data) => {
    try {
      await login(data, localStorageService);
      router.replace(RoutesName.default);
    } catch (error) {
      if (typeof error.detail === "string") {
        setError("login", { type: "manual", message: error.detail });
        setError("password", {
          type: "manual",
          message: error.detail,
        });
      } else {
        console.log(error);
        setError("login", { type: "manual", message: "Internal Error" });
        setError("password", { type: "manual", message: "Internal Error" });
      }
    }
  });
  return (
    <form onSubmit={onLogin} className="flex flex-col">
      <div className="flex flex-col gap-3">
        <Controller
          control={control}
          name="login"
          rules={{ required: true }}
          render={({ fieldState: { error } }) => (
            <InputText
              label="Login"
              {...register("login", { required: true })}
              error={
                errors.login?.type === "required"
                  ? "Login is required"
                  : error?.message
              }
            />
          )}
        />
        <Controller
          control={control}
          name="login"
          rules={{ required: true }}
          render={({ fieldState: { error } }) => (
            <InputText
              label="Password"
              type="password"
              {...register("password", { required: true })}
              error={
                errors.password?.type === "required"
                  ? "Password is required"
                  : error?.message
              }
            />
          )}
        />
      </div>
      <Button styledClassName="w-2 mt-4" onClick={onLogin}>
        Send form
      </Button>
    </form>
  );
}
