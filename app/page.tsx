import React from "react";
import SearchBar from "./components/search/SearchBar";
import Hero from "./components/Hero";
import Cities from "./components/Cities";

export default function Home() {
  return (
    <div>
      <Hero />
      <Cities />
    </div>
  );
}
