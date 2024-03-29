"use client";

import { formatPrice } from "@/lib/utils";
import { ShoppingCartIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "./ui/separator";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

const Cart = () => {
  const itemCount = 0;
  const fee = 0;
  return (
    <Sheet>
      <SheetTrigger className="group -m-2 flex item-center p-2">
        <ShoppingCartIcon
          aria-hidden="true"
          className="h-6 w-6 flex-shrink-0 text-[#F3EDE4]"
        />
        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800"></span>
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col pr-0 sm:msx-w-lg">
        <SheetHeader className="space-y-2.5 pr-6">
          <SheetTitle>Cart (0)</SheetTitle>
        </SheetHeader>
        {itemCount > 0 ? (
          <>
            <div className="flex w-full flex-col pr-6">Cart Items</div>
            <div className="space-y-4 pr-5">
              <Separator />
              <div className="space-y-1.5 text-sm">
                <div className="flex">
                  <span className="flex-1">Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex">
                  <span className="flex-1">Transaction Fee</span>
                  <span>{formatPrice(fee)}</span>
                </div>
                <div className="flex">
                  <span className="flex-1">Total</span>
                  <span>{formatPrice(fee)}</span>
                </div>
              </div>
              <SheetFooter>
                <SheetTrigger asChild>
                  <Link
                    href="/cart"
                    className="bg-[#55DD4A] hover:bg-[#7edb77] py-2 rounded-xl text-[#122315] font-bold w-full text-center"
                  >
                    CHECKOUT
                  </Link>
                </SheetTrigger>
              </SheetFooter>
            </div>
          </>
        ) : (
          <div className="flex h-full flex-col items-center justify-center space-y-1">
            <div
              aria-hidden="true"
              className="realtive mb-4 h-60 w-60 text-muted-foreground"
            >
              <Image
                alt="Sparknix"
                src="/Cart.jpg"
                width={300}
                height={300}
              />
            </div>
            <div className="text-lg font-bold">Your cart is empty</div>
            <SheetTrigger>
              <Link
                href="/products"
                className="text-sm font-medium text-[#55DD4A] hover:underline"
              >
                One click away! Add & checkout
              </Link>
            </SheetTrigger>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Cart;