'use client';
import Form from "./components/Form";
import Heading from "./components/Heading";
import Nav from "./components/Nav";
import Sample from "./Sample";

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
        {/* Dark Overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.732)',
            zIndex: 1,
          }}
        >
          <div style={{
            marginTop: 120,
            color: 'white',
            marginLeft: 20,
          }}>
            <Heading />
          </div>

          {/* Form Area */}
          <div
            style={{
              position: 'absolute',
              bottom: 20,
              right: 20,
              backgroundColor: '#AF6118',
              color: 'white',
              padding: '15px 20px',
              borderRadius: '8px',
              zIndex: 2,
              maxWidth: '90vw',
              fontSize: '14px',

              boxShadow: `
    0 4px 10px rgba(0,0,0,0.3),
    0 8px 24px rgba(0,0,0,0.25),
    0 12px 48px rgba(0,0,0,0.2)
  `,
            }}
          >
            <Form />
          </div>
        </div>
      </div>
      <Sample />
    </>
  );
}