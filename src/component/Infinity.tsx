"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md bg-black flex flex-col antialiased  dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "As per Newsroom Post, Arijit Singh's net worth exceeds 120 Crores, and he commands over 15-20 lakhs per song for Bollywood films. He is also recognized as one of the highest taxpayers in the country.",
    name: "Arjit Singh",
    title: "Bollywood Singer",
  },
  {
    quote:
      "After the attack of Uri in 2016 and the Pulwama attack in 2019, Pakistani artists were banned from working in India. Mumbai: Atif Aslam is one of the most popular and loved singers in India, who has given many super hit songs in Bollywood movies.",
    name: "Atif Aslam",
    title: "Pakistan Famous Singer",
  },
  {
    quote: "Ali Zafar PP (Urdu: علی ظفر; born 18 May 1980) is a Pakistani singer-songwriter, actor, model, producer, screenwriter and painter. He started out on Pakistani television before becoming a popular musician, later also established a career in Bollywood and his success led many Pakistani actors to venture into Hindi films",
    name: "Ali Zafar",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "Satinder Sartaaj is an internationally known singer best recognized for his well-decorated career in Punjabi-Sufi music. His stock took a recent rise after his Hollywood acting debut depicting the Maharaja Duleep Singh in the universally acclaimed motion picture The Black Prince",
    name: "Satinder Sartaj",
    title: "Sufiyana Music",
  },
  {
    quote:
      "The star has surely gained the most fame he has in the Bollywood industry. This is mainly because of his hits like Chogada and Kamariya. He has also released hit singles of his own, out of which the most famous one happens to be Tera Zikr, which gained over 141 million views on YouTube",
    name: "Darshan Raval",
    title: "Singer of India",
  },
];
