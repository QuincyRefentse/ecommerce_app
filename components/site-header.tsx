"use client"

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Edit, ShoppingBag, Stethoscope } from "lucide-react";
import { useShoppingCart } from "use-shopping-cart";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MainNav } from "@/components/main-nav";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const defaultSearchQuery = searchParams.get("search") ?? "";

  if (pathname.startsWith('/studio')) return null;

  function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget as HTMLFormElement);
    const searchQuery = formData.get("search");
    router.replace(`/?search=${searchQuery}`);
  }
  
  

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background p-4 md:p-6">
      <div className="mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <MainNav />

        <div className="md:flex items-center space-y-2 md:space-y-0 md:space-x-4">
          <form onSubmit={onSubmit} className="md:inline-flex">
            <Input
              id="search"
              name="search"
              type="search"
              autoComplete="off"
              placeholder="Search products..."
              className="h-9 md:w-[300px]"
              defaultValue={defaultSearchQuery}
            />
          </form>

          <div className="md:flex flex-col items-center md:items-start space-y-2 md:space-y-0 md:space-x-4">
            <ThemeToggle />
          </div>

          {process.env.NODE_ENV === "development" && (
            <Link href="/studio">
              <Button size="sm" variant="ghost">
                <Edit className="h-5 w-5" />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

   
{/*


import Link from "next/link"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { Edit, ShoppingBag,Stethoscope } from "lucide-react"
import { useShoppingCart } from "use-shopping-cart"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {

  const pathname = usePathname()
  const router = useRouter()
  const searchParams =  useSearchParams()
  const defaultSearchQuery = searchParams.get("search") ?? ""

  if(pathname.startsWith('/studio')) return null 


  function onSubmit(event: React.SyntheticEvent<HTMLFormElement>) {

    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const searchQuery = formData.get("search")
    router.replace(`/?search=${searchQuery}`)
  }
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between space-x-4 px-6 sm:space-x-0">
        <MainNav />
        <form onSubmit={onSubmit} className="hidden items-center lg:inline-flex">
          <Input
            id="search"
            name="search"
            type="search"
            autoComplete="off"
            placeholder="Search products..."
            className="h-9 lg:w-[300px]"
            defaultValue={defaultSearchQuery}
          />
        </form>
        <div className="flex items-center space-x-1">


          {/**
          <Link href="/cart">

            <Button size="sm" variant="ghost">
              {/*<Stethoscope color="#14d0ff" />
              <ShoppingBag className="h-5 w-5" />
              <span className="ml-2 text-sm font-bold">0</span>
              <span className="sr-only">Cart</span>
            </Button>
          </Link>
        
          
        <ThemeToggle />
        {process.env.NODE_ENV === "development" && (
          <Link href="/studio">
            <Button size="sm" variant="ghost">
              <Edit className="h-5 w-5 "/>
            </Button>
          </Link>
        )}
      </div>
    </div>
  </header>
  
)
}

*/}