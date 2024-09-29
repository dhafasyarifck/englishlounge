"use client";

import dynamic from 'next/dynamic';
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faGlobe,
  faClipboardList,
  faTag,
  faStore,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

const MenuSection = () => {


  return (
    <section id="menusection" className="">
      <div className="container">
        {/* Menu Section */}
        <div className="flex justify-center space-x-10 mb-10">
          {/* Menu Items */}
          {[
            { href: "/toefl", icon: faGlobe, label: "TOEFL" },
            { href: "/ielts", icon: faBook, label: "IELTS" },
            { href: "/toeic", icon: faClipboardList, label: "TOEIC" },
            { href: "/promo", icon: faTag, label: "Pasti Promo" },
            { href: "/cabang-kami", icon: faStore, label: "Cabang Kami" },
            { href: "/tentang-kami", icon: faInfoCircle, label: "Tentang Kami" },
          ].map(({ href, icon, label }) => (
            <Link href={href} key={label} className="text-center">
              <div className="cursor-pointer">
                <div className="w-28 h-28 flex justify-center items-center transition-transform duration-300 hover:scale-110">
                  <FontAwesomeIcon icon={icon} className="text-7xl" />
                </div>
                <p className="mt-2 transition-colors duration-300 hover:text-blue-500">
                  {label}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
