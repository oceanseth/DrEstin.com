// Single source of truth for site copy. Edit this file - the components read from it.
// Anything marked TODO is placeholder text waiting on real details.

export const site = {
  name: 'Dr. Estin',
  handle: 'docmaui',
  domain: 'drestin.com',
  tagline: 'Medicine, the ocean, and everything Maui.',
  intro:
    'TODO: one or two sentences in your own voice. Who you are, what you make, ' +
    'and why someone landing here should stick around.',
}

export const about = {
  heading: 'About',
  body: [
    'TODO: the short version. Where you trained, what you practice, how you ended up on Maui.',
    'TODO: the human version. What you do when you are not working - the water, the trails, ' +
      'the camera, whatever belongs here.',
  ],
  stats: [
    { value: 'TODO', label: 'Years practicing' },
    { value: 'Maui, HI', label: 'Based in' },
    { value: 'TODO', label: 'Specialty' },
  ],
}

export const work = {
  heading: 'What I do',
  items: [
    {
      title: 'Practice',
      body: 'TODO: describe your clinical work - specialty, focus areas, who you see.',
    },
    {
      title: 'Writing & video',
      body: 'TODO: the content side. What you publish, where, and who it is for.',
    },
    {
      title: 'Speaking & collaboration',
      body: 'TODO: talks, podcasts, partnerships - and how people should approach you about them.',
    },
  ],
}

// Drop the real URLs in. Any entry with a null href is hidden from the page.
export const links = {
  heading: 'Find me',
  items: [
    { label: 'Instagram', handle: '@docmaui', href: null },
    { label: 'YouTube', handle: '@docmaui', href: null },
    { label: 'TikTok', handle: '@docmaui', href: null },
    { label: 'X', handle: '@docmaui', href: null },
  ],
}

export const contact = {
  heading: 'Get in touch',
  body: 'TODO: set expectations - what you answer, what you do not, typical turnaround.',
  email: null, // e.g. 'hello@drestin.com'
  note: 'This site is not medical advice and does not create a doctor-patient relationship.',
}
