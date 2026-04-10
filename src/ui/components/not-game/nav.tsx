"use client";

import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
	return (
		<nav className="p-5 rounded-4xl bg-gray-900/90 w-5/6 md:w-40 flex flex-col items-center fixed gap-4 text-center md:h-11/12">
			<Image
				src="/vercel.svg" // TODO: Replace with actual logo
				alt="Logo"
				width={1155}
				height={1000}
				style={{ width: "50px", height: "auto" }}
				className="mt-4"
			/>
			<ul className="flex flex-row gap-4 items-center md:flex-col md:flex-1 justify-center w-full text-2xl">
				<li>
					<Link href={"/"}>Home</Link>
				</li>
				<li>
					<Link href={"/login"}>Log In</Link>
				</li>
				<li>
					<Link href={"/signup"}>Sign Up</Link>
				</li>
				<li>
					<Link href={"/about"}>About</Link>
				</li>
			</ul>
			<i>Zirus v1.0.0</i>
		</nav>
	);
}
