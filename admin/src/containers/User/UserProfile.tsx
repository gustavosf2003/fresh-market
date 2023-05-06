import { SectionContainer } from "@/components/SectionContainer";
import Image from "next/image";
export default function UserProfile({ userInformation }) {
  return (
    <SectionContainer className="w-1/2 min-h-[60%]">
      <div className="p-4">
        <div className="flex items-center gap-4">
          <Image
            src="/images/user.png"
            width={80}
            height={80}
            alt="User image"
          />
          <div>
            <p className="font-semibold">Gustavo Ferreira</p>
            <p className="text-sm text-gray-500">Owner</p>
          </div>
        </div>
        <section className="flex flex-col gap-2 mt-6">
          {userInformation.map(({ label, value }) => (
            <div className="flex justify-between">
              <p className="text-sm font-semibold ">{label}:</p>
              <p className="text-sm text-gray-500">{value || "-"}</p>
            </div>
          ))}
        </section>
      </div>
    </SectionContainer>
  );
}
