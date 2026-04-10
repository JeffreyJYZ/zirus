import signin from "@/actions/auth/signin";
import AuthForm from "@/ui/components/auth/form";

export default function LoginPage() {
	return (
		<main className="self-center justify-self-center text-center items-center justify-center">
			<h1>Login</h1>
			<AuthForm act={signin} login />
		</main>
	);
}
