import ThemeRegistry from './ThemeRegistry';
import './globals.css'; // if you have global styles

export const metadata = {
  title: 'My MUI App',
  description: 'Deployed on Vercel with working animations',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}