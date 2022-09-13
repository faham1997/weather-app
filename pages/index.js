import Meme from "../components/Meme";
import Weather from "../components/Weather";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-[url('/background.jpg')] bg-cover bg-no-repeat">
      <div className=" flex sm:justify-center font-bold text-5xl p-5 text-white">
        Next Weather
      </div>
      <Weather />
      <Meme />
    </div>
  );
}
