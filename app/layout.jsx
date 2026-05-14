export const metadata = {
  title: "CFD Quiz",
  description: "Quiz app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}