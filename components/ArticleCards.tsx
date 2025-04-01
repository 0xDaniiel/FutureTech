"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { useState } from "react";
import { Heart, Share2, ChevronRight } from "lucide-react";

const articles = [
  {
    title: "Global Climate Summit Address Urgent Climate Action",
    description:
      "World leaders gathered at the Global Climate Summit to discuss urgent climate action, emissions reductions, and renewable energy targets.",
    category: "Environment",
    publicationDate: "2023-10-01",
    author: "John Doe",
    image: "/images/articleimg1.svg",
    stats: { likes: 120, shares: 45 },
  },
  {
    title: "Tech Industry Sees Rise in AI Innovations",
    description:
      "The tech sector is booming with new AI advancements that promise to reshape industries and improve automation capabilities.",
    category: "Technology",
    publicationDate: "2023-09-15",
    author: "Jane Smith",
    image: "/images/articleimg2.svg",
    stats: { likes: 200, shares: 90 },
  },
  {
    title: "Breakthrough in Renewable Energy Achieved",
    description:
      "Scientists have developed a new solar panel technology that significantly increases energy efficiency.",
    category: "Science",
    publicationDate: "2023-08-20",
    author: "Emily Johnson",
    image: "/images/articleimg3.svg",
    stats: { likes: 300, shares: 150 },
  },
];

const ArticleCards = () => {
  const [likes, setLikes] = useState(
    articles.map((article) => ({ liked: true, count: article.stats.likes })) // Set default liked to true
  );

  const handleLike = (index: number) => {
    setLikes((prevLikes) =>
      prevLikes.map((like, i) =>
        i === index
          ? {
              liked: !like.liked,
              count: like.liked ? like.count - 1 : like.count + 1,
            }
          : like
      )
    );
  };

  const handleShare = async (title: string) => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert(`Link to "${title}" copied to clipboard!`);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className="grid gap-6 md:grid-cols-3 bg-gray-950 rounded-lg shadow-lg mb-10 w-full px-4">
      {articles.map((article, index) => (
        <Card
          key={index}
          className="bg-black text-white shadow-lg rounded-lg overflow-hidden flex flex-col h-full"
        >
          <CardHeader className="p-0">
            <Image
              src={article.image}
              alt="Article Image"
              width={500}
              height={300}
              className="w-full h-48 object-cover rounded-t-lg"
            />
          </CardHeader>
          <CardContent className="p-4 flex-1 flex flex-col justify-between">
            <div>
              <CardTitle className="text-lg font-semibold">
                {article.title}
              </CardTitle>
              <CardDescription className="text-gray-400 mt-2">
                {article.category}
              </CardDescription>
            </div>
            <CardFooter className="flex justify-between items-center mt-4 w-full">
              <div className="flex gap-4">
                {/* Like Button */}
                <button
                  onClick={() => handleLike(index)}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <Heart
                    className={
                      likes[index].liked ? "text-red-500" : "text-gray-500"
                    }
                  />
                  <p>{likes[index].count}</p>
                </button>
                {/* Share Button */}
                <button
                  onClick={() => handleShare(article.title)}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <Share2 className="text-blue-500" />
                  <p>{article.stats.shares}</p>
                </button>
              </div>
              {/* Read More */}
              <p className="text-blue-400 cursor-pointer hover:underline flex items-center gap-1 ml-auto">
                <ChevronRight size={16} />
                Read more
              </p>
            </CardFooter>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ArticleCards;
