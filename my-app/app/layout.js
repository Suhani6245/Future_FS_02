// app/layout.js
import './globals.css';

export const metadata = {
  title: 'My Store',
  description: 'Best products online',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
