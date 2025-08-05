'use client';

import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import ContactIcons from '../Contact/ContactIcons';

const SideBar: React.FC = () => {
  const pathname = usePathname();

  return (
    <section id="sidebar">
      <section id="intro">
        <Link href="/" className="logo">
          <Image src="/images/me.jpg" alt="Jérémie Beucler" width={220} height={217} priority />
        </Link>
        <header>
          <h2>Jérémie Beucler</h2>
          <p>
            <a href="mailto:jeremie.beucler@gmail.com">jeremie.beucler@gmail.com</a>
          </p>
        </header>
      </section>

      <section className="blurb">
        <h2>About</h2>
        <p>
          Hello there, I&apos;m a French PhD student in Cognitive Science working at{' '}
          <a href="https://www.lapsyde.com/home">LaPsyDÉ</a> (CNRS & Université Paris Cité).
        </p>
      </section>

      <section id="footer">
        <ContactIcons />
        <p className="copyright">
          &copy; Jérémie Beucler <Link href="/">jeremie-beucler.github.io</Link>.
        </p>
      </section>
    </section>
  );
};

export default SideBar;
