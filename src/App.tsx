import { ArrowUpRight } from 'lucide-react';
import Button from './components/Button';
import Navbar from './components/Navbar';
import heroImageBorder from './assets/hero-image-border.svg';
import heroImageLogo from './assets/hero-image-logo.svg';
import Card from './components/Card';
import cardImage1 from './assets/card-image-1.png';
import cardImage2 from './assets/card-image-2.png';
import cardImage3 from './assets/card-image-3.png';
import cardImage4 from './assets/card-image-4.png';

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
            <Card
              image={cardImage1}
              title="Perlindungan Ekosistem"
              description="Setiap platform yang kami bangun menggunakan standar 'By Devly'
              yang memastikan keamanan, skalabilitas dan kemudahan penggunaan
              platform."
            />
            <Card
              image={cardImage2}
              title="Desain Interaktif"
              description="Kami merancang desain navigasi yang intuitif, responsivitas sempurna, dan berfokus pada pengalaman pengguna."
            />
            <Card
              image={cardImage3}
              title="Konsultan Strategi Produk"
              description="Kami tidak hanya mengeksekusi teknis, kami dapat membantu Anda dari validasi konsep hingga integrasi layanan sehingga tujuan utama Anda dapat tercapai."
            />
            <Card
              image={cardImage4}
              title="Laporan Real-time"
              description="Ubah data mentah menjadi wawasan jelas dalam hitungan detik untuk pengambilan keputusan cerdas berbasis data real-time."
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
