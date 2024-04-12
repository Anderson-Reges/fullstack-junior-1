"use client"
import { useState } from "react";
import { RadioGroup } from '@headlessui/react'
import { clsx } from 'clsx';
import { Logo } from "@/modules/common/icons/logo";
import { MenuIcon } from "@/modules/common/icons/menu";

export default function NavTemplate() {
  const [selected, setSelected] = useState("")

  const options = [
    "Home",
    "Features",
    "Blog",
    "Contact",
    "About Us"
  ]

  return (
    <nav
      className="flex h-[7.5rem] w-full items-center justify-between text-white px-[10rem]"
    >
      <Logo />
      <div className="flex">
        <RadioGroup value={selected} onChange={setSelected} className="flex gap-[3rem] font-[Poppins]">
          {options.map((option, index) => (
            <RadioGroup.Option
              key={index}
              value={option}
              className={({ active, checked }) => clsx(
                `relative border-none`,
              )}
            >
              {({ active, checked }) => (
                <>
                  <p className="cursor-pointer">
                    {option}
                  </p>
                  {
                    checked && <span className="flex absolute bg-[#db2a6b] h-1 w-8 rounded" />
                  }
                </>
              )}
            </RadioGroup.Option>
          ))}
        </RadioGroup>
        <MenuIcon
          className="ml-[5rem] cursor-pointer"
        />
      </div>
    </nav>
  );
}
