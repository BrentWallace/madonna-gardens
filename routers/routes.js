const express = require('express');
const sgMail = require('@sendgrid/mail');
const { check, validationResult } = require('express-validator');

const router = new express.Router();

router.get('/', (req, res) => {
  res.render('index.hbs', {
    title: 'Madonna Gardens Assisted Living & Memory Care',
    description: 'Welcome to Madonna Gardens, an assisted living and memory care senior living community in Salinas, California. Madonna Gardens offers an engaging and varied lifestyle that empowers individuals to enjoy creative pursuits, refine skills, revisit old hobbies, and discover new passions in a family environment.',
    jsonld: `{
      "@context": "https://schema.org",
      "@type": "localBusiness",
      "image": "https://madonnagardens.com/img/hero-slide-1.jpg",
      "logo": "https://madonnagardens.com/img/madonna-gardens-logo.png",
      "address": {
        "@type": "postalAddress",
        "addressLocality": "Salinas",
        "addressRegion": "CA",
        "postalCode": "93901",
        "streetAddress": "1335 Byron Drive"
      },
      "name": "Madonna Gardens Assisted Living & Memory Care",
      "url": "https://madonnagardens.com",
      "telephone": "+18317580931",
      "sameAs": ["https://www.facebook.com/madonnagardens"]
    }`,
  });
});

router.get('/about', (req, res) => {
  res.render('about.hbs', {
    title: 'About Madonna Gardens',
  });
});

router.get('/photos', (req, res) => {
  res.render('photos.hbs', {
    title: 'Photo Gallery',
    albums: [
      {
        title: '',
        target: 'community-photos',
        description: '',
        photos: [
          { src: '/img/gallery/MadonnaGardens-8822-HDR-Edit-Edit-Edit.jpg', alt: '' },
          { src: '/img/gallery/CIA_8763.jpg', alt: '' },
          { src: '/img/gallery/MadonnaGardens-1-9.jpg', alt: '' },
          { src: '/img/gallery/MadonnaGardens-1-23.jpg', alt: '' },
          { src: '/img/gallery/MadonnaGardens-1-19.jpg', alt: '' },
          { src: '/img/gallery/DSC_2889.jpg', alt: '' },
          { src: '/img/gallery/CIA_8549.jpg', alt: '' },
          { src: '/img/gallery/CIA_8510.jpg', alt: '' },
          { src: '/img/gallery/MadonnaGardens-1-15.jpg', alt: '' },
          { src: '/img/gallery/MadonnaGardens-1-4.jpg', alt: '' },
          { src: '/img/gallery/MadonnaGardens-8811-HDR-Edit.jpg', alt: '' },
          { src: '/img/gallery/MadonnaGardens-1.jpg', alt: '' },
        ],
      },
    ],
  });
});

router.get('/photos/dining', (req, res) => {
  res.render('photos.hbs', {
    title: 'Dining Photo Gallery',
    target: '',
    description: 'Our culinary team at Madonna Gardens Assisted Living & Memory Care is committed to providing a nurturing and satisfying dining experience for our residents. Always having our residents well-being and care in mind, our meals are prepared with fresh and flavorful ingredients with dining options and choices.',
    albums: [
      {
        title: 'Everyday Dining at Madonna Gardens',
        target: 'everyday-dining',
        photos: [
          { src: '/img/dining/madonna-dining/dining-1.jpg', alt: '' },
          { src: '/img/dining/madonna-dining/dining-2.jpg', alt: '' },
          { src: '/img/dining/madonna-dining/dining-3.jpg', alt: '' },
          { src: '/img/dining/madonna-dining/dining-4.jpg', alt: '' },
          { src: '/img/dining/madonna-dining/dining-5.jpg', alt: '' },
          { src: '/img/dining/madonna-dining/dining-6.jpg', alt: '' },
        ],
      },
      {
        title: 'Grand Opening - June 2019',
        target: 'grand-opening-dining',
        photos: [
          { src: '/img/dining/grand-opening/grand-opening-1.jpg', alt: '' },
          { src: '/img/dining/grand-opening/grand-opening-2.jpg', alt: '' },
          { src: '/img/dining/grand-opening/grand-opening-3.jpg', alt: '' },
          { src: '/img/dining/grand-opening/grand-opening-4.jpg', alt: '' },
          { src: '/img/dining/grand-opening/grand-opening-5.jpg', alt: '' },
          { src: '/img/dining/grand-opening/grand-opening-6.jpg', alt: '' },
        ],
      },
    ],
  });
});

router.get('/photos/activities', (req, res) => {
  res.render('photos.hbs', {
    title: 'Activities Photo Gallery',
    target: '',
    description: '',
    albums: [
      {
        title: 'Residents With Their Families',
        target: 'residents-with-their-families',
        description: 'We are helping families connect with their loved ones during these challenging times.',
        photos: [
          { src: '/img/activities/madonna-activities/MGLetter1.jpg', alt: '' },
          { src: '/img/activities/madonna-activities/MGLetter2.jpg', alt: '' },
          { src: '/img/activities/madonna-activities/MG90bday3.jpg', alt: '' },
          { src: '/img/activities/madonna-activities/MG101BD4.jpg', alt: '' },
        ],
      },
      {
        title: 'Activities in the Madonna Gardens Community',
        target: 'activities-in-the-community',
        photos: [
          { src: '/img/activities/madonna-activities/MG Paint community.jpg', alt: '' },
          { src: '/img/activities/madonna-activities/MGCommunity Activities.jpg', alt: '' },
          { src: '/img/activities/madonna-activities/MGCommunityActivities1.jpg', alt: '' },
          { src: '/img/activities/madonna-activities/MGCommunityActivities2.jpg', alt: '' },
          { src: '/img/activities/madonna-activities/MG-ice-cream.jpg', alt: '' },
        ],
      },
      {
        title: 'Pet Visits',
        target: 'pet-visits',
        description: 'Monthly Pet Visits - Snuggling with Furry Friends',
        photos: [
          { src: '/img/activities/pet-visits/pet-visits-1.jpg', alt: '' },
          { src: '/img/activities/pet-visits/pet-visits-2.jpg', alt: '' },
          { src: '/img/activities/pet-visits/pet-visits-3.jpg', alt: '' },
          { src: '/img/activities/pet-visits/pet-visits-4.jpg', alt: '' },
          { src: '/img/activities/pet-visits/pet-visits-5.jpg', alt: '' },
          { src: '/img/activities/pet-visits/pet-visits-6.jpg', alt: '' },
          { src: '/img/activities/pet-visits/pet-visits-7.jpg', alt: '' },
        ],
      },
      {
        title: 'Holiday Celebrations',
        target: 'holidays',
        photos: [
          { src: '/img/activities/holidays/Halloween holiday celebrations.jpg', alt: '' },
          { src: '/img/activities/holidays/Holiday celebrations vet.jpg', alt: '' },
          { src: '/img/activities/holidays/Holiday celebrations.jpg', alt: '' },
          { src: '/img/activities/holidays/Holidayactivities.jpg', alt: '' },
          { src: '/img/activities/holidays/Holidaycelebrations.jpg', alt: '' },
          { src: '/img/activities/holidays/MGCelebrationsHoliday.jpg', alt: '' },
          { src: '/img/activities/holidays/MGHolidayCelebration.jpg', alt: '' },
          { src: '/img/activities/holidays/MGJuly.jpg', alt: '' },
        ],
      },
      {
        title: 'Grand Opening - June 2019',
        target: 'grand-opening-dining',
        photos: [
          { src: '/img/activities/grand-opening/grand-opening-1.jpg', alt: '' },
          { src: '/img/activities/grand-opening/grand-opening-2.jpg', alt: '' },
          { src: '/img/activities/grand-opening/grand-opening-3.jpg', alt: '' },
          { src: '/img/activities/grand-opening/grand-opening-4.jpg', alt: '' },
          { src: '/img/activities/grand-opening/grand-opening-5.jpg', alt: '' },
          { src: '/img/activities/grand-opening/grand-opening-6.jpg', alt: '' },
          { src: '/img/activities/grand-opening/grand-opening-7.jpg', alt: '' },
          { src: '/img/activities/grand-opening/grand-opening-8.jpg', alt: '' },
          { src: '/img/activities/grand-opening/grand-opening-9.jpg', alt: '' },
          { src: '/img/activities/grand-opening/grand-opening-10.jpg', alt: '' },
          { src: '/img/activities/grand-opening/grand-opening-11.jpg', alt: '' },
          { src: '/img/activities/grand-opening/grand-opening-12.jpg', alt: '' },
          { src: '/img/activities/grand-opening/grand-opening-13.jpg', alt: '' },
          { src: '/img/activities/grand-opening/grand-opening-14.jpg', alt: '' },
          { src: '/img/activities/grand-opening/grand-opening-15.jpg', alt: '' },
        ],
      },
    ],
  });
});

router.get('/floor-plans', (req, res) => {
  res.render('floor-plans.hbs', {
    title: 'Floorplans',
  });
});

router.get('/assisted-living', (req, res) => {
  res.render('assisted-living.hbs', {
    title: 'Assisted Living',
  });
});

router.get('/memory-care', (req, res) => {
  res.render('memory-care.hbs', {
    title: 'Memory Care',
  });
});

router.get('/activities', (req, res) => {
  res.render('activities.hbs', {
    title: 'Events & Activities',
  });
});

router.get('/covid-19', (req, res) => {
  res.render('covid.hbs', {
    title: 'COVID-19',
  });
});

router.get('/testimonials', (req, res) => {
  res.render('testimonials.hbs', {
    title: 'Family Testimonials',
  });
});

router.get('/videos', (req, res) => {
  res.render('videos.hbs', {
    title: 'Videos',
  });
});

router.get('/sitemap.xml', (req, res) => {
  const file = `${__dirname}/../public/sitemaps/sitemap.xml`;
  res.download(file);
});

router.get('/robots.txt', (req, res) => {
  res.type('text/plain');
  res.send('User-agent: *\nAllow: /*\nSitemap: https://madonnagardens.com/sitemap.xml');
});

router.get('/contact', (req, res) => {
  res.render('contact.hbs', {
    title: 'Contact Us',
  });
});

router.post('/contact', [
  check('fromEmail').isEmail().normalizeEmail(),
  check('firstName').trim().escape(),
  check('lastName').trim().escape().notEmpty(),
  check('phone').isMobilePhone('en-US'),
  check('referralSource').trim().escape(),
  check('inquiringFor').trim().escape(),
  check('brochure').trim().escape(),
  check('tour').trim().escape(),
  check('comments').trim().escape(),
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send();
  }
  const toEmail = process.env.EMAIL_RECIPIENT.split(',');
  const {
    fromEmail,
    firstName,
    lastName,
    phone,
    referralSource,
    inquiringFor,
    brochure,
    tour,
    comments,
  } = req.body;
  const msg = {
    to: toEmail,
    from: fromEmail,
    subject: `Madonna Gardens Contact Form: ${firstName} ${lastName} - ${fromEmail}`,
    text: `${firstName} ${lastName} has submitted an inquiry through the contact form on madonnagardens.com. They can be contacted by phone at ${phone} and by email at ${fromEmail}.\r\nInquiring for:${inquiringFor}\r\nReferred by: ${referralSource}\r\nBrochure:${brochure}\r\nTour:${tour}\r\n\r\nMessage start: ${comments}`,
    html: `
      <h1>New Contact Form Submission</h1>
        <p><strong>${firstName} ${lastName}</strong> has submitted an inquiry through the contact form on madonnagardens.com.</p>
        <h2>Contact Details</h2>
        <ul>
          <li>Email: ${fromEmail}</li>
          <li>Phone: ${phone}</li>
          <li>Referred by: ${referralSource}</li>
          <li>Inquiring for: ${inquiringFor}</li>
          <li>Brochure: ${brochure}</li>
          <li>Tour: ${tour}</li>
        </ul>
        <h2>Message Start:</h2>
        <p>${comments}</p>
        `,
  };
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  sgMail.send(msg);
  return res.send('Thank you for your inquiry! Our Community Relations Director will reach out to you shortly.');
});

module.exports = router;
