import { mergeOpenGraph } from "@/lib/mergeOpenGraph";
import { Metadata } from "next";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      hello world
    </main>
  );
}

export const metadata: Metadata = {
  title: 'Home page',
  description: 'Landing page for app',
  openGraph: mergeOpenGraph({
    title: 'Home page',
    url: '/',
  }),
}
