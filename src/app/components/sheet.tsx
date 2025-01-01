"use client"

import { Button } from "@/components/ui/button";
import { IoMdMenu } from "react-icons/io";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

const SHEET_SIDES = ["right"] as const

type SheetSide = (typeof SHEET_SIDES)[number]

export function SheetSide() {
  return (
    <div className="grid gap-2">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button> <IoMdMenu /></Button>
          </SheetTrigger>
          <SheetContent side={side}>

          <ul className="flex flex-col space-y-3 text-lg font-semibold text-[#111111]">
            <Link href="../products">New & Featured</Link>
            <Link href="../products">Men</Link>
            <Link href="../products">Women</Link>
            <Link href="../products">Kids</Link>
            <Link href="../products">Sale</Link>
            <Link href="../products">SNKRS</Link>
          </ul>

            
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}
