import Image from "next/image";

const Aboutpage = () => {
  return (
    <div>
      <h2>hehehehehe</h2>
      <Image width={500} height={500} src="/don.png" alt="don" />
      <Image width={500} height={500} src="/don.png" alt="don" />
      <Image
        width={500}
        height={500}
        src="https://images.unsplash.com/photo-1500534623283-312aade485b7?w=500&q=80"
        alt="Paved road through a foggy forest"
      />
    </div>
  );
};

export default Aboutpage;