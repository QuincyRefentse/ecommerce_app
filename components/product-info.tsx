"use client"

import { useState } from "react"

import { ArrowRight } from "lucide-react"
import { formatCurrencyString, useShoppingCart } from "use-shopping-cart"
import Image from "next/image"
import Link from "next/link"

import { getSizeName } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"


import { urlForImage } from "@/sanity/lib/image"
import { XCircle } from "lucide-react"


import { SanityProduct } from "@/config/inventory"
import { shimmer, toBase64 } from "@/lib/image"

interface Props {

  products: SanityProduct[]
}

export function ProductInfo({products} : Props) {
  


  return (
    
    <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
      
      <h1 className="text-3xl font-bold tracking-tight">Name  : </h1>
      <div className="mt-3">
          <h2 className="sr-only">
            Product information
            
          </h2>
          <p className="text-3xl tracking-tight">Price</p>
        </div>
        <div className="mt-6">
            <h3 className="sr-only">Description</h3>
            <div className="space-y-6 text-base">Description</div>
          </div>
          <div className="mt-4">
            <p>
              Size: <strong>Size</strong>
            </p>
            {/*
    {products.map((product) => (
      <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
        <h1 className="text-3xl font-bold tracking-tight">Name: {product.name}</h1>

        <div className="mt-3">
          <h2 className="sr-only">
            Product information
            
          </h2>
          <p className="text-3xl tracking-tight">Price</p>
        </div>

      </div>
    ))}
    */}


          </div><form className="mt-6">
            <div className="mt-4 flex">
              
              <Button
                type="button"
                className="w-full bg-violet-600 py-6 text-base font-medium text-white hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500"
              >
                Add to cart
              </Button>
              
            </div>
          </form>
        
    </div>
  )
}

    
  {/*}


"use client"

import Image from "next/image"
import Link from "next/link"
import { urlForImage } from "@/sanity/lib/image"
import { XCircle } from "lucide-react"
import { formatCurrencyString } from "use-shopping-cart"

import { SanityProduct } from "@/config/inventory"
import { shimmer, toBase64 } from "@/lib/image"

interface Props {

  products: SanityProduct[]
}

export function ProductGrid({ products }: Props) {
  if (products.length === 0) {
    return (
      <div className="mx-auto grid h-40 w-full place-items-center rounded-md border-2 border-dashed bg-gray-50 py-10 text-center dark:bg-gray-900">
        <div>
          <XCircle className="mx-auto h-10 w-10 text-gray-500 dark:text-gray-200" />
          <h1 className="mt-2 text-xl font-bold tracking-tight text-gray-500 dark:text-gray-200 sm:text-2xl">
            No products found
          </h1>
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 lg:col-span-3 lg:gap-x-8">
      {products.map((product) => (
        <Link key={product._id} href={`/products/${product.slug}`} className="group text-sm">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg border-2 border-gray-200 bg-gray-100 group-hover:opacity-75 dark:border-gray-800">
            <Image
            placeholder="blur"
            blurDataURL={`data:image/svg+xml; base64,${toBase64(shimmer(225,280))}`}
              src={urlForImage(product.images[0]).url()}
              alt={product.name}
              width={225}
              height={280}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <h3 className="mt-4 font-medium">{product.name}</h3>
          <p className="mt-2 font-medium">{/*{formatCurrencyString({currency: product.currency, value: product.price})} </p>
          </Link>
          ))}
        </div>
      )
    }

*/}