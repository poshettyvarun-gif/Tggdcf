import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { PRODUCTS } from "@/data/products";

export const metadata: Metadata = { title: "Products — TGDDCF" };

export default function ProductsPage() {
  return (
    <>
      <PageHero eyebrow="Products" title="Vijaya Products" />
      <div className="w-full px-6 py-12 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {PRODUCTS.map((product) => (
            <div key={product.name} className="rounded-md border border-paper-line bg-white p-5 text-center">
              <div className="relative mb-3">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="mb-3 aspect-square w-full bg-white object-contain"
                />
                <Image
                  src="/images/official/vijaya-logo.png"
                  alt=""
                  width={80}
                  height={44}
                  className="absolute right-2.5 bottom-5 w-20 opacity-52 drop-shadow-[0_1px_2px_rgba(0,0,0,0.18)]"
                />
              </div>
              <h3 className="font-display mt-1 text-base">{product.name}</h3>
              <p className="text-[11px] text-muted">{product.cat}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
