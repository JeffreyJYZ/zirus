"use client";

import { redirect } from "next/navigation";

export default function HomeButtons() {
	const actionBtnsClasses = "p-10 text-2xl rounded-4xl";
	return (
		<div className="flex flex-wrap gap-5 mt-10 justify-center">
			<button className={actionBtnsClasses}>Continue a game</button>
			<button className={actionBtnsClasses}>Create a game</button>
			<button
				onClick={() => redirect("/game")}
				className={actionBtnsClasses}
			>
				Continue your last game
			</button>
		</div>
	);
}
