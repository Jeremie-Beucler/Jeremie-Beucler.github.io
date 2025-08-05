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
          <Image src="/images/me.jpg" alt="Jérémie Beucler" width={200} height={200} priority />
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
          Hello there, I&apos;m Jérémie. I&apos;m a PhD student in Cognitive Science at{' '}
          <a href="https://www.lapsyde.com/home" target="_blank" rel="noreferrer">LaPsyDÉ</a>{' '}
          (CNRS & Université Paris Cité), where I study the cognitive mechanisms behind reasoning and confidence. 
          I also work as a freelance data scientist specializing in language models, behavioral modeling, and statistics.
        </p>
        <ul className="actions">
          <li>
            {pathname && !pathname.includes('/resume') ? (
              <Link href="/resume" className="button">
                Learn More
              </Link>
            ) : (
              <Link href="/about" className="button">
                About Me
              </Link>
            )}
          </li>
        </ul>
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