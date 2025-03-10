import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
  pageId?: string;
}

const Layout = ({ children, pageId }: LayoutProps) => {
  return (
    <div id={pageId}>
      <header>
        <nav>Navbar</nav>
      </header>
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  );
};

export default Layout;  
