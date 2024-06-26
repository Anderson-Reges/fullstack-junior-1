import NavTemplate from "@/modules/layout/template/nav";
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "GathSession",
  description: "Generated by create next app",
};

export default function PageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <NavTemplate />
      {children}
    </>
  )
}
