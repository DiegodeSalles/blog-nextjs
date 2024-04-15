import Image from "next/image";

import dog1 from "./../../public/images/dog1.png";
import dog2 from "./../../public/images/dog2.png";
import dog3 from "./../../public/images/dog3.png";
import dog4 from "./../../public/images/dog4.png";
import H1 from "@/components/h1";

export const metadata = {
  title: "Photos",
};

export default function PhotosPage() {
  return (
    <div>
      <H1>My Photos</H1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="h-60 overflow-hidden relative">
          <Image
            fill
            className="object-cover w-full h-full"
            src={dog1}
            alt="Picture of a dog"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
            quality={50}
            placeholder="blur"
          />
        </div>
        <div className="h-60 overflow-hidden relative">
          <Image
            fill
            className="object-cover w-full h-full"
            src={dog2}
            alt="Picture of a dog"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
            quality={50}
            placeholder="blur"
          />
        </div>
        <div className="h-60 overflow-hidden relative">
          <Image
            fill
            className="object-cover w-full h-full"
            src={dog3}
            alt="Picture of a dog"
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={50}
            placeholder="blur"
          />
        </div>
        <div className="h-60 overflow-hidden relative">
          <Image
            fill
            className="object-cover w-full h-full"
            src={dog4}
            alt="Picture of a dog"
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={50}
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
}
