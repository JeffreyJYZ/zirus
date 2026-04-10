import { ElementClass } from "@/lib/types/";
import Link from "next/link";
import { hasValidToken } from "../../lib/funcs/auth/session";
import { redirect } from "next/navigation";

export default async function HomePage() {
	const buttonClasses: ElementClass =
		/* tailwind */ "p-8 bg-blue-500/30 text-2xl rounded-4xl hover:shadow-blue-900 hover:-translate-y-1 transition-all duration-500";
	if (await hasValidToken()) redirect("/main");
	return (
		<>
			<h1 className="text-9xl font-bold text-blue-100 mt-10 md:mt-20">
				Zirus
			</h1>

			<section className="mt-10 flex gap-5 flex-wrap">
				<Link href={"https://dev.zirus.io"} className={buttonClasses}>
					Developer Page
				</Link>
				<Link
					href={"https://journey.zirus.io"}
					className={buttonClasses}
				>
					Journey Page
				</Link>
				<Link href={"https://zirus-game"} className={buttonClasses}>
					GitHub
				</Link>
			</section>
		</>
	);
}
