"use client";

import React from "react";
import { cn, shrinkString } from "@/utils";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, ProfileCircle, type Icon } from "iconsax-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type StaffsProps = {
  name: string;
  specialty: string;
  imageUrl: string;
};

const HeroSection = () => {
  return (
    <section className="flex justify-center items-center container">
      <div className="flex flex-col md:flex-row px-4">
        <motion.article
          className="md:w-2/5 pt-10 md:pt-20 text-center md:text-left"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl capitalize font-jaka font-bold text-gray-800 max-md:max-w-full max-md:text-2xl max-md:text-center">
            A highly Reformed, Mobile, Innovative, Efficient and Civil Police.
          </h1>
          <p className="mt-6 text-xl tracking-normal text-gray-800 max-md:max-w-full max-md:text-center">
            A model security training institution, internationally respected for
            the quality and efficiency of its training and the excellence of its
            academic standards.
          </p>
          <div className="flex gap-4 mt-10 text-2xl tracking-wide leading-7 max-md:flex-wrap max-md:max-w-full">
            <Button className=" bg-blue-main hover:bg-blue-main/80 w-[152px] h-[56px] rounded-lg text-base">
              Start learning
            </Button>
            <Button
              variant="outline"
              className="w-[152px] h-[56px] rounded-lg  text-base"
            >
              About Us
            </Button>
          </div>
        </motion.article>
        <div className="relative flex-1 z-[51]">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="absolute right-1/4 top-[10%]"
          >
            <Image src="/icon/media.svg" height={80} width={80} alt="Icon" />
          </motion.div>

          <motion.div
            className="absolute top-1/4 left-14 z-50"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Cards
              title="250k"
              Icon={Calendar}
              note="Graduated Cadet"
              color="#23BDEE"
            />
          </motion.div>
          <motion.div
            className="absolute top-1/2 right-14 z-50"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <Cards
              image="/icon/email.svg"
              title="Congratulations"
              note="Your admission completed"
              color="#F88C3D"
            />
          </motion.div>
          <motion.div
            className="p-3 lg:p-5 rounded-lg backdrop-blur-[10px] flex bg-white/80 gap-3 lg:gap-5 absolute top-3/4 left-14 z-50"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <div className="p-2 h-10 lg:h-12 w-10 lg:w-12 grid place-content-center rounded-full overflow-hidden border border-black relative">
              <Image src="/portrait.jpg" fill alt="Hero Image" />
            </div>
            <div>
              <h5 className="font-bold lg:text-xl text-[#595959] leading-tight lg:leading-snug">
                User Experience Class
              </h5>
              <p className="text-[#545567] tracking-[0.4px] text-sm lg:text-base leading-tight lg:leading-snug">
                Today at 12.00 PM
              </p>
            </div>
          </motion.div>
          <motion.div
            className="relative aspect-[0.774/1] h-[580px] mx-auto "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image src={"/hero-image.png"} fill alt="Icon" className="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const staffs = [
  {
    name: "AIG Sadiq I. Abubakar",
    specialty: "Commandant",
    imageUrl: "/staff1.png",
  },
  {
    name: "AIG Sadiq I. Abubakar",
    specialty: "Provost",
    imageUrl: "/staff2.png",
  },
  {
    name: "AIG Sadiq I. Abubakar",
    specialty: "Registar",
    imageUrl: "/staff1.png",
  },
  {
    name: "AIG Sadiq I. Abubakar",
    specialty: "Bussar",
    imageUrl: "/staff2.png",
  },
];

const Staffs: React.FC<StaffsProps> = ({ name, specialty, imageUrl }) => (
  <div className="flex gap-2 mt-4 w-full">
    <Image
      loading="lazy"
      src={imageUrl}
      alt={`${name}'s profile`}
      width={42}
      height={42}
      className="shrink-0 rounded-full aspect-square w-[42px]"
    />
    <div className="flex flex-col">
      <div className="text-base font-medium text-gray-800">{name}</div>
      <div className="text-sm font-light text-neutral-600">{specialty}</div>
    </div>
  </div>
);

function Cards({
  image,
  title,
  note,
  color,
  Icon,
}: {
  image?: string;
  title: string;
  Icon?: Icon;
  note: string;
  color: string;
}) {
  return (
    <div className="p-3 lg:p-5 rounded-lg backdrop-blur-[10px] flex bg-white/80 gap-3 lg:gap-5">
      <div
        style={{ backgroundColor: color }}
        className={`p-2 h-9 w-9 lg:h-12 lg:w-12 grid place-content-center rounded-md bg-[${color}]`}
      >
        <div className="relative h-5 w-5 lg:h-6 lg:w-6">
          {Icon ? <Icon /> : <Image src={image!} fill alt="Icon" />}
        </div>
      </div>
      <div>
        <h5 className="font-bold  lg:text-xl text-[#595959] leading-tight lg:leading-normal">
          {title}
        </h5>
        <p className="text-[#545567] tracking-[0.4px]text-sm lg:text-base leading-tight lg:leading-normal">
          {note}
        </p>
      </div>
    </div>
  );
}

const AboutSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center container p-20 max-md:px-5">
      <section className="max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full"
          >
            <Image
              src="/commandant_4.jpg"
              width={323}
              height={438}
              alt="Illustration Image"
              // className="rounded-md"
              className="grow w-full max-h-[450px] max-w-[450px] rounded-2xl max-md:mt-10 max-md:max-w-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full"
          >
            <div className="flex flex-col grow text-xl leading-6 text-gray-800 max-md:mt-10 max-md:max-w-full">
              <header className="flex gap-3 justify-between self-start text-2xl items-center tracking-wide">
                <div className="h-2 w-[40px] bg-blue-main" />
                <h1>About us</h1>
              </header>
              <h2 className="mt-2 text-4xl font-semibold leading-10 max-md:max-w-full">
                The Nigerian Police Academy
              </h2>
              <p className="mt-5 tracking-wide max-md:max-w-full">
                The origin of the Nigeria Police Academy dates back to the early
                80s when the Government of Nigeria in 1981 requested the British
                Government to make available to Nigeria, some united Kingdom
                Police officers to assess the training needs of the Nigerian
                Police.
              </p>
              <Button className=" bg-blue-main mt-5 hover:bg-blue-main/80 w-[152px] h-[56px] rounded-lg text-base">
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </section>
  );
};

const NewsSection = () => {
  const articles: ArticleCardProps[] = [
    {
      imageSrc: "wireless.jpg",
      author: "Ict Directorate",
      date: "Feb 23, 2024",
      title: "installation of wireless newtwork.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam commodi doloremque error, autem odit recusandae voluptatibus accusantium sit sint fugiat ducimus, non omnis corrupti iste dolor id quam, aperiam consectetur quo maiores quis perspiciatis voluptate et quaerat. Molestiae, recusandae! Atque culpa quidem repellat voluptatum illo corporis ad a, suscipit consequatur aperiam deserunt perspiciatis inventore iste sed. In perferendis nemo officiis alias. Quam distinctio laboriosam nobis cupiditate ullam doloremque, voluptatem alias placeat mollitia voluptates voluptas et iste sed sapiente ab ipsa dolorem? At assumenda sed repellendus numquam sint quo pariatur, enim non qui sit dignissimos temporibus consectetur soluta, fugit distinctio hic magni laborum! Atque et totam natus iste deleniti eligendi ab sed accusamus modi placeat distinctio reiciendis, beatae eum, repellendus eveniet harum, nam similique perferendis labore minima porro voluptatum! Ratione asperiores pariatur praesentium incidunt facilis quod fugit. Recusandae suscipit assumenda eligendi. Nam vero maiores a ipsa, voluptate nostrum modi magni cupiditate!",
    },
    {
      imageSrc: "exam.jpeg",
      author: "Ict Editors",
      date: "Feb 23, 2024",
      title: "RC 11 Exams.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam commodi doloremque error, autem odit recusandae voluptatibus accusantium sit sint fugiat ducimus, non omnis corrupti iste dolor id quam, aperiam consectetur quo maiores quis perspiciatis voluptate et quaerat. Molestiae, recusandae! Atque culpa quidem repellat voluptatum illo corporis ad a, suscipit consequatur aperiam deserunt perspiciatis inventore iste sed. In perferendis nemo officiis alias. Quam distinctio laboriosam nobis cupiditate ullam doloremque, voluptatem alias placeat mollitia voluptates voluptas et iste sed sapiente ab ipsa dolorem? At assumenda sed repellendus numquam sint quo pariatur, enim non qui sit dignissimos temporibus consectetur soluta, fugit distinctio hic magni laborum! Atque et totam natus iste deleniti eligendi ab sed accusamus modi placeat distinctio reiciendis, beatae eum, repellendus eveniet harum, nam similique perferendis labore minima porro voluptatum! Ratione asperiores pariatur praesentium incidunt facilis quod fugit. Recusandae suscipit assumenda eligendi. Nam vero maiores a ipsa, voluptate nostrum modi magni cupiditate!",
    },
    {
      imageSrc: "exam.jpeg",
      author: "Ict directorates",
      date: "Feb 23, 2024",
      title: "Launch Of the deparment of cybersecurity",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam commodi doloremque error, autem odit recusandae voluptatibus accusantium sit sint fugiat ducimus, non omnis corrupti iste dolor id quam, aperiam consectetur quo maiores quis perspiciatis voluptate et quaerat. Molestiae, recusandae! Atque culpa quidem repellat voluptatum illo corporis ad a, suscipit consequatur aperiam deserunt perspiciatis inventore iste sed. In perferendis nemo officiis alias. Quam distinctio laboriosam nobis cupiditate ullam doloremque, voluptatem alias placeat mollitia voluptates voluptas et iste sed sapiente ab ipsa dolorem? At assumenda sed repellendus numquam sint quo pariatur, enim non qui sit dignissimos temporibus consectetur soluta, fugit distinctio hic magni laborum! Atque et totam natus iste deleniti eligendi ab sed accusamus modi placeat distinctio reiciendis, beatae eum, repellendus eveniet harum, nam similique perferendis labore minima porro voluptatum! Ratione asperiores pariatur praesentium incidunt facilis quod fugit. Recusandae suscipit assumenda eligendi. Nam vero maiores a ipsa, voluptate nostrum modi magni cupiditate!",
    },
  ];

  return (
    <section className="flex flex-col items-center container">
      <div className="flex flex-col items-center p-20  max-md:px-5">
        <header className="flex gap-5 justify-between items-center text-2xl tracking-wide leading-7 text-gray-800 whitespace-nowrap">
          <div className="h-2 w-[40px] bg-blue-main" />
          <h1>News</h1>
        </header>
        <h2 className="mt-4 text-4xl font-semibold leading-10 text-center text-gray-800">
          Browse News letters
        </h2>
      </div>
      <section className="self-stretch mt-2 max-md:mt-1 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          {articles.map((article, index) => (
            <div
              key={index}
              className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full"
            >
              <ArticleCard {...article} />
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

type ArticleCardProps = {
  imageSrc: string;
  author: string;
  date: string;
  title: string;
  description: string;
};

const ArticleCard: React.FC<ArticleCardProps> = ({
  imageSrc,
  author,
  date,
  title,
  description,
}) => (
  <article className="flex flex-col grow  text-gray-800 border border-solid border-slate- rounded-[32px] max-md:mt-6">
    <Image
      className="w-full h-64 object-cover object-center rounded-t-xl aspect-[1.33]"
      src={`/${imageSrc}`}
      alt=""
      width={400}
      height={360}
    />
    <div className="p-4">
      <div className="flex gap-2 justify-between mt-6 w-full text-sm">
        <div className="flex gap-2">
          <ProfileCircle className="shrink-0 aspect-square w-[17px]" />
          <span>{author}</span>
        </div>
        <div className="flex gap-2">
          <Calendar className="shrink-0 aspect-square w-[17px]" />
          <time>{date}</time>
        </div>
      </div>
      <h1 className="block mt-2 text-xl font-semibold text-zinc-800">
        {shrinkString({ str: title, len: 40 })}
      </h1>
      <p className="text-sm">{shrinkString({ str: description, len: 80 })}</p>
      <div className="flex justify-center items-center px-16 mt-6 text-xl max-md:px-5">
        <div className="flex gap-4">
          <span>Read more</span>
          <ArrowRight />
        </div>
      </div>
    </div>
  </article>
);

export { HeroSection, AboutSection, NewsSection };
