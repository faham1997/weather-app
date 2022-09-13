import Image from "next/image";
import React from "react";

const Meme = () => {
  return (
    <div className="flex justify-center p-5">
      <Image src="/meme.png" alt="meme" height={350} width={500} />
    </div>
  );
};

export default Meme;
