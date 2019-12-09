import exec from './';

beforeAll(() => {
  document.documentElement.innerHTML = `<html><body><div role="form" class="wpcf7" id="wpcf7-f179-o2" lang="he-IL" dir="rtl"><div class="screen-reader-response"></div><form action="/blog/#wpcf7-f179-o2" method="post" class="wpcf7-form mailchimp-ext-0.5.08" novalidate="novalidate"><div style="display: none;"> <input type="hidden" name="_wpcf7" value="179"> <input type="hidden" name="_wpcf7_version" value="5.1.4"> <input type="hidden" name="_wpcf7_locale" value="he_IL"> <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f179-o2"> <input type="hidden" name="_wpcf7_container_post" value="0"></div><p><span class="wpcf7-form-control-wrap your-name"><input type="text" name="your-name" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="איך קוראים לך?"></span><span class="wpcf7-form-control-wrap your-email"><input type="email" name="your-email" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email" aria-required="true" aria-invalid="false" placeholder="מה המייל שלך?"></span><span class="wpcf7-form-control-wrap your-phone"><input type="text" name="your-phone" value="" size="40" class="wpcf7-form-control wpcf7-text" aria-invalid="false" placeholder="לאיזה טלפון להתקשר?"></span><input type="submit" value="דבר איתי!" class="wpcf7-form-control wpcf7-submit"><span class="ajax-loader"></span></p><div class="wpcf7-response-output wpcf7-display-none"></div><p style="display: none !important"><span class="wpcf7-form-control-wrap referer-page"><input type="hidden" name="referer-page" value="direct visit" class="wpcf7-form-control wpcf7-text referer-page" aria-invalid="false"></span></p></form></div></body></html>`;
});

test('exec', () => {
  exec();
  expect(document.documentElement.outerHTML).toMatchSnapshot();
});
