import { Button } from "@/components/Button/Index";
import Layout from "@/components/Layout";
import Image from "next/image";
import { InputText } from "@/components/InputText/Index";
import Card from "@/components/Card";

const users = [
  {
    id: 0,
    colorId: 0,
    createdAt: "06/10/2003",
    name: "Gustavo Ferreira",
    address: "Rua joao do nascimento costa",
  },
  {
    id: 1,
    colorId: 3,
    createdAt: "16/04/2023",
    name: "Vitor Afonso ",
    address: "Rua do Olival",
  },
  {
    id: 2,
    colorId: 1,
    createdAt: "24/12/2018",
    name: "Diego Kfuri",
    address: "Rua outeirinho do mirante",
  },
  {
    id: 3,
    colorId: 2,
    createdAt: "11/02/2023",
    name: "Fabio sousa",
    address: "Rua joao do nascimento costa",
  },
  {
    id: 4,
    colorId: 0,
    createdAt: "01/02/2023",
    name: "Marisa Ferreira",
    address: "Rua alice manholer piteri",
  },
];

export default function Users() {
  return (
    <Layout>
      <div className="flex justify-between ">
        <div className="flex gap-32">
          <h1 className="text-3xl font-semibold">Users</h1>
          <InputText
            placeholder="Search"
            icon={
              <Image
                height={14}
                width={14}
                src="/icons/search.svg"
                alt="Add user icon"
              />
            }
          />
        </div>
        <Button>
          <Image
            height={20}
            width={20}
            src="/icons/plus.svg"
            alt="Add user icon"
          />
          Add user
        </Button>
      </div>
      <section className="mt-10 ">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {users.map((user, i) => (
            <Card
              listPosition={i}
              key={user.id}
              colorId={user.colorId}
              createdAt={user.createdAt}
              name={user.name}
              address={user.address}
            />
          ))}
        </div>
      </section>
    </Layout>
  );
}
