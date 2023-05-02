import LoginForm from "../containers/LoginForm";
export default function Login() {
  return (
    <main className="text-primary">
      {process.env.API_ENDPOINT}
      <LoginForm />
    </main>
  );
}
