import React from "react";
import Image from "next/image";
import { Heart, Share2 } from "lucide-react";

const article = {
  title: "Global Climate Summit Address Urgent Climate Action",
  description:
    "World leaders gathered at the Global Climate Summit to discuss urgent climate action, emissions reductions, and renewable energy targets.",
  category: "Environment",
  publicationDate: "2023-10-01",
  author: "John Doe",
  image: "/images/climateImg.svg",
  stats: [
    { label: "Likes", count: 120, icon: <Heart className="text-red-500" /> },
    { label: "Shares", count: 45, icon: <Share2 className="text-blue-500" /> },
  ],
};

const Articles = () => {
  return (
    <div className="grid gap-4 md:flex bg-gray-950 items-center p-5 rounded-lg shadow-lg mb-10">
      <Image
        src={article.image}
        alt="Articles"
        width={200}
        height={200}
        className="w-full md:w-1/2 h-auto rounded-lg shadow-lg"
      />
      <section className="flex flex-col gap-6 p-4">
        <h2 className="text-2xl font-bold text-white">{article.title}</h2>
        <p className="text-gray-400">{article.description}</p>

        <div className="grid grid-cols-2 md:flex justify-between gap-4 text-gray-300">
          <section>
            <p className="text-gray-400">Category</p>
            <p>{article.category}</p>
          </section>
          <section>
            <p className="text-gray-400">Publication Date</p>
            <p>{article.publicationDate}</p>
          </section>
          <section>
            <p className="text-gray-400">Author</p>
            <p>{article.author}</p>
          </section>
        </div>

        <div className="flex justify-between items-center mt-4">
          <section className="flex gap-6">
            {article.stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-2">
                {stat.icon}
                <p>{stat.count}</p>
              </div>
            ))}
          </section>
          <section>
            <p className="text-blue-400 cursor-pointer hover:underline">
              Read more
            </p>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Articles;
