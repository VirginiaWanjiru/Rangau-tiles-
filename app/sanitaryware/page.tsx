import React from "react";
import Image from "next/image";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
  } from "@/components/ui/breadcrumb";
  import { RxDividerVertical } from "react-icons/rx";


  export default function Sanitaryware() {
    return(
        <>

      <section className="">
        <div className="relative bg-[url('/Products.png')] bg-cover bg-center h-[50vh] content-center">
          <div className="absolute inset-0"></div>
          <div className="relative flex justify-center">
            <h1 className="text-[#FFFFFF] text-9xl">
              PRODUCT CATALOG
            </h1>
          </div>
        </div>

        <div className="mt-5 mx-5">
        <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <RxDividerVertical />
              <BreadcrumbItem>
                <BreadcrumbPage>Products</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        </section>

        <h1 className="p-4 text-3xl text-blur font-bold text-[black]">PRODUCTS</h1>


        </>
    )
  }