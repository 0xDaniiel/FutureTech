import Hero from "@/components/Hero";
import Articles from "@/components/Articles";
import ArticleCards from "@/components/ArticleCards";

export default function Home() {
  return (
    <div className="md:px-10 px-7 py-5 text-white flex flex-col gap-10">
      <Hero />
      <Articles />
      <ArticleCards />
    </div>
  );
}
