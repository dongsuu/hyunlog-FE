"use client";

import {
  AddIcon,
  CategoryItemIcon,
  HomeIcon,
  MenuIcon,
} from "@/shared/icons/Icons";
import { useState } from "react";
import { CategoryType } from "@/entities/category/types/types";
import { Category } from "@/entities/category";

const mockCategories = [
  {
    id: 1,
    name: "home",
    sortOrder: 1,
    redirect: "",
  },
  {
    id: 2,
    name: "FrontEnd",
    sortOrder: 2,
    redirect: "",
  },
  {
    id: 3,
    name: "Daily",
    sortOrder: 3,
    redirect: "",
  },
];

export function Gnb() {
  // Todo. fetch api
  const [categories, setCategories] =
    useState<Array<CategoryType>>(mockCategories);

  return (
    <>
      <div className="col-span-1 row-span-4" />
      <div className="row-span-3 col-span-1 h-full border border-l-slate-300 fixed w-1/4">
        <div className="flex flex-col justify-center items-center h-full p-12 gap-12">
          <Category icon={MenuIcon} name="" onClick={() => {}} />
          <Category icon={HomeIcon} name="home" onClick={() => {}} />
          {categories.map((category) => (
            <Category
              icon={CategoryItemIcon}
              name={category.name}
              onClick={() => {}}
            />
          ))}
          <Category icon={AddIcon} name="" onClick={() => {}} />
          <div className="flex flex-row gap-8 pt-24">
            <button>Dark</button>
            <button>Light</button>
          </div>
        </div>
      </div>
    </>
  );
}
