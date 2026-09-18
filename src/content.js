// Single source of truth for site copy. Edit this file - the components read from it.
// Anything marked TODO is unverified or waiting on an asset.
//
// The welcome letter is Dr. Estin's own words. Where it disagrees with a directory
// listing or a news write-up, the letter wins.

export const site = {
  coastal: {
    eyebrow: 'Medicine with aloha',
    greeting: 'Aloha.',
    introduction: 'I’m Dr. Norman Estin.',
    storyAction: 'Get to know me',
    scholarshipAction: 'Support Maui students',
    storyHeading: 'A life in medicine. A home on Maui.',
    letterAction: 'Read my full welcome letter',
    nextGeneration: 'The next generation',
    scholarshipDetails: 'Explore the scholarship',
  },
  name: 'Dr. Norman Estin',
  handle: 'DocMaui',
  domain: 'drestin.com',
  tagline: 'Forty years of medicine on Maui.',
  intro:
    'Internal medicine physician, family physician, and Medical Director of Doctors On Call ' +
    'Urgent Care and Testing Centers — caring for West Maui’s residents and visitors since 1987.',
}

export const welcome = {
  heading: 'Welcome',
  lede: 'Aloha! I’m Dr. Norman Estin.',

  // Drop the file in public/media/ and put its path here. See public/media/README.md for
  // specs. While src is null the page renders a labelled placeholder instead of the player.
  video: {
    embedUrl: 'https://masky.ai/live/c-26-09-ybmr',
    externalLabel: 'Open Dr. Estin’s welcome on Masky',
    src: null, // TODO: '/media/welcome.mp4'
    poster: null, // TODO: '/media/welcome-poster.jpg'
    captions: null, // TODO: '/media/welcome.vtt' - captions, not optional for a public site
    label: 'Dr. Estin welcomes you',
    // The letter below doubles as the transcript, so the video is never the only path to
    // this content.
  },

  // Ordered blocks: 'p' is a paragraph, 'photo' drops an image into the flow.
  blocks: [
    {
      type: 'p',
      text:
        'For 40 years, I’ve had the privilege of practicing medicine on Maui as an internal ' +
        'medicine physician, family physician, and Medical Director of Doctors On Call Urgent ' +
        'Care and Testing Centers. During that time, I’ve cared for hundreds of thousands of ' +
        'residents and visitors while watching Maui—and especially West Maui—change and grow.',
    },
    {
      type: 'p',
      text:
        'Just as importantly, I’ve become part of this remarkable community. I’ve gotten to ' +
        'know generations of local families, community leaders, and hospitality workers who ' +
        'have devoted their lives to welcoming and caring for others.',
    },
    {
      type: 'p',
      text:
        'My career has taken me well beyond our clinics. I’ve served as a physician at ' +
        'corporate, athletic, community, and state events. I’ve also had the privilege of ' +
        'working with the PGA and the NCAA as medical director of the Kapalua Golf Tournaments ' +
        'and the Maui Invitational Basketball Tournaments. Internationally, I’ve been an NBC ' +
        'Olympic physician at multiple Olympic Games.',
    },
    {
      type: 'photo',
      src: '/media/clinic-collage.jpg',
      alt: 'Two Doctors On Call urgent care clinic storefronts with an inset portrait of Dr. Norman Estin wearing burgundy scrubs.',
      caption: '', // optional
      width: 'wide',
    },
    {
      type: 'p',
      text:
        'About eight years ago, I remember thinking that after a lifetime in medicine, I had ' +
        'experienced almost everything—except a major pandemic and a national disaster. I never ' +
        'expected Maui and I would soon experience both.',
    },
    {
      type: 'p',
      text:
        'COVID-19 came first. I worked alongside private and state medical organizations to ' +
        'test, vaccinate, distribute vaccines, and care for those who became ill.',
    },
    {
      type: 'p',
      text:
        'Then, in August 2023, came the devastating Maui wildfires. Our West Maui clinic was ' +
        'fortunate to survive when so much of the surrounding community did not. We reopened as ' +
        'quickly as possible and cared for the injured, the displaced, and those suffering from ' +
        'smoke, ash, fire, and enormous personal loss.',
    },
    {
      type: 'photo',
      src: '/media/clinic-portrait.jpg',
      alt: 'Dr. Norman Estin standing outside the Doctors On Call urgent care and testing center.',
      caption: '',
      width: 'wide',
    },
    {
      type: 'p',
      text:
        'Those days reinforced something I had learned over four decades here: on Maui, you ' +
        'don’t simply practice medicine in a community—you become part of it.',
    },
    {
      type: 'p',
      text:
        'At this point in my career, I’m also looking toward the next generation. Much of my ' +
        'work now will focus on establishing and developing healthcare education and training ' +
        'opportunities for Maui students, particularly at Lahainaluna High School, a school and ' +
        'community I’ve been involved with for many years, especially as a Team Physician and ' +
        'Advisor.',
    },
    {
      type: 'p',
      text:
        'I’ll be working with a mentorship program that connects young people with ' +
        'opportunities in healthcare. I’ve also begun a personal healthcare scholarship program ' +
        'to encourage Maui students to pursue careers in medicine, nursing, and the many other ' +
        'healthcare professions our community needs.',
    },
  ],

  stats: [
    { value: '40', label: 'Years practicing on Maui' },
    { value: 'PGA · NCAA', label: 'Tournament medical director' },
    { value: 'Olympics', label: 'NBC Games physician' },
  ],
}

export const work = {
  heading: 'What I do',
  items: [
    {
      title: 'Urgent care',
      body:
        'Medical Director of Doctors On Call Urgent Care and Testing Centers, in Kāʻanapali and ' +
        'at the Shops at Wailea. Walk-in urgent and family medicine with on-site lab, X-ray and ' +
        'telemedicine — residents and visitors alike.',
    },
    {
      title: 'Event & sports medicine',
      body:
        'Medical director of the Kapalua Golf Tournaments for the PGA and the Maui Invitational ' +
        'Basketball Tournaments for the NCAA, an NBC Olympic physician at multiple Games, and ' +
        'physician at corporate, community and state events.',
    },
    {
      title: 'Education & the next generation',
      body:
        'Healthcare education and training for Maui students, centered on Lahainaluna High ' +
        'School — a mentorship program connecting young people to careers in healthcare, and a ' +
        'personal scholarship program for students entering medicine and nursing.',
    },
  ],
}

// Newest first. `blurb` is our own one-line description, not the outlet's text.
export const news = {
  heading: 'News',
  items: [
    {
      date: '2025-11-24',
      source: 'Doctors On Call',
      title: 'Urgent care and walk-in clinics expand for residents and visitors',
      blurb: 'The practice adds a provider across both the West Maui and South Maui clinics.',
      href: 'https://doctorsoncallmaui.com/blog/2025/11/24/doctors-on-call-urgent-care-and-walk-in-clinics-expand-for-residents-and-visitors/',
    },
    {
      date: '2023-08-28',
      source: 'Maui Now',
      title: 'Doctors On Call Urgent Care reopens in West Maui',
      blurb:
        'Weeks after the Lahaina fire, the clinic reopens at Times Market Plaza in Honokōwai, ' +
        'treating fire survivors without insurance coverage.',
      href: 'https://mauinow.com/2023/08/28/doctors-on-call-urgent-care-reopens-in-west-maui/',
    },
    {
      date: '2023-08-04',
      source: 'Lahaina News',
      title: 'Good news on Covid and emerging weight loss medicines',
      blurb: 'On falling COVID mortality in Hawaiʻi, and what semaglutide actually costs.',
      href: 'https://www.lahainanews.com/news/local-news/2023/08/04/dr-norm-estin-good-news-on-covid-and-emerging-weight-loss-medicines/',
    },
    {
      date: '2022-05-07',
      source: 'CBS News Radio',
      title: 'Eye on Travel with Peter Greenberg',
      blurb:
        'How Maui’s hospitals and doctors navigated COVID, and what travelers to Hawaiʻi ' +
        'needed to know.',
      href: 'https://doctorsoncallmaui.com/blog/2022/05/07/dr-norman-estin-appears-on-cbs-news-radios-eye-on-travel-with-peter-greenberg/',
    },
    {
      date: '2022-04-22',
      source: 'Lahaina News',
      title: '“Elvis has left the building, but COVID is still here!”',
      blurb: 'On the BA.2 wave, ventilation, and the launch of drive-up urgent care in Kahului.',
      href: 'https://doctorsoncallmaui.com/blog/2022/04/22/hospital-doctors-examine-patients-so-that/',
    },
    {
      date: '2021-02-26',
      source: 'Lahaina News',
      title: 'Focused on educating and protecting the community against COVID-19',
      blurb: 'A profile of the vaccination and public-education effort across West Maui.',
      href: 'https://www.lahainanews.com/news/local-news/2021/02/26/dr-norman-estin-focused-on-educating-and-protecting-the-community-against-covid-19/',
    },
    {
      date: '2018-01-18',
      source: 'Lahaina News',
      title: 'Doctors On Call secures ‘landmark breakthrough’ for West Maui Kaiser clients',
      blurb:
        'Kaiser patients gain after-hours urgent care in West Maui instead of driving across ' +
        'the island.',
      href: 'https://www.lahainanews.com/news/local-news/2018/01/18/doctors-on-call-secures-landmark-breakthrough-for-west-maui-kaiser-clients/',
    },
  ],
}

// Entries with a null href render greyed out and non-clickable.
export const links = {
  heading: 'Find me',
  items: [
    {
      label: 'Doctors On Call',
      handle: 'doctorsoncallmaui.com',
      href: 'https://doctorsoncallmaui.com/',
    },
    {
      label: 'LinkedIn',
      handle: 'Norman Estin',
      href: 'https://www.linkedin.com/in/norman-estin-742113184/',
    },
    { label: 'Instagram', handle: '@DocMaui', href: null }, // TODO: real URL
    { label: 'YouTube', handle: '@DocMaui', href: null }, // TODO: real URL
  ],
}

export const contact = {
  heading: 'Get in touch',
  body:
    'For appointments, walk-in hours and clinic locations, go through Doctors On Call — that is ' +
    'the fastest way to be seen. Media, speaking, mentorship and scholarship enquiries can come ' +
    'here.',
  email: null, // TODO: e.g. 'hello@drestin.com'
  practiceUrl: 'https://doctorsoncallmaui.com/',
  // TODO: directory listings still show the pre-fire Lahaina address and number. The clinics
  // moved after August 2023 - confirm the current ones before publishing any address here.
  note:
    'This site is informational only. It is not medical advice and does not create a ' +
    'doctor-patient relationship. If this is an emergency, call 911.',
}

export const scholarship = {
  navLabel: 'Scholarship',
  heading: 'Support the Future of Healthcare on Maui',
  lede: 'Join Dr. Norman Estin in supporting the next generation of healthcare professionals on Maui.',
  paragraphs: [
    'The Dr. Norman Estin Healthcare Scholarship Fund is a unique, physician-sponsored scholarship fund specifically directed toward developing and supporting Lahainaluna High School students pursuing education and careers in healthcare professions.',
    'Your contribution helps local students achieve their educational goals and prepare for a future in healthcare, strengthening the future of healthcare on Maui.',
  ],
  giveLabel: 'GIVE NOW',
  donationUrl: 'https://secure.etransfer.com/eft/flexblockcode/donation1.cfm?d2org=LHSF&d2tool=donate',
  donationIntro: 'Make a secure online contribution to the Dr. Norman Estin Healthcare Scholarship Fund through the Lahainaluna High School Foundation.',
  pendingLabel: 'Online giving link coming soon. You can contribute by mail below.',
  taxNote: 'Contributions to the Dr. Norman Estin Healthcare Scholarship Fund are administered through the Lahainaluna High School Foundation, a 501(c)(3) organization. All donations to this fund are tax deductible.',
  mailHeading: 'To contribute by mail, please send your donation to:',
  address: ['Lahainaluna High School - College and Career Center', '980 Lahainaluna Road', 'Lahaina, HI 96761'],
  checkInstructions: 'Please make checks payable to Lahainaluna High School Foundation and note "Dr. Norman Estin Scholarship Fund" in the memo line.',
  contactHeading: 'For more information, please contact:',
  contactName: 'Art Filazar',
  contactEmail: 'lhsf08@yahoo.com',
  contactTitle: 'LHS Foundation Executive Director',
}

export const teamAdvisor = {
  "heading": "Lahainaluna Team Medical Advisor",
  "body": "Dr. Estin and the Doctors on Call Staff have been team physicians and Medical Advisors for many years",
  "photos": [
    {
      "src": "/media/lahainaluna/team-01.jpeg",
      "alt": "A man wearing a red Lahainaluna polo and lei during a televised football interview."
    },
    {
      "src": "/media/lahainaluna/team-02.jpeg",
      "alt": "Football players in red helmets watching a nighttime game from the sideline."
    },
    {
      "src": "/media/lahainaluna/team-03.jpeg",
      "alt": "Spectators filling the stadium stands beneath the press box."
    },
    {
      "src": "/media/lahainaluna/team-04.jpeg",
      "alt": "Fans gathered beneath the stadium press box at night."
    },
    {
      "src": "/media/lahainaluna/team-05.jpeg",
      "alt": "Lahainaluna players in red uniforms facing the crowded grandstand."
    },
    {
      "src": "/media/lahainaluna/team-06.jpeg",
      "alt": "Two supporters wearing red shirts smiling together at a nighttime game."
    },
    {
      "src": "/media/lahainaluna/team-07.jpeg",
      "alt": "A group posing with certificates in front of a Lahainaluna backdrop."
    },
    {
      "src": "/media/lahainaluna/team-08.jpeg",
      "alt": "A photographer beside the football field with mountains in the background."
    },
    {
      "src": "/media/lahainaluna/team-09.jpeg",
      "alt": "An illuminated scoreboard displaying Lunas Strong at night."
    },
    {
      "src": "/media/lahainaluna/team-10.jpeg",
      "alt": "Two men standing beside the football field after dark."
    }
  ]
}
