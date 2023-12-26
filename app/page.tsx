"use client";

import { CommandPreview } from "@/components/command-preview";
import { FieldSet } from "@/components/field-set";
import { Footer } from "@/components/footer";
import { Main } from "@/components/main";
import { Table } from "@/components/table";
import Link from "next/link";
import React from "react";

export default function Home() {
  const [values, updateValues] = React.useState({
    read: 0,
    write: 0,
    execute: 0,
  });

  console.log(values);

  return (
    <Main>
      <FieldSet {...values} updateValues={updateValues} />
      <CommandPreview key={JSON.stringify(values)} {...values} />
      <Table />
      <Footer>Made by <Link href="https://zafarsaleem.com">Zafar Saleem</Link></Footer>
    </Main>
  )
}
