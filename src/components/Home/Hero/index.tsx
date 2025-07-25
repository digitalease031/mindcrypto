"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import BuyCrypto from "./buy-form";
import SellCrypto from "./sell-form";
import CardSlider from "./slider";
import { useEffect, useRef, useState, useCallback } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { getImagePrefix } from "@/utils/utils";

const Hero = () => {
  const [isBuying, setIsBuyingOpen] = useState(false);
  const [isSelling, setIsSellingOpen] = useState(false);
  const BuyRef = useRef<HTMLDivElement>(null);
  const SellRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (BuyRef.current && !BuyRef.current.contains(event.target as Node)) {
        setIsBuyingOpen(false);
      }
      if (SellRef.current && !SellRef.current.contains(event.target as Node)) {
        setIsSellingOpen(false);
      }
    },
    [BuyRef, SellRef]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  useEffect(() => {
    document.body.style.overflow = isBuying || isSelling ? "hidden" : "";
  }, [isBuying, isSelling]);

  const leftAnimation = {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
    transition: { duration: 0.6 },
  };

  const rightAnimation = {
    initial: { x: "100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <section
      className="relative md:pt-40 md:pb-28 py-20 overflow-hidden z-1"
      id="main-banner"
      style={{
        background: "linear-gradient(135deg, #0a0a0f 0%, #181A20 60%, #23243a 100%)"
      }}
    >
      <>
        {/* Glossy overlay */}
        <div
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(120deg, rgba(255,255,255,0.08) 0%, rgba(40,40,60,0.10) 100%)",
            opacity: 0.25,
            mixBlendMode: "lighten"
          }}
        />
        <div className="container mx-auto lg:max-w-screen-xl px-4">
          <div className="grid grid-cols-12">
            <motion.div {...leftAnimation} className="lg:col-span-5 col-span-12">
              <div className="flex gap-6 items-center lg:justify-start justify-center mb-5 mt-24">
                <Image
                  src={`${getImagePrefix()}images/icons/icon-bag.svg`}
                  alt="icon"
                  width={40}
                  height={40}
                  priority
                />
                <p className="text-white sm:text-28 text-18 mb-0">
                  Crypto On The <span className="text-primary">Go</span>
                </p>
              </div>
              <h1 className="font-medium lg:text-76 md:text-70 text-54 lg:text-start text-center text-white mb-10">
                Buy and Sell <span className="text-primary">Crypto</span> of your{" "}
                <span className="text-primary">choice</span>!
              </h1>
              <div className="flex items-center md:justify-start justify-center gap-8">
                <button
                  className="btn btn-primary text-21 font-medium z-50"
                  onClick={() => setIsBuyingOpen(true)}
                >
                  Buy Crypto
                </button>
                <button
                  className="btn btn-outline text-21 font-medium"
                  onClick={() => setIsSellingOpen(true)}
                >
                  Sell Crypto
                </button>
              </div>
              <div className="flex items-center md:justify-start justify-center gap-12 mt-20">
                <Link href="#" className="hover:scale-110 duration-300">
                  <Image
                    src={`${getImagePrefix()}images/hero/playstore.png`}
                    alt="Play Store"
                    width={240}
                    height={70}
                    priority
                  />
                </Link>
                <Link href="#" className="hover:scale-110 duration-300">
                  <Image
                    src={`${getImagePrefix()}images/hero/applestore.png`}
                    alt="App Store"
                    width={240}
                    height={70}
                    priority
                  />
                </Link>
              </div>
            </motion.div>
            <motion.div
              {...rightAnimation}
              className="col-span-7 lg:block hidden"
            >
              <div className="ml-20 -mr-64">
                <Image
                  src={`${getImagePrefix()}images/hero/banner-image.png`}
                  alt="Banner"
                  width={1150}
                  height={1150}
                  priority
                />
              </div>
            </motion.div>
          </div>
          <CardSlider />
        </div>
        <div className="absolute w-50 h-50 bg-gradient-to-bl from-tealGreen from-50% to-charcoalGray to-60% blur-400 rounded-full -top-64 -right-14 -z-1"></div>

        {/* Modals for Buy and Sell */}
        {isBuying && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div
              ref={BuyRef}
              className="relative w-full max-w-md overflow-hidden rounded-lg px-8 pt-14 pb-8 z-999 text-center bg-dark_grey bg-opacity-90 backdrop-blur-md"
            >
              <button
                onClick={() => setIsBuyingOpen(false)}
                className="absolute top-0 right-0 mr-8 mt-8 dark:invert"
                aria-label="Close Buy Modal"
              >
                <Icon
                  icon="tabler:currency-xrp"
                  className="text-white hover:text-primary text-24 inline-block me-2"
                />
              </button>
              <BuyCrypto />
            </div>
          </div>
        )}
        {isSelling && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div
              ref={SellRef}
              className="relative w-full max-w-md overflow-hidden rounded-lg px-8 pt-14 pb-8 z-999 text-center bg-dark_grey bg-opacity-90 backdrop-blur-md"
            >
              <button
                onClick={() => setIsSellingOpen(false)}
                className="absolute top-0 right-0 mr-8 mt-8 dark:invert"
                aria-label="Close Sell Modal"
              >
                <Icon
                  icon="tabler:currency-xrp"
                  className="text-white hover:text-primary text-24 inline-block me-2"
                />
              </button>
              <SellCrypto />
            </div>
          </div>
        )}
      </>
    </section>
  );
};

export default Hero;
