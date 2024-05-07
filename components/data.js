import Image from "next/image";

import benefitOneImg from "../public/img/benefit-one.svg";

const benefitOne = {
  title: "Mengedepankan Kepuasan Setiap Pelanggan",
  desc: "Vajra Technology memiliki tim ahli yang didedikasikan untuk membantu Anda menghadapi tantangan digital, memperluas visi bisnis, dan meraih kesuksesan dalam era teknologi yang terus berkembang.",
  image: benefitOneImg,
  bullets: [
    {
      title: "SEO Friendly",
      desc: "Lebih mudah masuk Google dan search engine lain, memastikan bisnis Anda lebih mudah ditemukan di internet.",
      icon: <Seo />,
    },
    {
      title: "Mobile Optimized",
      desc: "Website tampil optimal di desktop, tablet, dan HP, menjangkau semua segmen pelanggan.",
      icon: <MobileOptimized />,
    },
    {
      title: "Maintenance yang Mudah",
      desc: "Kami bantu update konten, menambah halaman, upload produk, dan memastikan web Anda selalu up to date.",
      icon: <Maintenance />,
    },
  ],
};

function Seo() {
  return (
    <Image
      src="/img/seo-ic.svg"
      width={100}
      height={30}
      alt="Picture of the author"
    />
  );
}

function MobileOptimized() {
  return (
    <Image
      src="/img/mobile-ic.svg"
      width={100}
      height={30}
      alt="Picture of the author"
    />
  );
}

function Maintenance() {
  return (
    <Image
      src="/img/maintenance-ic.svg"
      width={100}
      height={30}
      alt="Picture of the author"
    />
  );
}

export { benefitOne };
