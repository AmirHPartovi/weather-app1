import '../global.css'
export const metadata = {
  title: 'Iran Weather App',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa"dir='rtl'>
      <head>
      <link 
              rel="icon" 
              href="/favicon.ico" />
         
      </head>
      <body>{children}</body>
    </html>
  )
}
