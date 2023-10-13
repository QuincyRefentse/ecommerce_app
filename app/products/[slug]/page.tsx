import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"

import { SanityProduct } from "@/config/inventory"
import { ProductGallery } from "@/components/product-gallery"
import { ProductInfo } from "@/components/product-info"

{/*}
const sanityClient = require('@sanity/client');

const clients = sanityClient({
  projectId: 'g1uneako',
  dataset: 'production', // optional, default is 'production'
  useCdn: true, // set to true for read-only queries if you have published content
});

clients
.fetch('*[_type == "Product"] { _id, name, description, price, image }')
.then(products => {
  // Do something with the fetched products
  console.log(products);
})
.catch(error => {
  console.error('Error fetching data: ', error);
});

*/}

interface Props {

  product: SanityProduct
}

interface Props {
  params:{
    slug: string
  }
}

export default async function Page({params }: Props) {

  

  const product = await client.fetch<SanityProduct>(
    groq`[_type =="product" && slug.current == "${params.slug}"][0]{
      _id,
      _createdAt,
      "id": _id,
      name,
      sku,
      images,
       price,
       currency,
       description,
       sizes,
       categories,
       colors,
       "slug":slug.current

    }`)
    console.log(product)

 

  return (
    <main className="mx-auto max-w-5xl sm:px-6 sm:pt-16 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        {/* Product */}
        <div className="pb-20 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-12">
          {/* Product gallery */}
          {/* <ProductGallery />*/}
          {/* Product info */}
          <ProductInfo products={product}/>
        </div>
      </div>
    </main>
  )
}
