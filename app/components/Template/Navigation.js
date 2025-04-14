'use client';

import Link from 'next/link';
import React from 'react';

import routes from '../../data/routes';
import Hamburger from './Hamburger';

// Websites Navbar, displays routes defined in 'app/data/routes'
const Navigation = () => (
  <header id="header">
    <h1 className="index-link">
      {routes
        .filter((l) => l.index)
        .map((l) => (
          <Link key={l.label} href={l.path}>
            {l.label}
          </Link>
        ))}
    </h1>
    <nav className="links">
      <ul>
        {routes
          .filter((l) => !l.index)
          .map((l) => (
            <li key={l.label}>
              <Link href={l.path}>{l.label}</Link>
            </li>
          ))}
      </ul>
    </nav>
    <Hamburger />
  </header>
);

export default Navigation;
