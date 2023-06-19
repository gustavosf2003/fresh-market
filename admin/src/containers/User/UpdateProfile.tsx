import { Controller, useForm } from "react-hook-form";
import { Button } from "@/components/Button/Index";
import { InputText } from "@/components/InputText/Index";
import { SectionContainer } from "@/components/SectionContainer";

export default function UpdateProfile({ userInformation }) {
  const {
    register,
    handleSubmit,
    control,
    formState: { isDirty, isValid, errors },
  } = useForm({
    mode: "onChange",
  });
  const onUpdateProfile = handleSubmit(async (data) => {
    try {
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  });
  return (
    <SectionContainer className="w-full">
      <div className="px-12 py-8 ">
        <form className="flex flex-col" onSubmit={onUpdateProfile}>
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-medium">Profile</h2>
              <p className="text-xs font-medium text-gray-400">
                Update your profile information
              </p>
            </div>
            <Button type="submit">Save changes</Button>
          </div>
          <div className="flex flex-col mt-10">
            {userInformation.map(({ label, value }) => (
              <Controller
                key={label}
                control={control}
                name={label}
                render={({ fieldState: { error } }) => (
                  <InputText
                    label={label}
                    {...register(label)}
                    error={error?.message}
                  />
                )}
              />
            ))}
          </div>
        </form>
      </div>
    </SectionContainer>
  );
}
