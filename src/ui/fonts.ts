import { DM_Sans, Inter, Orbitron } from "next/font/google";

export const orbitron = Orbitron({
	subsets: ["latin"],
	weight: "variable",
	variable: "--font-orbitron",
});

export const dmSans = DM_Sans({
	subsets: ["latin"],
	weight: "variable",
	variable: "--font-dm-sans",
});

export const inter = Inter({
	subsets: ["latin"],
	weight: "variable",
	variable: "--font-inter",
});

const fonts = {
	display: orbitron,
	text: dmSans,
	fallback: inter,
};

export default fonts;
