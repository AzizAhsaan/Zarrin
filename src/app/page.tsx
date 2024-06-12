import Image from "next/image";
import Banner from "./(Home_Page_Component)/Banner";
import SecondSection from "./(Home_Page_Component)/SecondSection";
import RecentPosts from "./(Home_Page_Component)/RecentPosts";
import PopularPosts from "./(Home_Page_Component)/PopularPosts";
import EmailSection from "./(Home_Page_Component)/EmailSection";

export default function Home() {
  return (
    <main className="flex flex-col gap-2 min-h-screen">
    <Banner />
    <SecondSection />
    <RecentPosts />
    <PopularPosts cols={6} />
    </main>
  );
}
