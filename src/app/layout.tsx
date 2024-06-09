import { Roboto } from 'next/font/google'
import { Header } from '@/components/shared/Header'
import { Footer } from '@/components/shared/Footer'
import  '@/sass/globals.sass';

const roboto = Roboto({
    subsets: ['latin-ext'],
    weight: ['100', '300', '500', '700']
})

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={roboto.className}>
        <Header />
        {children}
        <Footer />
        </body>
        </html>
    )
}
