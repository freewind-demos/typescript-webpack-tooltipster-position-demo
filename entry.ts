import $ from 'jquery';

import 'tooltipster/dist/js/tooltipster.bundle';
import 'tooltipster/dist/css/tooltipster.bundle.min.css';

$('a').tooltipster({
  side: 'bottom',
  content: 'loading ...',
  delay: 200,
  interactive: true,
  trigger: 'hover',
  functionInit: (instance) => {
    console.log('> functionInit');
    setTimeout(() => {
      instance.content('Hello, tooltipster');
    }, 5000)
  },
  functionAfter: () => {
    console.log('> functionAfter');
  }
})
