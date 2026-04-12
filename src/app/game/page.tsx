import { hasTokenOrUnauthorized } from "@/lib/funcs/auth/session";
import getCurrentGame from "@/lib/funcs/game/getGame";
import type { Metadata } from "next";
import Link from "next/link";
import { File, Folder } from "../../ui/components/game/file-folder";

export const metadata: Metadata = {
    title: "Game | Zirus",
    description: "Continue your last game or start a new one.",
};

export default async function GamePage() {
    await hasTokenOrUnauthorized();
    const currentGame = await getCurrentGame();
    return (
        <main className="flex h-full flex-col">
            <section className="flex-1/5 border border-white"></section>
            <section className="flex flex-4/5 border border-white">
                <main className="flex-1 border-r border-r-white"></main>
                <section className="flex-1/6"></section>
            </section>
        </main>
    );
}
