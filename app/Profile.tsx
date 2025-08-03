import Image from "next/image";
import LinksPage from "./Links";

const ProfilePage = () => {
  const description = "A software developer and guitar player.";
  return (
    <section className="flex flex-col justify-start items-center lg:items-start gap-8">
      <Image
        src={"/assets/atank-192.png"}
        alt="atank"
        width={192}
        height={192}
        className="w-24 h-24 rounded-full"
      />
      <h1 className="text-4xl md:text-6xl font-medium text-stone-800">
        Atank L
      </h1>
      <p className="text-lg md:text-2xl text-stone-400">{description}</p>
      <LinksPage />
    </section>
  );
};

export default ProfilePage;
