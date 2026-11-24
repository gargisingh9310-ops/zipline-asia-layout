import React from 'react';
import PageHero from './PageHero';

export default function PageHeader({
  badge,
  eyebrow,
  title,
  subtitle,
  highlightText,
  breadcrumbs = [],
  ctaText,
  ctaLabel,
  ctaHref = "/contact",
  secondaryCTA,
  stats,
  metrics,
  bgImage,
  scrollTargetId
}) {
  return (
    <PageHero
      eyebrow={eyebrow || badge || "ZIPLINE ASIA"}
      title={title}
      highlightText={highlightText}
      subtitle={subtitle}
      breadcrumbs={breadcrumbs}
      bgImage={bgImage}
      primaryCTA={
        ctaText || ctaLabel
          ? { label: ctaText || ctaLabel, href: ctaHref }
          : { label: "REQUEST A PROPOSAL", href: "/contact" }
      }
      secondaryCTA={secondaryCTA}
      metrics={metrics || stats}
      scrollTargetId={scrollTargetId}
    />
  );
}
