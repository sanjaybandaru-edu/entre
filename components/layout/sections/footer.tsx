import { Separator } from "@/components/ui/separator";
import { FaWhatsapp, FaLinkedin, FaInstagram } from 'react-icons/fa';
import Image from "next/image";
import Link from "next/link";

export const FooterSection = () => {
  return (
    <footer id="footer" className="container py-16 sm:py-24">
      <div className="p-10 bg-card border border-secondary rounded-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
          <div className="col-span-full xl:col-span-2 flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.svg" // Adjust to your logo file path
                alt="Entreconnect Logo"
                width={50}
                height={50}
                priority
              />
              <h3 className="text-2xl font-bold">Entre.Connect</h3>
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-lg">Join Us</h3>
            <div className="flex gap-6">
              <Link href="https://chat.whatsapp.com/Kmd9uXyNDdPBBLXo5QI2IC" className="flex items-center gap-2 opacity-60 hover:opacity-100">
                <FaWhatsapp className="text-2xl" />
                <span className="hidden sm:inline">Whatsapp</span>
              </Link>

              <Link href="https://www.linkedin.com/company/entre-connect" className="flex items-center gap-2 opacity-60 hover:opacity-100">
                <FaLinkedin className="text-2xl" />
                <span className="hidden sm:inline">Linkedin</span>
              </Link>

              <Link href="https://www.instagram.com/entre.connect._" className="flex items-center gap-2 opacity-60 hover:opacity-100">
                <FaInstagram className="text-2xl" />
                <span className="hidden sm:inline">Instagram</span>
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-6" />
        <section className="text-center">
          <h3 className="text-sm">&copy; Copyright 2024 Entre.Connect - All Rights Reserved</h3>
        </section>
      </div>
    </footer>
  );
};
