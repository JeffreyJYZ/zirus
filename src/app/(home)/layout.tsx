import NavBar from "../../ui/components/not-game/nav";
export default function HomeLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<main className="flex md:flex-row flex-col gap-10 h-full">
			<NavBar />
			<main className="mt-50 md:ml-65 md:mt-10 justify-center items-center flex flex-col text-center">
				{children}
			</main>
		</main>
	);
}
