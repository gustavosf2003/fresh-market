import Layout from "@/components/Layout";
import UpdateProfile from "@/containers/User/UpdateProfile";
import UserProfile from "@/containers/User/UserProfile";

export default function Profile() {
  const userInformation = [
    { label: "Name", value: "Gustavo Ferreira" },
    { label: "Email", value: "gsferreira2003@gmail.com" },
    { label: "Phone", value: "309158206" },
    { label: "Store Name", value: "Fresh Market" },
    { label: "Address", value: "Rua Joao do nascimento costa" },
    { label: "Tax number", value: "309158206" },
  ];
  return (
    <Layout className="flex items-start !flex-row">
      <UserProfile userInformation={userInformation} />
      <UpdateProfile userInformation={userInformation} />
    </Layout>
  );
}
