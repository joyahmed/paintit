import { socialMedia } from "@/src/constants";
import Image from "next/image";

const SocialMedia = ({ path }) => {
  return (
    <div className="flex flex-row space-x-2 md:mt-0">
      {socialMedia.map((social, index) => (
        <div
          key={index}
          className={`flex h-8 w-8 items-center justify-center rounded-full  px-1 py-1 hover:scale-105
          ${
            path === "navbar"
              ? ""
              : "bg-themeDarkest dark:bg-gray-800 dark:bg-opacity-30"
          }
          `}
        >
          <Image
            key={social.id}
            src={social.icon}
            alt={social.id}
            width={30}
            height={20}
            className={`h-[21px] w-[21px] cursor-pointer object-contain ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        </div>
      ))}
    </div>
  );
};

export default SocialMedia;
