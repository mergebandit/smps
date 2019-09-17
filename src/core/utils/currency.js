export default (locale = 'en-US', style = 'currency', currency = 'USD') => new Intl.NumberFormat(locale, {
  style,
  currency,
});