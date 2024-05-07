import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/gedungwan.jpg";

const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Perusahaan IT Professional
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            Vajra Technology adalah Konsultan IT profesional yang berkomitmen untuk menyediakan solusi IT terbaik bagi bisnis Anda. Seperti penyediaan layanan pengembangan Website, SEO, Iklan, Desain & Multimedia, Maintenance, Android & Ios, Training, Domain dan Server, Digital Marketing hingga Kerjasama.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="https://wa.me/6285717613102"
                target="_blank"
                rel="noopener"
                className="flex flex-row gap-3 px-8 py-4 text-lg font-medium text-white bg-indigo-600 rounded-md ">
                <Image
                      src="/img/logowa.svg"
                      alt="N"
                      width="24"
                      height="24"
                      className="w-6"
                    />
                Konsultasi Langsung
                    
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="616"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
      <Container>
        <div className="flex flex-col justify-center">
          <div className="text-xl text-center text-gray-700 dark:text-white">
            Dipercaya Oleh <span className="text-indigo-600">100+</span>{" "}
            Mitra
          </div>

          <div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-around">
            <div className="pt-2 text-gray-400 dark:text-gray-400">
              <Partner1 />
            </div>
            <div className="text-gray-400 dark:text-gray-400">
              <Partner2 />
            </div>
            <div className="text-gray-400 dark:text-gray-400">
              <Partner3 />
            </div>
            <div className="pt-1 text-gray-400 dark:text-gray-400">
              <Partner4 />
            </div>
            <div className="pt-2 text-gray-400 dark:text-gray-400">
              <Partner5 />
            </div>
          </div>
          <div className="text-xl text-center text-gray-700 dark:text-white mt-10">
            Kami Bertanggung jawab <span className="text-indigo-600">100%</span>{" "}
            Untuk Kepuasan Setiap Pelanggan Kami di Vajra Technology 
          </div>
          <div className="text-xl text-center text-gray-700 dark:text-white mt-10">
          <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Lihat Lebih Banyak</button>
          </div>
        </div>
      </Container>
    </>
  );
}

function Partner1() {
  return (
    <Image
      src="/img/partner/partner1.png"
      width={100}
      height={30}
      alt="Picture of the author"
    />
  );
}

function Partner2() {
  return (
    <Image
      src="/img/partner/partner2.png"
      width={100}
      height={30}
      alt="Picture of the author"
    />
  );
}

function Partner3() {
  return (
    <Image
      src="/img/partner/partner3.png"
      width={100}
      height={30}
      alt="Picture of the author"
    />
  );
}

function Partner4() {
  return (
    <Image
      src="/img/partner/partner4.png"
      width={100}
      height={30}
      alt="Picture of the author"
    />
  );
}

function Partner5() {
  return (
    <Image
      src="/img/partner/partner5.png"
      width={100}
      height={30}
      alt="Picture of the author"
    />
  );
}

export default Hero;