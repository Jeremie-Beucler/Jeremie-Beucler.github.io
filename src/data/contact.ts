import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faBluesky } from '@fortawesome/free-brands-svg-icons/faBluesky';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';

export interface ContactItem {
  link: string;
  label: string;
  icon: IconDefinition;
}

const data: ContactItem[] = [
  {
    link: 'https://github.com/Jeremie-Beucler',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://bsky.app/profile/jeremiebeucler.bsky.social',
    label: 'Bluesky',
    icon: faBluesky,
  },
  {
    link: 'https://twitter.com/BeuclerJeremie',
    label: 'Twitter',
    icon: faTwitter,
  },
  {
    link: 'www.linkedin.com/in/jérémie-beucler-2713202a0',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'mailto:jeremie.beucler@gmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
