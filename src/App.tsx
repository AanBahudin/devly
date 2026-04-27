import { ArrowUpRight, Mail, Phone } from 'lucide-react';
import Button from './components/Button';
import Navbar from './components/Navbar';
import EcosystemCard from './components/EcosystemCard';
import heroImageBorder from './assets/hero-image-border.svg';
import heroImageLogo from './assets/hero-image-logo.svg';
import WhyUsCard from './components/WhyUsCard';
import cardImage1 from './assets/card-image-1.png';
import cardImage2 from './assets/card-image-2.png';
import cardImage3 from './assets/card-image-3.png';
import cardImage4 from './assets/card-image-4.png';
import chempharmLogo from './assets/chempharm-academy-logo.png';
import devlyLogo from './assets/devly-logo.png';
import ContactCard from './components/ContactCard';

const App = () => {
  return (
    <div className="min-h-dvh bg-background">
      <Navbar />
      <div className="mt-16 mx-5 pt-8 flex flex-col items-center gap-8 overflow-hidden">
        <section className="flex flex-col items-center gap-12">
          <div className="flex flex-col items-center gap-8 z-10 mx-auto md:max-w-lg lg:max-w-3xl">
            <div className="w-fit px-3 py-1 flex gap-2 items-center border border-border rounded-lg bg-accent/5">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex size-2 rounded-full bg-accent"></span>
              </span>
              <p className="text-xs font-medium text-accent">New launch</p>
            </div>
            <div className="flex flex-col gap-4 text-center">
              <h1 className="text-title md:text-6xl font-medium text-foreground">
                Satu Ekosistem, Ribuan Peluang Nyata
              </h1>
              <p className="font-medium text-muted-foreground">
                Kami membangun ekosistem yang menghubungkan proses belajar,
                kreativitas, dan peluang nyata bagi brand Anda.
              </p>
            </div>
            <div className="flex flex-col gap-3 items-center">
              <Button size="lg">
                Gabung Ekosistem
                <ArrowUpRight size={20} />
              </Button>
              <p className="font-medium text-muted-foreground text-center">
                Mulai langkah pertama Anda menuju ekosistem tanpa batas.
              </p>
            </div>
          </div>
          <div className="relative m-4 -rotate-6 size-60 md:size-90 lg:size-120 overflow-hidden">
            <img
              className="absolute top-1/2 left-1/2 -translate-1/2 z-0 animate-scaling"
              src={heroImageBorder}
              alt=""
            />
            <img
              className="absolute top-[53.5%] left-[53.5%] -translate-1/2 z-10 size-40 md:size-60 lg:size-80"
              src={heroImageLogo}
              alt="Hero image logo"
            />
          </div>
        </section>
        <section className="flex flex-col gap-12 md:max-w-3xl lg:max-w-6xl">
          <div className="flex flex-col gap-8">
            <div className="w-fit px-3 py-1 border border-border rounded-r-full rounded-tl-full bg-accent/5">
              <p className="text-sm font-medium text-accent">Why Us?</p>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-title md:text-6xl font-medium text-foreground">
                Tidak Hanya Platform, Kami Merancang Ekosistem
              </h1>
              <p className="font-medium text-muted-foreground">
                Kami membangun infrastruktur digital yang menjadi fondasi utama
                pertumbuhan bisnis Anda.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <WhyUsCard
              image={cardImage1}
              title="Perlindungan Ekosistem"
              description="Setiap platform yang kami bangun menggunakan standar 'By Devly'
              yang memastikan keamanan, skalabilitas dan kemudahan penggunaan
              platform."
              alt="card image 1"
            />
            <WhyUsCard
              image={cardImage2}
              title="Desain Interaktif"
              description="Kami merancang desain navigasi yang intuitif, responsivitas sempurna, dan berfokus pada pengalaman pengguna."
              alt="card image 2"
            />
            <WhyUsCard
              image={cardImage3}
              title="Konsultan Strategi Produk"
              description="Kami tidak hanya mengeksekusi teknis, kami dapat membantu Anda dari validasi konsep hingga integrasi layanan sehingga tujuan utama Anda dapat tercapai."
              alt="card image 3"
            />
            <WhyUsCard
              image={cardImage4}
              title="Laporan Real-time"
              description="Ubah data mentah menjadi wawasan jelas dalam hitungan detik untuk pengambilan keputusan cerdas berbasis data real-time."
              alt="card image 4"
            />
          </div>
        </section>
        <section className="flex flex-col gap-12 md:max-w-3xl lg:max-w-6xl">
          <div className="flex flex-col gap-8">
            <div className="w-fit px-3 py-1 border border-border rounded-r-full rounded-tl-full bg-accent/5">
              <p className="text-sm font-medium text-accent">Our Ecosystem</p>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-title md:text-6xl font-medium text-foreground">
                Ekosistem Yang Tumbuh Bersama Anda
              </h1>
              <p className="font-medium text-muted-foreground">
                Kami tidak hanya membangun, kami menciptakan jaringan platform
                yang saling mendukung satu sama lain.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <EcosystemCard
              image={chempharmLogo}
              title="ChemPharm Academy"
              description="Platform pembelajaran untuk mahasiswa farmasi dan kesehatan"
              alt="card image 21"
            />
            <EcosystemCard
              image={devlyLogo}
              title="Devly Creative Lab"
              coming={true}
              alt="card image 22"
            />
            <EcosystemCard
              image={devlyLogo}
              title="Devly Project"
              coming={true}
              alt="card image 22"
            />
            <EcosystemCard
              image={devlyLogo}
              title="Devly Community"
              coming={true}
              alt="card image 23"
            />
          </div>
        </section>
        <section className="flex flex-col gap-12 md:max-w-3xl lg:max-w-6xl">
          <div className="flex flex-col gap-8">
            <div className="w-fit px-3 py-1 border border-border rounded-r-full rounded-tl-full bg-accent/5">
              <p className="text-sm font-medium text-accent">About Us</p>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-title md:text-6xl font-medium text-foreground">
                Devly Panggungnya, Anda Bintangnya
              </h1>
              <p className="font-medium text-muted-foreground">
                Devly adalah arsitek ekosistem digital yang lahir untuk
                menjembatani jarak antara ide besar dan realitas pasar. Kami
                tidak hanya membangun platform, kami menyusun infrastruktur yang
                menyatukan proses belajar, pengembangan bakat, hingga peluang
                ekonomi nyata dalam satu sistem yang mandiri.
              </p>
              <p className="font-medium text-muted-foreground">
                Sebagai mitra strategis, kami memastikan bahwa setiap teknologi
                yang kami kembangkan sepenuhnya menjadi panggung utama bagi
                identitas dan kedaulatan brand Anda.
              </p>
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-12 mb-100 md:max-w-3xl lg:max-w-6xl">
          <div className="flex flex-col gap-8">
            <div className="w-fit px-3 py-1 border border-border rounded-r-full rounded-tl-full bg-accent/5">
              <p className="text-sm font-medium text-accent">Contact</p>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-title md:text-6xl font-medium text-foreground">
                Hubungi Tim Kami
              </h1>
              <p className="font-medium text-muted-foreground">
                Kami menantikan visi Anda untuk didiskusikan dan diwujudkan
                menjadi menjadi kenyataan.
              </p>
            </div>
          </div>
          <div className="grid gap-3">
            <ContactCard
              icon={Mail}
              title="Email us"
              subTitle="johndoe@gmail.com"
            />
            <ContactCard icon={Phone} title="Call us" subTitle="080808080808" />
          </div>
          <div className="p-5 flex flex-col rounded-xl bg-accent">
            <h1 className="text-3xl font-medium text-background">
              Siap Tumbuh Lebih Besar?
            </h1>
            <p className="font-medium text-background">
              Konsultasikan dan mulai langkah pertama Anda menuju ekosistem
              tanpa batas.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
