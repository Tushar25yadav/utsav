'use client';
import Nav from "./components/Nav";
import Sample from "./Sample";
import { motion } from 'framer-motion';


export default function Home() {
  return (
    <>
      <Nav />
      <div
        style={{
          backgroundImage: "url('/backimg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          width: "100%",
          border: "4px dashed red",
        }}
      >
      </div>
      <Sample />
    </>
  );
}
