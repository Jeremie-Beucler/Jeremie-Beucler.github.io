'use client';

import React from 'react';

import Link from 'next/link';

import ContactIcons from '../../src/components/Contact/ContactIcons';
import PageWrapper from '../components/PageWrapper';

const ContactPage = () => (
  <PageWrapper>
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2>
            <Link href="/contact">Contact</Link>
          </h2>
        </div>
      </header>
      <div className="email-at">
        <p> You can email me at: jeremie.beucler@gmail.com </p>
      </div>
      <ContactIcons />
    </article>
  </PageWrapper>
);

export default ContactPage;
