import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <h1 className="text-3xl">
        My Game library !
      </h1>
      <Image
        src='/banner_landscape.png'
        alt='Banniere du site'
        width={2048}
        height={720}
        className="hidden sm:block"
        />
      <Image
        src='/banner_mobile.jfif'
        alt='Banniere du site'
        width={520}
        height={520}
        className="block sm:hidden"
        />
    </>
  );
}
