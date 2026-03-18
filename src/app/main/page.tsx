import logout from "@/actions/auth/logout";
import {
	hasTokenOrUnauthorized,
	hasValidToken,
} from "@/lib/funcs/auth/session";
import { redirect, unauthorized } from "next/navigation";
import HomeButtons from "../../ui/components/home/buttons";

export const metadata = {
	title: "Main | Zirus",
	description: "Welcome to the main page of Zirus.",
};

export default async function MainPage() {
	await hasTokenOrUnauthorized();
	return (
		<main>
			<span className="flex justify-center items-center gap-10">
				<h1 className="justify-self-center">Main Page</h1>
				<form action={logout}>
					<button
						className="text-xl p-3 bg-red-400 hover:bg-red-500"
						type="submit"
					>
						Logout
					</button>
				</form>
			</span>
			<hr />
			<main className="flex flex-col items-center">
				<h2 className="body text-2xl p-3 border border-gray-600/50 w-fit rounded-b-2xl">
					Welcome to your Home Page!
				</h2>
				<HomeButtons />
			</main>
		</main>
	);
}
