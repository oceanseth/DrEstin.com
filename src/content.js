// Single source of truth for site copy. Edit this file - the components read from it.
// Anything marked TODO is unverified or waiting on an asset.
//
// The welcome letter is Dr. Estin's own words. Where it disagrees with a directory
// listing or a news write-up, the letter wins.

export const site = {
  heroPortrait: {
    src: '/media/clinic-portrait.jpg',
    alt: 'Dr. Norm Estin smiling in a light-colored cap and navy polo in front of the Doctors On Call clinic.',
  },
  coastal: {
    greeting: 'Aloha.',
    introduction: 'I’m Dr. Norm Estin.',
    storyAction: 'Click here for a classic doctor bit',
    storyUrl: 'https://www.youtube.com/watch?v=hoe24aSvLtw',
    anotherClipLabel: 'Click here for another great Dr. Bitz',
    anotherClipUrl: 'https://youtu.be/-i8MHAWJdm8',
    olympicsMovieUrl: 'https://www.youtube.com/watch?v=GE12zeIyPx0',
    storyHeading: 'A life in medicine. A home on Maui.',
    letterAction: 'Where we are',
    nextGeneration: 'The next generation',
    scholarshipDetails: 'Explore the scholarship',
  },
  name: 'Dr. Norm Estin',
  handle: 'DocMaui',
  domain: 'drestin.com',
  tagline: 'Forty years of medicine on Maui.',
  intro:
    'Internal medicine physician, family physician, and Medical Director of Doctors On Call ' +
    'Urgent Care and Testing Centers — caring for West Maui’s residents and visitors since 1987.',
}

export const welcome = {
  heading: 'Welcome',
  lede: 'Aloha! I’m Dr. Norm Estin.',

  video: {
    // Live Masky talking-head greeting, re-rendered 2026-10-01 with the current hero
    // portrait as the avatar image. The poster below is the same photo and doubles as
    // the fallback if the embed URL is ever cleared.
    embedUrl: 'https://masky.ai/live/c-26-10-32nt?bg=fafaf6',
    externalLabel: 'Open Dr. Estin’s welcome on Masky',
    src: null,
    poster: '/media/dr-estin-hero-portrait.jpeg',
    posterAlt: 'Dr. Estin smiling in glasses, a white baseball cap, and a light blue shirt.',
    captions: null,
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
      alt: 'Two Doctors On Call urgent care clinic storefronts with an inset portrait of Dr. Norm Estin wearing burgundy scrubs.',
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
        'COVID-19 came first. We worked alongside private and state medical organizations to ' +
        'test, vaccinate, distribute vaccines, and care for those who became ill.',
    },
    {
      type: 'gallery',
      id: 'covid-photos',
      label: 'COVID-19 community response photographs',
      photos: [
    {
      "src": "/media/covid/covid-02.jpeg",
      "alt": "A healthcare worker wearing glasses, a surgical mask, a face shield, and a protective gown."
    },
    {
      "src": "/media/covid/covid-04.jpeg",
      "alt": "A masked man in a red polo at an outdoor gathering of medical staff and uniformed personnel."
    },
    {
      "src": "/media/covid/covid-06.jpeg",
      "alt": "Masked staff working at a Doctors On Call testing station."
    },
    {
      "src": "/media/covid/covid-11.jpeg",
      "alt": "Three masked men, including a uniformed medical worker with a stethoscope, posing at an outdoor response site."
    },
    {
      "src": "/media/covid/covid-23.jpeg",
      "alt": "A quiet waterfront street in Lahaina with storefronts and an oceanfront walkway."
    },
    {
      "src": "/media/covid/covid-25.jpeg",
      "alt": "A broad empty beach curving past oceanfront hotels, with sailboats offshore."
    },
  ]
},
    {
      type: 'p',
      text:
        'Then, in August 2023, came the devastating Maui wildfires. Our West Maui clinic was ' +
        'fortunate to survive when so much of the surrounding community did not. We reopened as ' +
        'quickly as possible and cared for the injured, the displaced, and those suffering from ' +
        'smoke, ash, fire, and enormous personal loss. Representative Jill Tokuda was of tremendous ' +
        'help for us and the entire West Maui community in recovering from the fire.',
    },
    {
      type: 'gallery',
      id: 'wildfire-photos',
      label: 'Maui wildfire response photographs and images',
  "photos": [
    {
      "src": "/media/wildfires/lahaina-fire-aftermath-ocean.jpeg",
      "alt": "Fire-damaged buildings and trees in Lahaina, with a tall smokestack still standing and boats on the ocean beyond."
    },
    {
      "src": "/media/wildfires/community-recovery-outdoors.jpeg",
      "alt": "Dr. Estin with Representative Jill Tokuda outdoors, with mountains and a faint rainbow behind them."
    },
    {
      "src": "/media/wildfires/wildfire-02.jpeg",
      "alt": "A news image of a man walking through wildfire destruction in Lahaina, with the original news caption."
    }
  ]
},
    {
      type: 'p',
      text:
        'Those days reinforced something I had learned over four decades here: on Maui, you ' +
        'don’t simply practice medicine in a community—you become part of it.',
    },
  ],
  nextGenerationCopy: [
    'At this point in my career, I’m also looking toward the next generation. Much of my ' +
      'work now will focus on establishing and developing healthcare education and training ' +
      'opportunities for Maui students, particularly at Lahainaluna High School, a school and ' +
      'community I’ve been involved with for many years, especially as a Team Physician and ' +
      'Advisor.',
    'I’ll be working with a mentorship program that connects young people with ' +
      'opportunities in healthcare. I’ve also begun a personal healthcare scholarship program ' +
      'to encourage Maui students to pursue careers in medicine, nursing, and the many other ' +
      'healthcare professions our community needs.',
  ],

}

export const work = {
  heading: 'What I do',
  items: [
    {
      title: 'Urgent Care',
      photo: {
        src: '/media/urgent-care-portrait.png',
        alt: 'Dr. Norm Estin smiling in glasses, a blue cap, and a navy polo shirt.',
      },
      body:
        'Medical Director of Doctors On Call Urgent Care and Testing Centers, in Kāʻanapali and ' +
        'at the Shops at Wailea. Walk-in urgent and family medicine with on-site lab, X-ray and ' +
        'telemedicine — residents and visitors alike.',
    },
    {
      title: 'Event & Sports Medicine',
      photo: {
        src: '/media/tournaments/event-sports-medicine-doctors-on-call.jpeg',
        alt: 'Dr. Estin and a colleague in red polos holding a Doctors On Call banner courtside at the Maui Invitational.',
      },
      body:
        'Medical director of the Kapalua Golf Tournaments for the PGA and the Maui Invitational ' +
        'Basketball Tournaments for the NCAA, an NBC Olympic physician at multiple Games, and ' +
        'physician at corporate, community and state events.',
    },
    {
      title: 'Education & the Next Generation',
      photo: {
        src: '/media/education-maui-students.jpg',
        alt: 'Lahaina News clipping showing Doctors On Call staff mentoring a Lahainaluna High School student, with the headline Students learn about the medical field at Doctors On Call.',
      },
      body:
        'Healthcare education and training for Maui students, centered on Lahainaluna High ' +
        'School — a mentorship program connecting young people to careers in healthcare, and a ' +
        'personal scholarship program for students entering medicine and nursing.',
    },

  ],
}

// Newest first. `blurb` is our own one-line description, not the outlet's text.
// Entries with a null href render greyed out and non-clickable.
export const links = {
  heading: 'Find me',
  items: [
    { label: 'Email', handle: 'docmaui@mac.com', href: 'mailto:docmaui@mac.com' },
    {
      label: 'Doctors On Call',
      handle: 'doctorsoncallmaui.com',
      href: 'https://doctorsoncallmaui.com/',
    },
    {
      label: 'LinkedIn',
      handle: 'Norm Estin',
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
  recipient: {
    heading: 'We already have a 2026–2027 recipient of the Dr. Norman Estin Healthcare Scholarship!',
    name: 'Asialyn Andres',
    body: 'Asialyn Andres was a distinguished valedictorian at Lahainaluna High School and has already earned her credential as a certified nurse’s aide. She is pursuing further education to become a registered nurse, with the hope of specializing in pediatrics.',
    congratulations: 'Congratulations, Asialyn, for your initiative and hard work!',
    source: { src: '/media/scholarship-recipient-2026-2027.png', alt: 'Scholarship announcement featuring Asialyn Andres and the Lahainaluna High School emblem.' },
    portraitAlt: 'Portrait of scholarship recipient Asialyn Andres.',
    logoAlt: 'Lahainaluna High School emblem.',
  },
  navLabel: 'Scholarship',
  heading: 'Support the Future of Healthcare on Maui',
  lede: 'You yourself can make a difference in creating the next generation of healthcare professionals on Maui.',
  paragraphs: [
    'The Dr. Norm Estin Healthcare Scholarship Fund is a unique, physician-sponsored scholarship fund specifically directed toward developing and supporting Lahainaluna High School students pursuing education and careers in healthcare professions.',
    'Your contribution helps local students achieve their educational goals and prepare for a future in healthcare, strengthening the future of healthcare on Maui.',
  ],
  giveLabel: 'Participate Now',
  donationUrl: 'https://secure.etransfer.com/eft/flexblockcode/donation1.cfm?d2org=LHSF&d2tool=donate',
  donationReminder: 'Please make sure your donation specifies the Dr. Norman Estin Healthcare Scholarship.',
  donationIntro: 'Make a secure online contribution to the Dr. Norm Estin Healthcare Scholarship Fund through the Lahainaluna High School Foundation.',
  pendingLabel: 'Online giving link coming soon. You can contribute by mail below.',
  taxNote: 'Contributions to the Dr. Norm Estin Healthcare Scholarship Fund are administered through the Lahainaluna High School Foundation, a 501(c)(3) organization. All donations to this fund are tax deductible.',
  mailHeading: 'To contribute by mail, please send your donation to:',
  address: ['Lahainaluna High School - College and Career Center', '980 Lahainaluna Road', 'Lahaina, HI 96761'],
  checkInstructions: 'Please make checks payable to Lahainaluna High School Foundation and note "Dr. Norm Estin Scholarship Fund" in the memo line.',
  contactHeading: 'For more information, please contact:',
  contactName: 'Art Filazar',
  contactEmail: 'lhsf08@yahoo.com',
  contactTitle: 'LHS Foundation Executive Director',
}

export const teamAdvisor = {
  movieLabel: 'Click here for favorite doctor bit',
  movieUrl: 'https://youtu.be/VOmD-xqK2Es',
  "heading": "Lahainaluna Team Medical Advisor",
  "body": "Dr. Estin and the Doctors on Call Staff have been team physicians and Medical Advisors for many years",
  "photos": [
    {
      "src": "/media/lahainaluna/team-02.jpeg",
      "alt": "Football players in red helmets watching a nighttime game from the sideline."
    },
    {
      "src": "/media/lahainaluna/team-09.jpeg",
      "alt": "An illuminated scoreboard displaying Lunas Strong at night."
    },
    {
      "src": "/media/lahainaluna/team-11.jpeg",
      "alt": "Three staff members holding a Doctors On Call banner on a football stadium sideline."
    },
    {
      "src": "/media/lahainaluna/team-12.jpeg",
      "alt": "Two masked supporters making shaka gestures beside Lahainaluna football players at sunset."
    },
    {
      "src": "/media/lahainaluna/team-16.jpeg",
      "alt": "People gathered on the Lahainaluna football field around floral tributes and a portrait, with the ocean and mountains behind them."
    },
    {
      "src": "/media/lahainaluna/team-25.jpeg",
      "alt": "Lahainaluna supporters in stadium seats holding handmade signs and making shaka gestures."
    }
  ]
}

export const tournament = {
  "heading": "Athletic Tournament Medical Director",
  "body": "Dr. Estin and the Doctors On Call team have been team physicians, medical directors, and medical advisors for numerous golf events at Kapalua and national-level basketball tournaments, such as the Maui Invitational. We have also been the medical provider for numerous local athletic events, such as surfing.",
  "groups": [
    {
      "id": "nbc-olympics",
      "heading": "NBC Olympic Physician, starting in 2000",
      "photos": [
        {"src": "/media/olympics/sydney-2000-harbour-bridge.jpeg", "alt": "Sydney Harbour Bridge at night with the Olympic rings illuminated above it."},
        {"src": "/media/olympics/sydney-2000-opera-house.jpeg", "alt": "Dr. Estin and a colleague holding a Doctors On Call banner in front of the Sydney Opera House."},
        {"src": "/media/olympics/salt-lake-city-2002.jpeg", "alt": "Dr. Estin holding a Doctors On Call banner beside a snow sports venue at the Salt Lake City Winter Olympics."},
        {"src": "/media/olympics/athens-2004-acropolis.jpeg", "alt": "Dr. Estin holding a Doctors On Call banner in front of the Acropolis in Athens."},
        {"src": "/media/olympics/beijing-2008-great-wall.jpeg", "alt": "Dr. Estin holding a Doctors On Call banner on the Great Wall of China."},
        {"src": "/media/olympics/salt-lake-city-2002-halfpipe-finals.jpeg", "alt": "Scoreboard showing the halfpipe finals at the Salt Lake 2002 Winter Olympics."},
        {"src": "/media/olympics/vancouver-2010-hockey-arena.jpeg", "alt": "Dr. Estin holding a Doctors On Call banner inside a Vancouver 2010 Olympic hockey arena."},
        {"src": "/media/olympics/london-2012-tower-bridge.jpeg", "alt": "Dr. Estin holding a Doctors On Call banner in front of Tower Bridge with the Olympic rings displayed above it."},
        {"src": "/media/olympics/london-westminster.jpeg", "alt": "Dr. Estin holding a Doctors On Call banner beside a window overlooking Big Ben and the River Thames."}
      ]
    },
    {
      "id": "ncaa-basketball",
      "heading": "NCAA Maui Invitational Basketball",
      "photos": [
        {
          "src": "/media/tournaments/tournament-08.jpeg",
          "alt": "Five Doctors On Call team members in red shirts holding a sign beside a basketball court."
        },
        {
          "src": "/media/tournaments/tournament-09.jpeg",
          "alt": "The Doctors On Call medical team with their sign at a basketball tournament."
        },
        {
          "src": "/media/tournaments/tournament-16.jpeg",
          "alt": "Five medical team members in red shirts and leis holding a Doctors On Call sign on a basketball court."
        },
        {
          "src": "/media/tournaments/tournament-17.jpeg",
          "alt": "Basketball players and photographers gathered around a silver trophy decorated with leis."
        },
        {
          "src": "/media/tournaments/tournament-35.jpeg",
          "alt": "Doctors On Call staff posing with cheerleaders and a Doctors On Call sign in front of a Maui Jim tournament banner."
        },
        {
          "src": "/media/tournaments/tournament-36.jpeg",
          "alt": "Two men smiling and making hand gestures beside the courtside broadcast table as basketball players warm up."
        },
      ]
    },
    {
      "id": "kapalua-golf",
      "heading": "PGA, Senior, and Wendy’s golf tournaments",
      "photos": [
        {
          "src": "/media/tournaments/legacy-cup-doctors-on-call.jpeg",
          "alt": "A man in a red Doctors On Call polo taking a selfie beside the medical team's table, with a Legacy Cup welcome banner and golf course behind him."
        },
        {
          "src": "/media/tournaments/tournament-05.jpeg",
          "alt": "Dr. Estin holding a Doctors On Call sign at a Kapalua golf course overlooking the ocean."
        },
        {
          "src": "/media/tournaments/tournament-14.jpeg",
          "alt": "A medical team member between two Doctors On Call golf carts at a golf event, with spectators and the ocean behind him."
        },
        {
          "src": "/media/tournaments/golf-course-conversation.jpeg",
          "alt": "Two men in golf attire leaning toward each other at an outdoor golf event."
        },
        {
          "src": "/media/tournaments/tournament-11.jpeg",
          "alt": "A group of golfers posing with a Doctors On Call sign at an outdoor golf event."
        },
        {
          "src": "/media/tournaments/golf-course-group.jpeg",
          "alt": "Dr. Estin standing with another man at an outdoor golf event, with spectators behind them."
        }
      ]
    },
    {
      "id": "miscellaneous-sports",
      "heading": "Additional sporting events",
      "photos": [
        {
          "src": "/media/tournaments/tournament-01.jpeg",
          "alt": "Two Doctors On Call team members holding a sign at an outdoor athletic event."
        },
        {
          "src": "/media/tournaments/tournament-02.jpeg",
          "alt": "Two women wearing leis hold a Doctors On Call sign at the XTERRA World Championship finish line."
        },
        {
          "src": "/media/tournaments/tournament-07.jpeg",
          "alt": "Participants, event tents, picnic tables, and colorful surfboards on the beach."
        },
        {
          "src": "/media/tournaments/tournament-23.jpeg",
          "alt": "USA and Germany tennis team members wearing leis and posing with performers beside a Fed Cup sign overlooking the ocean."
        },
        {
          "src": "/media/tournaments/tournament-26.jpeg",
          "alt": "Tennis players and a camera crew on a Fed Cup court with an American flag and spectators in the stands."
        },
        {
          "src": "/media/tournaments/tournament-32.jpeg",
          "alt": "A man in a red polo holding a Doctors On Call sign on the beach in front of athletes wearing swimming caps."
        }
      ]
    }
  ]
}

export const community = {
  heading: 'Moving Forward with the Community',
  body: 'The mayor of Maui, the Honorable Richard Bissen...',
  photos: [
    { src: '/media/mayor-bissen-certificate.jpeg', alt: 'Dr. Norm Estin wearing leis and standing with Mayor Richard Bissen as they hold a framed certificate.' },
    { src: '/media/mayor-recognition-certificate.png', presentation: 'certificate', alt: 'Certificate of Recognition presented to Dr. Norman Estin by Mayor Richard T. Bissen, Jr., on June 13, 2026, honoring more than four decades of medical care and community service in Maui and Hawaiʻi.' },
  ],
}
