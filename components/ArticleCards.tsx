import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Heart, Share2 } from "lucide-react";

const articles = [
  {
    title: "Global Climate Summit Address Urgent Climate Action",
    description:
      "World leaders gathered at the Global Climate Summit to discuss urgent climate action, emissions reductions, and renewable energy targets.",
    category: "Environment",
    publicationDate: "2023-10-01",
    author: "John Doe",
    image: "/images/climateImg.svg",
    stats: [
      { label: "Likes", count: 120, icon: <Heart className="text-red-500" /> },
      {
        label: "Shares",
        count: 45,
        icon: <Share2 className="text-blue-500" />,
      },
    ],
  },
  {
    title: "Tech Industry Sees Rise in AI Innovations",
    description:
      "The tech sector is booming with new AI advancements that promise to reshape industries and improve automation capabilities.",
    category: "Technology",
    publicationDate: "2023-09-15",
    author: "Jane Smith",
    image: "/images/techImg.svg",
    stats: [
      { label: "Likes", count: 200, icon: <Heart className="text-red-500" /> },
      {
        label: "Shares",
        count: 90,
        icon: <Share2 className="text-blue-500" />,
      },
    ],
  },
  {
    title: "Breakthrough in Renewable Energy Achieved",
    description:
      "Scientists have developed a new solar panel technology that significantly increases energy efficiency.",
    category: "Science",
    publicationDate: "2023-08-20",
    author: "Emily Johnson",
    image: "/images/solarImg.svg",
    stats: [
      { label: "Likes", count: 300, icon: <Heart className="text-red-500" /> },
      {
        label: "Shares",
        count: 150,
        icon: <Share2 className="text-blue-500" />,
      },
    ],
  },
];

const ArticleCards = () => {
  return (
    <div className="flex flex-col gap-4 md:flex-row bg-gray-950 items-stretch rounded-lg shadow-lg mb-10 w-full px-4">
      {articles.map((article, index) => (
        <Card
          key={index}
          className="bg-black text-white shadow-lg rounded-lg p-4 mb-4 w-full"
        >
          <CardHeader>
            <CardTitle>
              <Image
                src={article.image}
                alt="Article Image"
                width={200}
                height={200}
                className="rounded-lg"
              />
            </CardTitle>
            <CardDescription>{article.title}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{article.category}</p>
          </CardContent>
          <CardFooter>
            <div className="flex justify-between items-center mt-4">
              <section className="flex gap-6">
                {article.stats.map((stat, i) => (
                  <div key={i} className="flex items-center gap-2">
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
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default ArticleCards;
