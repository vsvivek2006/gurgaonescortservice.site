export interface Category {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  icon: string;
}

export const categories: Category[] = [
  {
    slug: 'russian-call-girls',
    name: 'Russian Call Girls',
    shortDescription: 'Exotic European companions with elegance and charm.',
    description: 'Our Russian call girls represent the pinnacle of European elegance and exotic beauty. These companions are carefully selected for their sophistication, conversational fluency, and refined social grace, making them ideal for luxury events, fine dining, and private engagements.',
    icon: 'Crown',
  },
  {
    slug: 'vip-call-girls',
    name: 'VIP Call Girls',
    shortDescription: 'Elite companions for the most discerning clientele.',
    description: 'Our VIP call girls cater to clients who expect nothing but the absolute finest. These companions are handpicked for their exceptional beauty, intelligence, and ability to navigate high-society environments with poise and discretion.',
    icon: 'Star',
  },
  {
    slug: 'high-profile-girls',
    name: 'High Profile Girls',
    shortDescription: 'Sophisticated companions with impeccable social presence.',
    description: 'Our high-profile companions are educated, well-spoken, and socially adept. They are perfect for corporate events, luxury travel, and occasions where you need a companion who can engage in meaningful conversation and present herself with grace.',
    icon: 'Gem',
  },
  {
    slug: 'college-girls',
    name: 'College Girls',
    shortDescription: 'Young, vibrant companions full of energy and enthusiasm.',
    description: 'Our college girl companions bring youthful energy, fresh perspectives, and a vibrant spirit to every encounter. These well-educated companions are ideal for casual outings, city tours, and relaxed social engagements.',
    icon: 'GraduationCap',
  },
  {
    slug: 'independent-girls',
    name: 'Independent Girls',
    shortDescription: 'Self-assured companions who operate with complete autonomy.',
    description: 'Our independent companions manage their own schedules and engagements, ensuring a personalised and authentic experience. These companions value discretion and professionalism above all else.',
    icon: 'User',
  },
  {
    slug: 'air-hostess',
    name: 'Air Hostess Escorts',
    shortDescription: 'Groomed, elegant companions with a cosmopolitan flair.',
    description: 'Our air hostess companions are known for their impeccable grooming, polished manners, and cosmopolitan outlook. They are well-travelled, cultured, and comfortable in diverse social settings.',
    icon: 'Plane',
  },
  {
    slug: 'model-escorts',
    name: 'Model Escorts',
    shortDescription: 'Stunning companions with professional modelling backgrounds.',
    description: 'Our model escorts are companions with professional modelling experience. They possess striking features, confident presence, and an understanding of aesthetics that elevates any occasion.',
    icon: 'Camera',
  },
  {
    slug: 'celebrity-escorts',
    name: 'Celebrity Escorts',
    shortDescription: 'Exclusive companions from the entertainment industry.',
    description: 'Our celebrity escorts are companions associated with the entertainment and fashion industries. These engagements are arranged with the highest level of discretion and exclusivity.',
    icon: 'Award',
  },
  {
    slug: 'travel-companion',
    name: 'Travel Companion',
    shortDescription: 'Cultured companions for luxury travel and getaways.',
    description: 'Our travel companions are ideal for luxury getaways, business trips, and international travel. They are well-travelled, adaptable, and skilled at making any journey more enjoyable and memorable.',
    icon: 'Luggage',
  },
  {
    slug: 'premium-companion',
    name: 'Premium Companion',
    shortDescription: 'The finest all-round companions for any occasion.',
    description: 'Our premium companions represent the very best of what we offer. These companions are versatile, cultured, and capable of adapting to any social or private setting with effortless elegance.',
    icon: 'Sparkles',
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
