import Hero from "@/components/Hero";
import Articles from "@/components/Articles";

export default function Home() {
  return (
    <div className="px-10 py-5 text-white flex flex-col gap-10">
      <Hero />
      <Articles />
    </div>
  );
}
