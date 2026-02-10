// blocks/hero/hero.js
import { readBlockConfig } from '../../scripts/aem.js';

export default function decorate(block) {
  const config = readBlockConfig(block);

  // Create a content wrapper so we can control width/alignment cleanly
  const content = document.createElement('div');
  content.className = 'hero__content';

  // Move existing authored content into hero__content
  // (keeps UE-authored rich text / headings intact)
  [...block.children].forEach((child) => {
    content.appendChild(child);
  });

  block.innerHTML = '';
  block.appendChild(content);

  // Add CTA if provided in UE
  const ctaText = (config.buttonText || '').trim();
  const ctaLink = (config.buttonLink || '').trim();

  if (ctaText && ctaLink) {
    const cta = document.createElement('a');
    cta.className = 'button primary hero__cta';
    cta.href = buttonLink;
    cta.textContent = buttonText;

    // Put button at end of content
    content.appendChild(cta);
  }
}
