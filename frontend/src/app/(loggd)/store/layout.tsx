import { StoreProvider } from "@/client/context/storeContext"
import { Metadata } from "next"

export const metadata: Metadata = {
	title: 'Store | CS SKINS STORE',
	icons:	{
		icon: '/favicon.png',
	},
}

export default function storeLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
		<StoreProvider>
			<main className="w-full min-h-screen bg-[#111111]">
				{children}
			</main>
		</StoreProvider>
	)
}   
