"use client";
import React, { useState, useEffect } from "react";
import {
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function DelijioshoWebsite() {
  const [activeProduct, setActiveProduct] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Set document title and meta tags
    document.title =
      "Delijiosho - Premium Quality Pasta, Macaroni & Vermicelli | JD Foods";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Discover Delijiosho premium pasta products - Macaroni, Vermicelli, Pasta varieties, and Poha. Made with 100% durum wheat semolina, no artificial colors, quick cooking."
      );
    }
  }, []);

  const products = [
    {
      name: "Macaroni",
      subtitle: "Premium Quality",
      description:
        "Perfectly shaped macaroni pasta made from 100% durum wheat semolina. Quick cooking and ideal for all your favorite pasta dishes.",
      features: ["Quick Cooking", "Durum Semolina", "No Artificial Colors"],
      image: "/macaroni.webp",
    },
    {
      name: "Vermicelli",
      subtitle: "Premium Quality",
      description:
        "Traditional thin noodles perfect for both savory and sweet preparations. Made with premium quality ingredients for authentic taste.",
      features: ["Quick Cooking", "Durum Semolina", "No Cholesterol"],
      image: "/vermicilli.webp",
    },
    {
      name: "Pasta",
      subtitle: "Penne, Fusilli & Macaroni",
      description:
        "Premium variety pack featuring three popular pasta shapes. Perfect for family meals and creative cooking.",
      features: [
        "100% Durum Wheat",
        "No Added Preservatives",
        "No Cholesterol",
      ],
      image: "/pasta.webp",
    },
    {
      name: "Poha",
      subtitle: "Premium Quality",
      description:
        "Flattened rice flakes that are pure, natural, and gluten-free. Perfect for traditional Indian breakfast preparations.",
      features: ["Pure & Natural", "Gluten Free", "No Cholesterol"],
      image: "/poha.webp",
    },
  ];

  const benefits = [
    {
      icon: "🌾",
      title: "Made with Premium Ingredients",
      description:
        "Our products are crafted from the finest durum wheat semolina, naturally keeping ingredients in the soil where they should be.",
    },
    {
      icon: "💪",
      title: "Packed with Protein & Fiber",
      description:
        "Nothing but the good stuff here! Our products are packed with plant protein & fiber to keep you happier for longer.",
    },
    {
      icon: "🎯",
      title: "Full of Far Out Flavor",
      description:
        "We're all about delivering unmatched taste and texture in every bite, making your meals memorable.",
    },
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">JD</span>
              </div>
              <span className="text-3xl font-bold text-amber-500 italic">
                Delijiosho
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#products"
                className="text-gray-800 hover:text-amber-500 font-medium transition"
              >
                Products
              </a>
              <a
                href="#about"
                className="text-gray-800 hover:text-amber-500 font-medium transition"
              >
                About
              </a>
              <a
                href="#benefits"
                className="text-gray-800 hover:text-amber-500 font-medium transition"
              >
                Benefits
              </a>
              <a
                href="#contact"
                className="text-gray-800 hover:text-amber-500 font-medium transition"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="relative min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-100 pt-20"
        // style={{backgroundImage:'/hero.png'}}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fadeIn z-[1]">
              <div className="inline-block bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Premium Quality Products
              </div>
              <h1 className="text-5xl md:text-7xl font-black leading-tight">
                <span className="text-gray-900">Flavor </span>
                <br />
                <span className="text-amber-500 italic">Meets Finesse.</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Changing snacking one pasta at a time. Premium quality pasta
                products made with 100% durum wheat semolina.
              </p>
              <Link
                href={`https://wa.me/+919548083871?text=Hi%2C%20I'm%20interested%20in%20buying%20Deljiosho%20Products.%20Please%20share%20details.`}
                target="_blank"
                className="bg-amber-500 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold text-lg transition transform hover:scale-105 shadow-lg"
              >
                Shop Products <ChevronRight className="inline ml-2" />
              </Link>
            </div>
            <div className="relative h-full w-full scale-[1.23] z-0">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-300 to-red-300 rounded-3xl transform rotate-3 scale-[1.1]"></div>
              <div className="relative h-full w-full p-1 bg-white rounded-3xl shadow-2xl">
                <img
                  src="/hero.webp"
                  alt="Delijiosho Pasta Products"
                  className="object-cover h-full w-full rounded-3xl"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-fadeIn {
            animation: fadeIn 1s ease-out;
          }
        `}</style>

      {/* Product Badges */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { icon: "✓", text: "Vegan" },
              { icon: "🌱", text: "Plant-based Protein" },
              { icon: "🌾", text: "Gluten Free Options" },
              { icon: "🔬", text: "No GMO" },
              { icon: "🚫", text: "No Nuts" },
            ].map((badge, index) => (
              <div key={index} className="flex flex-col items-center space-y-2">
                <div className="w-16 h-16 rounded-full border-2 border-gray-300 flex items-center justify-center text-2xl">
                  {badge.icon}
                </div>
                <span className="text-sm font-semibold text-gray-700">
                  {badge.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section
        id="products"
        className="py-20 bg-gradient-to-b from-yellow-50 to-orange-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 mb-4">
              PRODUCTS JUST GOT{" "}
              <span className="text-[#d77110] italic">PREMIUM</span>
            </h2>
            <p className="text-xl text-gray-600">
              View all our delicious pasta varieties
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition duration-300"
              >
                <div className="relative h-64 bg-gradient-to-br from-orange-400 to-orange-600 p-6">
                  <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-bold text-orange-600">
                    Premium
                  </div>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain z-0"
                    loading="lazy"
                    // style={{scale:product.name==='pasta'?5:1}}
                  />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl flex justify-between items-end font-bold text-gray-900">
                    {product.name}
                    <Link
                      href={`https://wa.me/+919548083871?text=Hi%2C%20I'm%20interested%20in%20buying%20Deljiosho%20${product.name}.%20Please%20share%20details.`}
                      target="_blank"
                      className="text-amber-900 font-bold text-lg transition transform hover:scale-105 text-center"
                    >
                      Shop Now
                    </Link>
                  </h3>
                  <p className="text-sm text-amber-500 font-semibold">
                    {product.subtitle}
                  </p>
                  <p className="text-gray-600">{product.description}</p>
                  <div className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-sm text-gray-700"
                      >
                        <ChevronRight className="w-4 h-4 text-amber-500 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-black text-center mb-16">
            <span className="text-gray-900">BETTER FOR YOU,</span>
            <br />
            <span className="text-amber-500 italic">BETTER FOR THE PLANET</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="text-6xl mb-4">{benefit.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-amber-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            OUR CHEEZIEST VARIETY PACK
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Curious about all our flavors? Our variety pack includes one bag of
            each of our mouthwatering flavors.
          </p>
          <Link
            href="https://wa.me/+919548083871?text=Hi%2C%20I'm%20interested%20in%20buying%20Deljiosho%20products.%20Please%20share%20details."
            target="_blank"
            className="bg-white hover:bg-gray-100 text-amber-500 px-10 py-4 rounded-full font-bold text-lg transition transform hover:scale-105 shadow-xl"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">JD</span>
                </div>
                <span className="text-2xl font-bold italic">Delijiosho</span>
              </div>
              <p className="text-gray-400">
                Premium quality pasta products for every taste.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#products"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-gray-400 hover:text-white transition"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#benefits"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Benefits
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2 text-gray-400">
                  <Phone className="w-4 h-4" />
                  <span>+91-9548083871</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-400">
                  <Mail className="w-4 h-4" />
                  <span>jogeshchahar@gmail.com</span>
                </li>
                <li className="flex items-start space-x-2 text-gray-400">
                  <MapPin className="w-4 h-4 mt-1" />
                  <span>India</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-500 transition"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-500 transition"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-500 transition"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Delijiosho - JD Foods. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
