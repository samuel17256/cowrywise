import Layout from "./components/Layout";
import HomePage from "./home/page";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px]">
      <Layout>
        <HomePage />
      </Layout>
    </div>
  );
}
