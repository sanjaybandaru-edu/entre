import { Separator } from "@/components/ui/separator";
import { ChevronsDownIcon } from "lucide-react";
import Link from "next/link";
import { FaWhatsapp, FaLinkedin, FaInstagram } from 'react-icons/fa';
import Image from "next/image";


export const FooterSection = () => {
  return (
    <footer id="footer" className="container py-24 sm:py-32">
      <div className="p-10 bg-card border border-secondary rounded-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
          <div className="col-span-full xl:col-span-2">
            <Link href="#" className="flex font-bold items-center">
            <Image
          src="/logo.svg" // Adjust to your logo file path and format
          alt="Entreconnect Logo"
          width={50} // Set appropriate width
          height={50} // Set appropriate height
          priority // This ensures the logo loads quickly for better UX
        />

              <h3 className="text-2xl">Entre.Connect</h3>
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Join Us</h3>

            <div className="flex gap-6">
              <Link href="https://chat.whatsapp.com/Kmd9uXyNDdPBBLXo5QI2IC" className="flex items-center gap-2 opacity-60 hover:opacity-100 text-xl">
                <FaWhatsapp className="text-2xl" />
                <span>Whatsapp</span>
              </Link>

              <Link href="https://www.linkedin.com/company/entre-connect" className="flex items-center gap-2 opacity-60 hover:opacity-100 text-xl">
                <FaLinkedin className="text-2xl" />
                <span>Linkedin</span>
              </Link>

              <Link href="https://www.instagram.com/entre.connect._" className="flex items-center gap-2 opacity-60 hover:opacity-100 text-xl">
                <FaInstagram className="text-2xl" />
                <span>Instagram</span>
              </Link>
            </div>
          </div>
          {/* <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Platforms</h3>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                iOS
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Android
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Web
              </Link>
            </div>
          </div> */}

          {/* <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Help</h3>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Contact Us
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                FAQ
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Feedback
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Socials</h3>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Twitch
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Discord
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Dribbble
              </Link>
            </div>
          </div> */}
        </div>

        <Separator className="my-6" />
        <section className="">
          <h3 className="">
            &copy; Copyright 2024 Entre.Connect - All Rights Reserved
          </h3>
        </section>
      </div>
    </footer>
  );
};
