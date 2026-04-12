import { hasTokenOrUnauthorized } from "@/lib/funcs/auth/session";
import getCurrentGame from "@/lib/funcs/game/getGame";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Game | Zirus",
    description: "Continue your last game or start a new one.",
};

export default async function GamePage() {
    await hasTokenOrUnauthorized();
    const currentGame = await getCurrentGame();
    return (
        <main className="flex h-full flex-col">
            <section className="flex flex-1/10 border border-white">
                <section className="flex basis-1/5 items-center justify-center border-r border-white">
                    <button className="rounded-3xl bg-red-500 p-5 px-10 text-2xl hover:bg-red-600">
                        Exit
                    </button>
                </section>
                <section className="flex flex-1 items-center justify-between px-10">
                    <div className="flex items-center gap-5">
                        <Image
                            src={"/settings.png"}
                            alt="settings icon"
                            width={100}
                            height={100}
                        />
                        <Image
                            src={"/save.png"}
                            alt="save icon"
                            width={100}
                            height={100}
                        />
                    </div>
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-400 text-center text-black">
                        Profile
                    </div>
                </section>
            </section>
            <section className="flex flex-4/5 border-x border-b border-white">
                <main className="flex-1 border-r border-r-white"></main>
                <section className="shrink-0 basis-1/5"></section>
            </section>
        </main>
    );
}
