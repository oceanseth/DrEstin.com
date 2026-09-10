// Single source of truth for site copy. Edit this file - the components read from it.
// Anything marked TODO is unverified and needs confirming before launch.

export const site = {
  name: 'Dr. Norman Estin',
  handle: 'docmaui',
  domain: 'drestin.com',
  tagline: 'Urgent care on Maui since 1987.',
  intro:
    'Founder and medical director of Doctors On Call, West Maui’s urgent care practice. ' +
    'Fifty years in medicine, nearly forty of them on this island — emergency, travel, ' +
    'sports and diving medicine, for the people who live here and the people visiting.',
}

export const about = {
  heading: 'About',
  body: [
    'Norman M. Estin, MD came to Maui in 1987 after practicing urgent care and outpatient ' +
      'medicine in Boston, and built the island’s first urgent care program from scratch. ' +
      'He has been a doctor for the West Maui community ever since.',
    'He trained at the University of Rochester School of Medicine and Dentistry, interned at ' +
      'the University of Wisconsin Hospitals and Clinics, and completed his residency at Legacy ' +
      'Emanuel Medical Center in Portland. His fields are emergency, travel, sports and diving ' +
      'medicine — he became a scuba instructor in his first three years here.',
    'Off the clock he is usually on a sideline: team physician for Lahainaluna High School and ' +
      'Maui Preparatory Academy, official tournament physician for the PGA Tournament of ' +
      'Champions for two decades, and the doctor for the Maui Jim Maui Invitational.',
  ],
  stats: [
    { value: '1987', label: 'On Maui since' },
    { value: '50+', label: 'Years in medicine' },
    { value: 'Lahaina, HI', label: 'Based in' },
  ],
}

export const work = {
  heading: 'What I do',
  items: [
    {
      title: 'Urgent care',
      body:
        'Doctors On Call, in Kāʻanapali and at the Shops at Wailea. Walk-in urgent and family ' +
        'medicine with on-site lab, X-ray, pharmacy and telemedicine — no appointment, residents ' +
        'and visitors alike.',
    },
    {
      title: 'Sports & travel medicine',
      body:
        'Two decades as tournament physician for the PGA Tournament of Champions, plus the Maui ' +
        'Jim Maui Invitational and the West Maui schools. Dive and travel medicine for people a ' +
        'long way from their own doctor.',
    },
    {
      title: 'Community & media',
      body:
        'Public health education through the Lahaina News and CBS News Radio’s Eye on Travel, ' +
        'community vaccination drives, and care for Lahaina fire survivors without insurance ' +
        'after August 2023.',
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
    { label: 'Instagram', handle: '@docmaui', href: null }, // TODO: real URL
    { label: 'YouTube', handle: '@docmaui', href: null }, // TODO: real URL
  ],
}

export const contact = {
  heading: 'Get in touch',
  body:
    'For appointments, walk-in hours and clinic locations, go through Doctors On Call — that is ' +
    'the fastest way to be seen. Media and speaking requests can come here.',
  email: null, // TODO: e.g. 'hello@drestin.com'
  practiceUrl: 'https://doctorsoncallmaui.com/',
  // TODO: directory listings still show the pre-fire Lahaina address and number. The clinics
  // moved after August 2023 - confirm the current ones before publishing any address here.
  note:
    'This site is informational only. It is not medical advice and does not create a ' +
    'doctor-patient relationship. If this is an emergency, call 911.',
}
