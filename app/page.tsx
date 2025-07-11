'use client';
import Nav from "./components/Nav";
import Sample from "./Sample";
import { motion } from 'framer-motion';


export default function Home() {
  return (
    <>
      <Nav />
      <div className="background-section">
        <div className="overlay"></div>
      </div>
      <Sample />
    </>
  );
}
