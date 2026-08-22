export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  text: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Rajesh K.',
    location: 'DLF Phase 3, Gurgaon',
    rating: 5,
    text: 'ALINA VIP provided an exceptional escort service experience from start to finish. The call girl was elegant, well-spoken, and perfectly suited to the occasion. The booking process was smooth and entirely discreet. I will definitely use their escort service again.',
  },
  {
    name: 'Vikram S.',
    location: 'Cyber City, Gurgaon',
    rating: 5,
    text: 'I have used several escort services in the NCR, but ALINA VIP stands apart. The level of professionalism, the quality of call girls, and the discretion they maintain is unmatched. Highly recommended for premium escort service in Gurgaon.',
  },
  {
    name: 'Arjun M.',
    location: 'Golf Course Road, Gurgaon',
    rating: 5,
    text: 'The call girl I booked was exactly as described on the profile — beautiful, intelligent, and sophisticated. She accompanied me to a business dinner and was the perfect conversationalist. Thank you, ALINA VIP, for a memorable evening.',
  },
  {
    name: 'Sanjay R.',
    location: 'MG Road, Gurgaon',
    rating: 5,
    text: 'What impressed me most about ALINA VIP was their attention to detail. From the initial phone call to the end of the evening, everything was handled with professionalism and class. The call girl was punctual, well-groomed, and delightful company.',
  },
  {
    name: 'Karan B.',
    location: 'Sohna Road, Gurgaon',
    rating: 5,
    text: 'I was initially hesitant about using an escort service, but ALINA VIP put all my concerns to rest. Their verification process and commitment to discretion made me feel completely comfortable. The call girl experience exceeded my expectations.',
  },
  {
    name: 'Aditya G.',
    location: 'Sushant Lok, Gurgaon',
    rating: 5,
    text: 'I booked a travel escort through ALINA VIP for a weekend getaway, and it was one of the best decisions I have made. The call girl was well-travelled, cultured, and made the trip truly memorable. Five stars without hesitation for their escort service.',
  },
  {
    name: 'Rohit M.',
    location: 'DLF Phase 2, Gurgaon',
    rating: 5,
    text: 'I have been using ALINA VIP for over a year now. Their Russian escorts are absolutely stunning and highly professional. The best escort service in Gurgaon without any doubt.',
  },
  {
    name: 'Amit S.',
    location: 'Golf Course Extension, Gurgaon',
    rating: 5,
    text: 'The VIP call girls at ALINA VIP are truly elite. I booked one for a corporate event and she was perfect — intelligent, beautiful, and well-spoken. Highly recommend their premium escort service.',
  },
];

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    slug: 'dinner-escort-service',
    title: 'Dinner Escort Service',
    shortDescription: 'Elegant call girls for fine dining experiences.',
    description: 'Our dinner escort service provides you with a sophisticated call girl for fine dining experiences. Whether it is a romantic dinner for two, a business dinner, or a celebration, our escorts are well-versed in dining etiquette and social grace.',
    icon: 'UtensilsCrossed',
  },
  {
    slug: 'event-escort-service',
    title: 'Event Escort Service',
    shortDescription: 'Refined call girls for social and corporate events.',
    description: 'Our event escort service is designed for clients who need a polished call girl for social gatherings, corporate events, and high-society functions. Our escorts are socially adept and present themselves with elegance.',
    icon: 'Calendar',
  },
  {
    slug: 'travel-escort-service',
    title: 'Travel Escort Service',
    shortDescription: 'Cultured call girls for luxury travel.',
    description: 'Our travel escort service offers you a cultured and adaptable call girl for domestic and international travel. Our escorts are well-travelled and skilled at making any journey more enjoyable and memorable.',
    icon: 'Plane',
  },
  {
    slug: 'party-escort-service',
    title: 'Party Escort Service',
    shortDescription: 'Vibrant call girls for exclusive parties.',
    description: 'Our party escort service provides you with a vibrant and engaging call girl for exclusive parties, nightclub visits, and social gatherings. Our escorts know how to have fun while maintaining elegance.',
    icon: 'PartyPopper',
  },
  {
    slug: 'business-escort-service',
    title: 'Business Escort Service',
    shortDescription: 'Professional call girls for corporate engagements.',
    description: 'Our business escort service is tailored for corporate clients who need a sophisticated call girl for business dinners, client meetings, and professional networking events. Our escorts are educated and professional.',
    icon: 'Briefcase',
  },
  {
    slug: 'private-escort-service',
    title: 'Private Escort Service',
    shortDescription: 'Discreet call girls for private engagements.',
    description: 'Our private escort service offers you a discreet and engaging call girl for private engagements. Whether it is a quiet evening at home or a private celebration, our escorts provide delightful company.',
    icon: 'Lock',
  },
  {
    slug: 'vip-escort-service',
    title: 'VIP Escort Service',
    shortDescription: 'Elite call girls for premium experiences.',
    description: 'Our VIP escort service provides you with the finest call girls for exclusive engagements. These elite escorts are handpicked for their exceptional beauty, intelligence, and sophistication.',
    icon: 'Crown',
  },
  {
    slug: 'russian-escort-service',
    title: 'Russian Escort Service',
    shortDescription: 'Exotic European call girls with elegance.',
    description: 'Our Russian escort service offers exotic European call girls known for their elegance, sophistication, and international flair. Ideal for high-profile events and luxury engagements.',
    icon: 'Sparkles',
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}