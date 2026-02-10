import { readBlockConfig } from '../../scripts/aem.js';

export default function decorate(block) {
  const config = readBlockConfig(block);

  const content = document.createElement('div');
  content.className = 'hero__content';

  [...block.children].forEach((child) => content.appendChild(child));

  block.innerHTML = '';
  block.appendChild(content);

  const buttonText = (config.buttontext || '').trim();
  const buttonLink = (config.button || '').trim();

  if (buttonText && buttonLink) {
    const cta = document.createElement('a');
    cta.className = 'button primary hero__cta';
    cta.href = buttonLink;
    cta.textContent = buttonText;
    content.appendChild(cta);
  }
}
