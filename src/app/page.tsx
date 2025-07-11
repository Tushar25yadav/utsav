'use client';
import Nav from "./components/Nav";
import Sample from "./Sample";
import { motion } from 'framer-motion';


export default function Home() {
  return (
    <>
      <Nav />
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 3, ease: 'easeIn' }}
        style={{
          position: 'relative',
          backgroundImage: "url('/backimg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.6)', // adjust 0.4 for more/less darkness
            zIndex: 1,
          }}
        >
        </div>
      </motion.div>
      <Sample />
    </>
  );
}
