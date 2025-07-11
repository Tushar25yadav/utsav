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
          position: 'relative',
          backgroundImage: "url('/backimg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          animation: 'zoomFadeIn 3s ease-in forwards',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            zIndex: 1,
          }}
        ></div>

        <style jsx>{`
    @keyframes zoomFadeIn {
      0% {
        transform: scale(1.1);
        opacity: 0;
      }
      100% {
        transform: scale(1);
        opacity: 1;
      }
    }
  `}</style>
      </div>
      <Sample />
    </>
  );
}
