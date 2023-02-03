import './index.scss';
import Header from '../../scripts/Header';

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');

  new Header(header).init();
});
