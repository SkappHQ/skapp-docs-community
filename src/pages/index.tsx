import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useColorMode } from '@docusaurus/theme-common';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import { MODULES, Module } from '../lib/constants/utils/moduleCardsData';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const { colorMode } = useColorMode();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className={`button button--lg ${
              colorMode === 'dark' ? 'button--secondary' : 'button--primary'
            }`}
            to="/docs/get-started/skapp-setup-guide"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

function ModuleCard({ icon, title, links, ctaLink }: Module) {
  const { colorMode } = useColorMode();
  return (
    <div
      className={clsx('card margin-bottom--lg padding-horiz--md', styles.card)}
    >
      <div className="card__header text--center bg-gray-50">
        <div
          className={clsx('avatar margin-bottom--sm', styles.avatarContainer)}
        >
          <div
            className={clsx(
              'avatar__photo avatar__photo--lg',
              styles.avatarCircle
            )}
          >
            {icon}
          </div>
        </div>
        <h2
          className={colorMode === 'dark' ? 'text--secondary' : 'text--primary'}
        >
          {title}
        </h2>
      </div>
      <div className="card__body">
        <ul className="clean-list">
          {links?.map((link) => (
            <li key={link.url} className="margin-bottom--sm">
              <Link to={link.url}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="card__footer">
        <Link
          className={`button button--outline ${
            colorMode === 'dark' ? 'button--secondary' : 'button--primary'
          }`}
          to={ctaLink}
        >
          View all &nbsp;<span>→</span>
        </Link>
      </div>
    </div>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`${siteConfig.title} - Your go-to platform for running everyday business`}
      description="Your go-to platform for running your everyday business"
    >
      <HomepageHeader />
      <main>
        <section className="module-cards container">
          <div className="row padding-horiz--md">
            {MODULES.map((module, key) => (
              <div
                className={clsx(
                  'col col--4 margin-bottom--md',
                  styles.cardContainer
                )}
                key={key}
              >
                <ModuleCard {...module} />
              </div>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
