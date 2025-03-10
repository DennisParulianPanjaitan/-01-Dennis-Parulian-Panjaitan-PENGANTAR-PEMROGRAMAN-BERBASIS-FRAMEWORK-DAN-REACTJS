import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

type LayoutProps = {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <main>{children}</main>
        <Footer />
        </>
  )
}