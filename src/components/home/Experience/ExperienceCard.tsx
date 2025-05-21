import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type ExperienceCardProps = {
  title: string;
  description: string;
  date: string;
  imgSrc: string;
  link?: string;
};

export default function ExperienceCard({
  title,
  description,
  date,
  imgSrc,
  link,
}: ExperienceCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="bg-gray-blue-bot rounded-2xl shadow-lg overflow-hidden relative group">
      <div className="relative h-48 w-full">
        <Image
          src={imgSrc}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3 bg-secondary px-3 py-1 text-sm font-bold text-primary rounded">
          {date}
        </div>
      </div>
      <div className="p-6">
        {link ? (
          <Link href={link} target="_blank">
            <h3 className="text-2xl font-bold text-secondary hover:underline">
              {title}
            </h3>
          </Link>
        ) : (
          <h3 className="text-2xl font-bold text-secondary">{title}</h3>
        )}
        <p className="mt-4 text-text-dark">{description}</p>
      </div>
      </div>
    </motion.div>
  );
}
