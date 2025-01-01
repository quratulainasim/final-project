"use client";
import React from "react";
import Image from "next/image";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import { notFound } from "next/navigation";
import { useCart } from "@/context/cartcontext";


interface Iproducts {
  id: number;
  heading: string;
  img_url: string;
  price: string;
  paragraph: string;
  description?:string;
  size?:string;
  
}
const products: Iproducts[] = [
  {
    id: 1,
    heading: "Nike Air Force 1 Mid &apos;07",
    paragraph:
      "Turn style on its head with this crafted take on the Air Jordan  1 Mid. Its &quot;inside out&quot;-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless  Jordan Brand silhouette. Details like the deco stitching on the  Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
    img_url: "/p1.jpg",
    price: "MRP: ₹ 10,795.00",
  },
  {
    id: 2,
    heading: "Nike Court Vision Low Next Nature",
    paragraph:
      "Turn style on its head with this crafted take on the Air Jordan  1 Mid. Its &quot;inside out&quot;-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless  Jordan Brand silhouette. Details like the deco stitching on the  Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
    img_url: "/p2.jpg",
    price: "MRP : ₹ 4 995.00",
  },
  {
    id: 3,
    heading: " Nike Air Force 1 PLT.AF.ORM",
    paragraph:
      "Turn style on its head with this crafted take on the Air Jordan  1 Mid. Its &quot;inside out&quot;-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless  Jordan Brand silhouette. Details like the deco stitching on the  Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
    img_url: "/p3.jpg",
    price: "MRP : ₹ 8 695.00",
  },
  {
    id: 4,
    heading: "Nike Air Force 1 React",
    paragraph:
      "Turn style on its head with this crafted take on the Air Jordan  1 Mid. Its &quot;inside out&quot;-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless  Jordan Brand silhouette. Details like the deco stitching on the  Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
    img_url: "/p4.jpg",
    price: "MRP : ₹ 13 295.00",
  },
  {
    id: 5,
    heading: "Air Jordan 1 Elevate Low",
    paragraph:
      "Turn style on its head with this crafted take on the Air Jordan  1 Mid. Its &quot;inside out&quot;-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless  Jordan Brand silhouette. Details like the deco stitching on the  Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
    img_url: "/p5.jpg",
    price: " MRP : ₹ 11 895.00",
  },
  {
    id: 6,
    heading: "Nike Standard Issue",
    paragraph:
      "Turn style on its head with this crafted take on the Air Jordan  1 Mid. Its &quot;inside out&quot;-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless  Jordan Brand silhouette. Details like the deco stitching on the  Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
    img_url: "/p6.jpg",
    price: "MRP : ₹ 2 895.00",
  },
  {
    id: 7,
    heading: "Nike Dunk Low Retro SE",
    paragraph:
      "Turn style on its head with this crafted take on the Air Jordan  1 Mid. Its &quot;inside out&quot;-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless  Jordan Brand silhouette. Details like the deco stitching on the  Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
    img_url: "/p7.jpg",
    price: "MRP : ₹ 9 695.00",
  },
  {
    id: 8,
    heading: "Nike Dri-FIT UV Hyverse",
    paragraph:
      "Turn style on its head with this crafted take on the Air Jordan  1 Mid. Its &quot;inside out&quot;-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless  Jordan Brand silhouette. Details like the deco stitching on the  Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
    img_url: "/p8.jpg",
    price: "MRP : ₹ 2 495.00",
  },
  {
    id: 9,
    heading: "Nike Court Vision Low",
    paragraph:
      "Turn style on its head with this crafted take on the Air Jordan  1 Mid. Its &quot;inside out&quot;-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless  Jordan Brand silhouette. Details like the deco stitching on the  Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
    img_url: "/p9.jpg",
    price: " MRP : ₹ 5 695.00",
  },
  {
    id: 10,
    heading: "Nike Dri-FIT Ready",
    paragraph:
      "Turn style on its head with this crafted take on the Air Jordan  1 Mid. Its &quot;inside out&quot;-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless  Jordan Brand silhouette. Details like the deco stitching on the  Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
    img_url: "/p10.jpg",
    price: "MRP : ₹ 2 495.00",
  },
  {
    id: 11,
    heading: "Nike One Leak Protection: Period",
    paragraph:
      "Turn style on its head with this crafted take on the Air Jordan  1 Mid. Its &quot;inside out&quot;-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless  Jordan Brand silhouette. Details like the deco stitching on the  Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
    img_url: "/p11.jpg",
    price: "MRP : ₹ 3 395.00",
  },
  {
    id: 12,
    heading: "Nike Air Force 1 LV8 3",
    paragraph:
      "Turn style on its head with this crafted take on the Air Jordan  1 Mid. Its &quot;inside out&quot;-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless  Jordan Brand silhouette. Details like the deco stitching on the  Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
    img_url: "/p12.jpg",
    price: "MRP : ₹ 7 495.00",
  },
  {
    id: 13,
    heading: " Nike Blazer Low Platform",
    paragraph:
      "Turn style on its head with this crafted take on the Air Jordan  1 Mid. Its &quot;inside out&quot;-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless  Jordan Brand silhouette. Details like the deco stitching on the  Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
    img_url: "/p13.jpg",
    price: " MRP : ₹ 8 195.00",
  },
  {
    id: 14,
    heading: " Nike Air Force 1 &apos;07",
    paragraph:
      "Turn style on its head with this crafted take on the Air Jordan  1 Mid. Its &quot;inside out&quot;-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless  Jordan Brand silhouette. Details like the deco stitching on the  Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
    img_url: "/p14.jpg",
    price: "MRP : ₹ 8 195.00",
  },
  {
    id: 15,
    heading: "Nike Pro Dri-FIT",
    paragraph:
      "Turn style on its head with this crafted take on the Air Jordan  1 Mid. Its &quot;inside out&quot;-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless  Jordan Brand silhouette. Details like the deco stitching on the  Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
    img_url: "/p15.jpg",
    price: "MRP : ₹ 1 495.00",
  },
  {
    id: 16,
    heading: "Nike Dunk Low Retro",
    paragraph:
      "Turn style on its head with this crafted take on the Air Jordan  1 Mid. Its &quot;inside out&quot;-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless  Jordan Brand silhouette. Details like the deco stitching on the  Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
    img_url: "/p16.jpg",
    price: "MRP : ₹ 8 695.00",
  },
  {
    id: 17,
    heading: "Nike Air Max SC",
    paragraph:
      "Turn style on its head with this crafted take on the Air Jordan  1 Mid. Its &quot;inside out&quot;-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless  Jordan Brand silhouette. Details like the deco stitching on the  Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
    img_url: "/p17.jpg",
    price: "MRP : ₹ 5 995.00",
  },
  {
    id: 18,
    heading: "Nike Dri-FIT UV Miler",
    paragraph:
      "Turn style on its head with this crafted take on the Air Jordan  1 Mid. Its &quot;inside out&quot;-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless  Jordan Brand silhouette. Details like the deco stitching on the  Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
    img_url: "/p18.jpg",
    price: "MRP : ₹ 1 695.00",
  },
  {
    id: 19,
    heading: "Nike Air Max SYSTM",
    paragraph:
      "Turn style on its head with this crafted take on the Air Jordan  1 Mid. Its &quot;inside out&quot;-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless  Jordan Brand silhouette. Details like the deco stitching on the  Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
    img_url: "/p19jpg.jpg",
    price: "MRP : ₹ 6 495.00",
  },
  {
    id: 20,
    heading: "Nike Alate All U",
    paragraph:
      "Turn style on its head with this crafted take on the Air Jordan  1 Mid. Its &quot;inside out&quot;-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless  Jordan Brand silhouette. Details like the deco stitching on the  Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
    img_url: "/p20.jpg",
    price: "MRP : ₹ 2 195.00",
  },
  {
    id: 21,
    heading: "Nike Court Legacy Lift",
    paragraph:
      "Turn style on its head with this crafted take on the Air Jordan  1 Mid. Its &quot;inside out&quot;-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless  Jordan Brand silhouette. Details like the deco stitching on the  Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
    img_url: "/p20.jpg",
    price: "MRP : ₹ 7 495.00",
  },
  {
    id: 22,
    heading: "Nike Swoosh",
    paragraph:
      "Turn style on its head with this crafted take on the Air Jordan  1 Mid. Its &quot;inside out&quot;-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless  Jordan Brand silhouette. Details like the deco stitching on the  Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
    img_url: "/p22.png",
    price: "MRP : ₹ 3 095.00",
  },
  {
    id: 23,
    heading: "Nike SB Zoom Janoski OG+",
    paragraph:
      "Turn style on its head with this crafted take on the Air Jordan  1 Mid. Its &quot;inside out&quot;-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless  Jordan Brand silhouette. Details like the deco stitching on the  Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
    img_url: "/p23.jpg",
    price: "MRP : ₹ 8 595.00",
  },
  {
    id: 24,
    heading: "Nike Dri-FIT Run Division Rise 365",
    paragraph:
      "Turn style on its head with this crafted take on the Air Jordan  1 Mid. Its &quot;inside out&quot;-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless  Jordan Brand silhouette. Details like the deco stitching on the  Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
    img_url: "/p24.jpg",
    price: "MRP : ₹ 3 495.00",
  },
  {
    id: 25,
    heading: "Nike Dri-FIT Challenger",
    paragraph:
      "Turn style on its head with this crafted take on the Air Jordan  1 Mid. Its &quot;inside out&quot;-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless  Jordan Brand silhouette. Details like the deco stitching on the  Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
    img_url: "/nike2.jpg",
    price: "MRP : ₹ 2 495.00",
  },
  {
    id: 26,
    heading: "Jordan Series ES",
    paragraph:
      "Turn style on its head with this crafted take on the Air Jordan  1 Mid. Its &quot;inside out&quot;-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless  Jordan Brand silhouette. Details like the deco stitching on the  Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
    img_url: "/p25.jpg",
    price: "MRP : ₹ 7 495.00",
  },
  {
    id: 27,
    heading: " Nike Outdoor Play",
    paragraph:
      "Turn style on its head with this crafted take on the Air Jordan  1 Mid. Its &quot;inside out&quot;-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless  Jordan Brand silhouette. Details like the deco stitching on the  Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
    img_url: "/p26.jpg",
    price: "MRP : ₹ 3 895.00",
  },
  {
    id: 28,
    heading: "Nike Sportswear Trend",
    paragraph:
      "Turn style on its head with this crafted take on the Air Jordan  1 Mid. Its &quot;inside out&quot;-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless  Jordan Brand silhouette. Details like the deco stitching on the  Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
    img_url: "/p27.jpg",
    price: "MRP : ₹ 2 495.00",
  },
  {
    id: 29,
    heading: "Nike Blazer Low &apos;77 Jumbo",
    paragraph:
      "Turn style on its head with this crafted take on the Air Jordan  1 Mid. Its &quot;inside out&quot;-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless  Jordan Brand silhouette. Details like the deco stitching on the  Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
    img_url: "/p28.jpg",
    price: "MRP : ₹ 8 595.00",
  },
  {
    id: 30,
    heading: "Nike SB Force 58",
    paragraph:
      "Turn style on its head with this crafted take on the Air Jordan  1 Mid. Its &quot;inside out&quot;-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless  Jordan Brand silhouette. Details like the deco stitching on the  Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
    img_url: "/p29.jpg",
    price: "MRP : ₹ 5 995.00",
  },
];
interface ProductdetailProps {
  params: { id: string };
  
}
const Productdetail = ({ params }: ProductdetailProps) => { 
const { addToCart } = useCart();

  const productId = parseInt(params.id, 10);
  const product = products.find((p) => p.id === productId)  as Iproducts | undefined;
  if (!product) {
    notFound();
  }
  const handleAddToCart = () => {
    const cartItem = {
      ...product,
      description: product.description || "Men & Women", 
      size: product.size || "L size", 
      
    };
    addToCart(cartItem); 
  };
  return (
    <>
      <Header />

      <div className="container mx-auto pt-12 px-4">
  <div className="flex flex-wrap items-start justify-center gap-8">
    <div className="w-full sm:w-2/3 lg:w-auto">
      <Image
        src={product.img_url}
        alt="Product image"
        width={653}
        height={653}
        className="rounded mx-auto"
      />
    </div>

    <div className="w-full sm:w-1/2 lg:w-1/3">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-900 mb-6 text-center sm:text-left">
        {product.heading}
      </h1>

      <div>
        <p className="text-sm sm:text-base text-gray-900 leading-6 sm:leading-7 mb-6 text-center sm:text-left">
          {product.paragraph}
        </p>
        <div className="text-center sm:text-left mb-4">
          <span className="text-2xl sm:text-3xl lg:text-4xl font-medium text-gray-900">
            {product.price}
          </span>
        </div>
      </div>
      <div className="flex justify-center sm:justify-start">
        <button
          onClick={handleAddToCart}
          className="w-44 h-11 rounded-full bg-gray-900 text-white flex justify-center items-center mb-2 gap-2"
          aria-label="Add product to cart"
        >
          <Image
            src="/button.png"
            alt="Cart icon"
            width={29}
            height={29}
            className="text-white"
          />
          <span className="text-sm font-medium">Add To Cart</span>
        </button>
      </div>
    </div>
  </div>
</div>      
      <Footer />
    </>
  );
};

export default Productdetail;
