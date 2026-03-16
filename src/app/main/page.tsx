import logout from "@/actions/auth/logout";
import { hasValidToken } from "@/lib/funcs/auth/session";
import { unauthorized } from "next/navigation";

export const metadata = {
	title: "Main | Zirus",
	description: "Welcome to the main page of Zirus.",
};

export default async function MainPage() {
	const tokenValid = await hasValidToken();
	if (!tokenValid) unauthorized();
	return (
		<main>
			<span className="flex justify-center items-center gap-10">
				<h1 className="justify-self-center">Main Page</h1>
				<form action={logout}>
					<button className="text-xl p-3" type="submit">
						Logout
					</button>
				</form>
			</span>
			<hr />
		</main>
	);
}
