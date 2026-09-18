// Single source of truth for site copy. Edit this file - the components read from it.
// Anything marked TODO is unverified or waiting on an asset.
//
// The welcome letter is Dr. Estin's own words. Where it disagrees with a directory
// listing or a news write-up, the letter wins.

export const site = {
  coastal: {
    eyebrow: 'Medicine with aloha',
    greeting: 'Aloha.',
    introduction: 'I’m Dr. Norm Estin.',
    storyAction: 'Get to know me',
    scholarshipAction: 'Support Maui Students and Education in Healthcare',
    storyHeading: 'A life in medicine. A home on Maui.',
    letterAction: 'Read my full welcome letter',
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
        'COVID-19 came first. I worked alongside private and state medical organizations to ' +
        'test, vaccinate, distribute vaccines, and care for those who became ill.',
    },
    {
  "type": "gallery",
  "id": "covid-photos",
  "label": "COVID-19 community response photographs",
  "photos": [
    {
      "src": "/media/covid/covid-01.jpeg",
      "alt": "Healthcare workers in protective gowns, masks, and face shields coordinating outdoors beside a supply table."
    },
    {
      "src": "/media/covid/covid-02.jpeg",
      "alt": "A healthcare worker wearing glasses, a surgical mask, a face shield, and a protective gown."
    },
    {
      "src": "/media/covid/covid-03.jpeg",
      "alt": "A hand holding a white coronavirus-shaped model labeled Doctors On Call."
    },
    {
      "src": "/media/covid/covid-04.jpeg",
      "alt": "A masked man in a red polo at an outdoor gathering of medical staff and uniformed personnel."
    },
    {
      "src": "/media/covid/covid-05.jpeg",
      "alt": "Gloved healthcare workers preparing testing supplies on a table."
    },
    {
      "src": "/media/covid/covid-06.jpeg",
      "alt": "Masked staff working at a Doctors On Call testing station."
    },
    {
      "src": "/media/covid/covid-07.jpeg",
      "alt": "A sign reading Urgent Care and COVID Testing Center."
    },
    {
      "src": "/media/covid/covid-08.jpeg",
      "alt": "Three diagnostic testing instruments arranged beside swabs, sample tubes, and a sharps container."
    },
    {
      "src": "/media/covid/covid-09.jpeg",
      "alt": "Two healthcare workers in masks, face shields, and protective clothing outside Doctors On Call."
    },
    {
      "src": "/media/covid/covid-10.jpeg",
      "alt": "Masked and gloved staff using laptops at an outdoor Doctors On Call station."
    },
    {
      "src": "/media/covid/covid-11.jpeg",
      "alt": "Three masked men, including a uniformed medical worker with a stethoscope, posing at an outdoor response site."
    },
    {
      "src": "/media/covid/covid-12.jpeg",
      "alt": "Four diagnostic testing instruments arranged on a clinic counter."
    },
    {
      "src": "/media/covid/covid-13.jpeg",
      "alt": "Two masked men, one wearing a military uniform and stethoscope, making shaka gestures."
    },
    {
      "src": "/media/covid/covid-14.jpeg",
      "alt": "A masked man in a navy polo beside a Doctors On Call van outside the urgent care clinic."
    },
    {
      "src": "/media/covid/covid-15.jpeg",
      "alt": "A masked man in a teal polo in front of the Doctors On Call clinic and branded van."
    },
    {
      "src": "/media/covid/covid-16.jpeg",
      "alt": "Laboratory instruments and supplies on a clinic countertop beside a sink."
    },
    {
      "src": "/media/covid/covid-17.jpeg",
      "alt": "An empty sandy beach beside palm trees and an oceanfront resort."
    },
    {
      "src": "/media/covid/covid-18.jpeg",
      "alt": "A quiet beach with calm ocean water, palm trees, and hotels beneath a cloudy blue sky."
    },
    {
      "src": "/media/covid/covid-19.jpeg",
      "alt": "Dr. Estin wearing a surgical mask and blue glove while making a shaka gesture outdoors."
    },
    {
      "src": "/media/covid/covid-20.jpeg",
      "alt": "Aerial view of beachfront hotels, golf courses, and sailboats along the Maui coastline."
    },
    {
      "src": "/media/covid/covid-21.jpeg",
      "alt": "An empty beach with palm-tree shadows and turquoise ocean water."
    },
    {
      "src": "/media/covid/covid-22.png",
      "alt": "A worker in protective clothing organizing paperwork in clear bins; paperwork details obscured for privacy."
    },
    {
      "src": "/media/covid/covid-23.jpeg",
      "alt": "A quiet waterfront street in Lahaina with storefronts and an oceanfront walkway."
    },
    {
      "src": "/media/covid/covid-24.jpeg",
      "alt": "Aerial view of a large field filled with tightly packed rows of parked cars."
    },
    {
      "src": "/media/covid/covid-25.jpeg",
      "alt": "A broad empty beach curving past oceanfront hotels, with sailboats offshore."
    },
    {
      "src": "/media/covid/covid-26.jpeg",
      "alt": "A humorous Passport Stamps in 2020 graphic featuring rooms at home, Facebook, and Zoom meetings."
    },
    {
      "src": "/media/covid/covid-27.png",
      "alt": "Gloved hands preparing testing supplies beside analyzers and timers; paperwork details obscured for privacy."
    },
    {
      "src": "/media/covid/covid-28.jpeg",
      "alt": "Blue-gloved hands typing on a tablet keyboard beside Doctors On Call paperwork and disinfectant."
    },
    {
      "src": "/media/covid/covid-29.jpeg",
      "alt": "A newspaper clipping titled Covid Positivity Rate Is Useful but Flawed, with highlighted passages."
    },
    {
      "src": "/media/covid/covid-30.jpeg",
      "alt": "Masked people and clinic staff outside the open entrance to Doctors On Call."
    },
    {
      "src": "/media/covid/covid-31.jpeg",
      "alt": "Five white testing instruments arranged on a counter with boxes of medical supplies."
    },
    {
      "src": "/media/covid/covid-32.jpeg",
      "alt": "A humorous cartoon of an imaginary at-home COVID and everything test."
    }
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
  "type": "gallery",
  "id": "wildfire-photos",
  "label": "Maui wildfire response photographs and images",
  "photos": [
    {
      "src": "/media/wildfires/wildfire-01.jpeg",
      "alt": "A man photographing a burned vehicle amid wildfire debris."
    },
    {
      "src": "/media/wildfires/wildfire-02.jpeg",
      "alt": "A news image of a man walking through wildfire destruction in Lahaina, with the original news caption."
    },
    {
      "src": "/media/wildfires/wildfire-03.jpeg",
      "alt": "A man in a red Doctors On Call shirt and a woman posing together with shaka gestures."
    },
    {
      "src": "/media/wildfires/wildfire-04.jpeg",
      "alt": "A map screenshot showing the Lahaina wildfire burn area in yellow and healthcare locations marked by category."
    },
    {
      "src": "/media/wildfires/wildfire-05.jpeg",
      "alt": "A UHERO report screenshot titled After the Maui wildfires: The road ahead."
    }
  ]
},
    {
      type: 'photo',
      src: '/media/clinic-portrait.jpg',
      alt: 'Dr. Norm Estin standing outside the Doctors On Call urgent care and testing center.',
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
  navLabel: 'Scholarship',
  heading: 'Support the Future of Healthcare on Maui',
  lede: 'Join Dr. Norm Estin in supporting the next generation of healthcare professionals on Maui.',
  paragraphs: [
    'The Dr. Norm Estin Healthcare Scholarship Fund is a unique, physician-sponsored scholarship fund specifically directed toward developing and supporting Lahainaluna High School students pursuing education and careers in healthcare professions.',
    'Your contribution helps local students achieve their educational goals and prepare for a future in healthcare, strengthening the future of healthcare on Maui.',
  ],
  giveLabel: 'Participate Now',
  donationUrl: 'https://secure.etransfer.com/eft/flexblockcode/donation1.cfm?d2org=LHSF&d2tool=donate',
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
      "src": "/media/lahainaluna/team-13.jpeg",
      "alt": "Lahainaluna football players in red uniforms gathered around a large trophy."
    },
    {
      "src": "/media/lahainaluna/team-14.jpeg",
      "alt": "Two men in red shirts smiling in stadium seating overlooking a football field and running track."
    },
    {
      "src": "/media/lahainaluna/team-15.jpeg",
      "alt": "A referee watching football players in red and white uniforms line up for a play, with spectators in the stands."
    },
    {
      "src": "/media/lahainaluna/team-16.jpeg",
      "alt": "People gathered on the Lahainaluna football field around floral tributes and a portrait, with the ocean and mountains behind them."
    },
    {
      "src": "/media/lahainaluna/team-17.jpeg",
      "alt": "Lahainaluna football players in red uniforms lining up against an opposing team during a nighttime game."
    },
    {
      "src": "/media/lahainaluna/team-18.jpeg",
      "alt": "Lahainaluna players standing together on the sideline at dusk, with helmets lined up beside a photographer."
    },
    {
      "src": "/media/lahainaluna/team-19.jpeg",
      "alt": "Four supporters and sports medicine staff posing beside a football field in front of crowded stadium stands."
    },
    {
      "src": "/media/lahainaluna/team-20.jpeg",
      "alt": "A man in a red cap and polo making a shaka gesture beside a Sue\u2019s Boys sign at a nighttime football game."
    },
    {
      "src": "/media/lahainaluna/team-21.jpeg",
      "alt": "Spectators overlooking the Lahainaluna football field and illuminated scoreboard at night."
    }
  ]
}

export const tournament = {
  "heading": "Tournament Medical Director",
  "body": "Dr. Estin and the Doctors On Call team have been team physicians, medical directors, and medical advisors for numerous golf events at Kapalua and national-level basketball tournaments, such as the Maui Invitational. We have also been the medical provider for numerous local athletic events, such as surfing.",
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
      "src": "/media/tournaments/tournament-03.jpeg",
      "alt": "Dr. Estin holding a Doctors On Call sign beneath the XTERRA World Championship arch."
    },
    {
      "src": "/media/tournaments/tournament-04.jpeg",
      "alt": "Dr. Estin and a colleague holding a Doctors On Call sign courtside at the Maui Invitational."
    },
    {
      "src": "/media/tournaments/tournament-05.jpeg",
      "alt": "Dr. Estin holding a Doctors On Call sign at a Kapalua golf course overlooking the ocean."
    },
    {
      "src": "/media/tournaments/tournament-06.jpeg",
      "alt": "Dr. Estin and a colleague making shaka gestures at a beach surfing event."
    },
    {
      "src": "/media/tournaments/tournament-07.jpeg",
      "alt": "Participants, event tents, picnic tables, and colorful surfboards on the beach."
    },
    {
      "src": "/media/tournaments/tournament-08.jpeg",
      "alt": "Five Doctors On Call team members in red shirts holding a sign beside a basketball court."
    },
    {
      "src": "/media/tournaments/tournament-09.jpeg",
      "alt": "The Doctors On Call medical team with their sign at a basketball tournament."
    },
    {
      "src": "/media/tournaments/tournament-10.jpeg",
      "alt": "A man holding a Doctors On Call sign on a golf course with spectators and the ocean in the background."
    },
    {
      "src": "/media/tournaments/tournament-11.jpeg",
      "alt": "A group posing with a Doctors On Call sign at an outdoor golf event."
    },
    {
      "src": "/media/tournaments/tournament-12.jpeg",
      "alt": "Two medical team members in red shirts holding a Doctors On Call sign at the 2012 Maui Invitational."
    },
    {
      "src": "/media/tournaments/tournament-13.jpeg",
      "alt": "Two Doctors On Call team members with their sign courtside at the 2016 Maui Invitational."
    },
    {
      "src": "/media/tournaments/tournament-14.jpeg",
      "alt": "A medical team member between two Doctors On Call golf carts at a golf event, with spectators and the ocean behind him."
    },
    {
      "src": "/media/tournaments/tournament-15.jpeg",
      "alt": "A man beside a decorated Doctors On Call golf cart near the beach."
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
      "src": "/media/tournaments/tournament-18.jpeg",
      "alt": "Five Doctors On Call team members in red shirts seated together in a room at a sporting event."
    },
    {
      "src": "/media/tournaments/tournament-19.jpeg",
      "alt": "Two medical team members in red shirts seated courtside at a basketball tournament."
    },
    {
      "src": "/media/tournaments/tournament-20.jpeg",
      "alt": "Two Doctors On Call team members smiling beneath a scoreboard at the Maui Invitational."
    },
    {
      "src": "/media/tournaments/tournament-21.jpeg",
      "alt": "A man holding a Doctors On Call sign in the stands overlooking a tennis court."
    },
    {
      "src": "/media/tournaments/tournament-22.jpeg",
      "alt": "A group posing on a golf course around a golfer holding a trophy and wearing a lei."
    },
    {
      "src": "/media/tournaments/tournament-23.jpeg",
      "alt": "USA and Germany tennis team members wearing leis and posing with performers beside a Fed Cup sign overlooking the ocean."
    },
    {
      "src": "/media/tournaments/tournament-24.jpeg",
      "alt": "A man in a red polo and a USA Fed Cup team member wearing a lei making shaka gestures by the ocean."
    },
    {
      "src": "/media/tournaments/tournament-25.jpeg",
      "alt": "A hand holding a 2017 USA versus Germany Fed Cup event badge with a portrait and USTA Events label."
    },
    {
      "src": "/media/tournaments/tournament-26.jpeg",
      "alt": "Tennis players and a camera crew on a Fed Cup court with an American flag and spectators in the stands."
    },
    {
      "src": "/media/tournaments/tournament-27.jpeg",
      "alt": "A hand holding a 2017 Doctors On Call medical credential with a portrait of Dr. Estin."
    },
    {
      "src": "/media/tournaments/tournament-28.jpeg",
      "alt": "A Maui Jim event tent with a Doctors On Call sign on the beach beside a paddleboard and participants."
    },
    {
      "src": "/media/tournaments/tournament-29.jpeg",
      "alt": "People and event supplies beneath beachside tents, with a cooler bearing a Doctors On Call sign."
    },
    {
      "src": "/media/tournaments/tournament-30.jpeg",
      "alt": "A group standing in shallow ocean water with colorful surfboards during a beach event."
    },
    {
      "src": "/media/tournaments/tournament-31.jpeg",
      "alt": "A person seated facing the ocean in a red Doctors On Call chair on the beach."
    },
    {
      "src": "/media/tournaments/tournament-32.jpeg",
      "alt": "A man in a red polo holding a Doctors On Call sign on the beach in front of athletes wearing swimming caps."
    },
    {
      "src": "/media/tournaments/tournament-33.jpeg",
      "alt": "A man holding a Doctors On Call sign at the water\u2019s edge while athletes gather along the beach."
    }
  ]
}
