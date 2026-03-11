import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<main>
			<h1 className="text-4xl font-bold">Welcome to Zirus!</h1>
			<p className="mt-4 text-lg">Under active development</p>
			<div className="flex flex-col gap-2 mt-4">
				<Link
					href="https://github.com/JeffreyJYZ/zirus"
					target="_blank"
					className="text-blue-500 hover:underline text-2xl"
				>
					Repo
				</Link>
				<span>
					Email me at{" "}
					<Link
						href="mailto:yizhoujiang11@gmail.com"
						className="text-blue-500 hover:underline"
					>
						yizhoujiang11@gmail.com
					</Link>{" "}
					For any questions or suggestions!
				</span>
			</div>
		</main>
	);
}
