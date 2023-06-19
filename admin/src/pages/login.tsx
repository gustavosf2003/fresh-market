import LoginForm from "@/containers/LoginForm";
export default function Login() {
  return (
    <div className="flex flex-col w-screen min-h-screen bg-gray-100">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="text-5xl font-[Caveat] text-primary">Fresh Market</div>
        <LoginForm />
      </div>
    </div>
  );
}
