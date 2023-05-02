import useAuth from "@/hooks/useAuth";

export default function Home() {
  useAuth();
  return (
    <main className="text-primary">
      <h1>dashboard</h1>
    </main>
  );
}
