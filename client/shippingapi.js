// For more information, please see Delivery information section of each vendor's FAQ page.
// Total days for shipping is combination of production days + delivery days for each vendor.
// Total days does not take into account delays in production or postal service.

const shippingapi = {
  'nl': {
    'Photobooks': 5,
    'Wall-Decor': 5,
    'Cards': 4,
    'Calendars': 3,
    'Prints': 3,
    'Mugs': 3,
  }, 
  'uk': {
    'Photobooks': 8,
    'Wall Decor': 8,
    'Cards': 7,
    'Calendars': 7,
    'Prints': 6,
    'Mugs': 6,
  },
  'be': {
    'Photobooks': 6,
    'Wall Decor': 6,
    'Cards': 5,
    'Calendars': 5,
    'Prints': 4,
    'Mugs': 4,
  },
  'de': {
    'Photobooks': 7,
    'Wall Decor': 7,
    'Cards': 6,
    'Calendars': 6,
    'Prints': 5,
    'Mugs': 5,
  },
  'no': { // production days
    'Photobooks': 4,
    'Wall Decor': 4,
    'Cards': 3,
    'Calendars': 3,
    'Prints': 2,
    'Mugs': 2,
    'Zipcodes': { // delivery days
      '0015-3999': [2,4],
      '4000-7599': [3,5],
      '7600-7999': [4,6],
      '8000-8599': [4,6],
      '8600-8999': [5,7],
      '9000-9999': [5,7]
    }
  },
  'se': {
    'Photobooks': 8,
    'Wall Decor': 8,
    'Cards': 7,
    'Calendars': 7,
    'Prints': 6,
    'Mugs': 6,
  },
  'fr': {
    'Photobooks': 7,
    'Posters': 7,
    'Wall Decor (Canvas)': 7,
    'Wall Decor (Other)': 10,
    'Calendars': 7,
    'Cards': 7,
    'Prints': 7,
    'Mugs': 4,
  },
}