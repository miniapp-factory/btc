import { description, title, url } from "@/lib/metadata";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  return {
    other: {
      "fc:miniapp": JSON.stringify({
        version: "next",
        imageUrl: `${url}/icon.png`,
        ogTitle: title,
        ogDescription: description,
        ogImageUrl: `${url}/icon.png`,
        button: {
          title: "Launch Mini App",
          action: {
            type: "launch_miniapp",
            name: title,
            url: url,
            splashImageUrl: `${url}/icon.png`,
            iconUrl: `${url}/icon.png`,
            splashBackgroundColor: "#000000",
            description: description,
            primaryCategory: "utility",
            tags: [],
          },
        },
      }),
    },
  };
}

export default function Home() {
  return (
    <main className="flex flex-col gap-3 place-items-center px-4">
      <span className="text-2xl">{title}</span>
      <span className="text-muted-foreground">{description}</span>
      <section className="mt-6 w-full max-w-2xl">
        <h2 className="text-xl font-semibold mb-2">Why Bitcoin is Great</h2>
        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
          <li>Decentralized and censorship‑resistant.</li>
          <li>Limited supply of 21 million coins ensures scarcity.</li>
          <li>Transparent ledger that anyone can audit.</li>
          <li>Low transaction fees for cross‑border transfers.</li>
          <li>Widely accepted as a store of value and medium of exchange.</li>
        </ul>
      </section>
    </main>
  );
}
