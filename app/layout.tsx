import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ARCHON V7 - RAG-5 Layer',
  description: 'Multi-Model Retrieval Augmented Generation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}