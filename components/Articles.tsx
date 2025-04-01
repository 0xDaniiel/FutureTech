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
    <div className="flex flex-col md:flex-row gap-4 bg-gray-950 rounded-lg shadow-lg mb-10 w-full">
      <div className="w-full md:w-1/2">
        <Image
          src={article.image}
          alt="Articles"
          width={500}
          height={300}
          className="w-full h-auto rounded-lg shadow-lg object-cover"
        />
      </div>
      <section className="flex flex-col gap-6 p-4 w-full md:w-1/2">
        <h2 className="text-2xl font-semibold text-white">{article.title}</h2>
        <p className="text-gray-400">{article.description}</p>

        <div className="flex flex-wrap gap-5 text-gray-300">
          <section className="flex-1 min-w-[150px]">
            <p className="text-gray-400 text-sm md:text-base">Category</p>
            <p className="text-sm md:text-base">{article.category}</p>
          </section>
          <section className="flex-1 min-w-[150px]">
            <p className="text-gray-400 text-sm md:text-base">
              Publication Date
            </p>
            <p className="text-sm md:text-base">{article.publicationDate}</p>
          </section>
          <section className="flex-1 min-w-[150px]">
            <p className="text-gray-400 text-sm md:text-base">Author</p>
            <p className="text-sm md:text-base">{article.author}</p>
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
