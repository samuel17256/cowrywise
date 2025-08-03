import Layout from "./components/Layout";
import Hero from "./home/Hero";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px]">
      <Layout>
       <Hero />
      </Layout>
    </div>
  );
}
