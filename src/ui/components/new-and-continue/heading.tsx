"use client";

export default function Heading({ new: isNew = false }: { new?: boolean }) {
	return (
		<>
			<h1 className="font-bold self-center justify-self-center text-center w-full">
				{isNew ? "Create New Game" : "Continue Game"}
			</h1>

			<hr className="border border-white w-30" />
		</>
	);
}
