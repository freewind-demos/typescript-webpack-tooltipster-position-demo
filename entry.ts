import $ from 'jquery';

import 'tooltipster/dist/js/tooltipster.bundle';
import 'tooltipster/dist/css/tooltipster.bundle.min.css';

$('a').tooltipster({
  side: 'bottom',
  content: `
  <div>
    <p>asfsdfsdfasdfasfsdfdsfasdf</p>
    <p>asfsdfsdfasdfasfsdfdsfasdf</p>
    <p>asfsdfsdfasdfasfsdfdsfasdf</p>
    <p>asfsdfsdfasdfasfsdfdsfasdf</p>
    <p>asfsdfsdfasdfasfsdfdsfasdf</p>
    <p>asfsdfsdfasdfasfsdfdsfasdf</p>
    <p>asfsdfsdfasdfasfsdfdsfasdf</p>
  </div>
  `,
  contentAsHTML: true,
  trigger: 'hover'
})
