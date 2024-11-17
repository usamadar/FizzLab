import { MaterialInfo } from '@/src/types/material';

export const materialsData: Record<string, MaterialInfo> = {
  epsom_salt: {
    id: 'epsom_salt',
    name: 'Epsom Salt',
    description: 'A naturally occurring mineral salt made of magnesium and sulfate. It forms clear, crystalline structures and is commonly used in both scientific experiments and therapeutic applications.',
    commonUses: [
      'Crystal growing experiments',
      'Bath soaks for muscle relief',
      'Garden fertilizer',
      'Therapeutic foot soaks'
    ],
    alternatives: ['Table salt (but results will differ)', 'Sea salt'],
    imageUrl: 'https://example.com/epsom-salt.jpg',
    category: 'chemical',
    whereToFind: 'Available in pharmacies, grocery stores in the health/beauty section',
    tips: [
      'Store in an airtight container to prevent clumping',
      'Use pure epsom salt without added fragrances for experiments',
      'Can be reused for multiple crystal growing attempts'
    ]
  },

  iron_oxide_powder: {
    id: 'iron_oxide_powder',
    name: 'Iron Oxide Powder',
    description: 'A fine magnetic powder that gives magnetic slime its unique properties. It\'s the same compound that makes rust, but in a purified powder form.',
    commonUses: [
      'Making magnetic slime',
      'Pigments in paints',
      'Scientific demonstrations',
      'Industrial applications'
    ],
    alternatives: ['Magnetic sand', 'Iron filings (but must be very fine)'],
    imageUrl: 'https://example.com/iron-oxide.jpg',
    category: 'chemical',
    whereToFind: 'Art supply stores, online retailers, or science supply stores',
    tips: [
      'Wear gloves when handling',
      'Can stain clothing and surfaces',
      'Store in a sealed container away from moisture'
    ]
  },

  borax: {
    id: 'borax',
    name: 'Borax',
    description: 'A naturally occurring mineral and salt of boric acid. It\'s a key ingredient in making slime and various cleaning products.',
    commonUses: [
      'Making slime',
      'Household cleaning',
      'Water softening',
      'Pest control'
    ],
    alternatives: ['Contact lens solution containing boric acid', 'Liquid starch'],
    imageUrl: 'https://example.com/borax.jpg',
    category: 'chemical',
    whereToFind: 'Laundry aisle of grocery stores, often labeled as "20 Mule Team Borax"',
    tips: [
      'A little goes a long way in slime recipes',
      'Store in a dry place',
      'Different from boric acid - make sure to get borax specifically'
    ]
  },

  alka_seltzer: {
    id: 'alka_seltzer',
    name: 'Alka-Seltzer',
    description: 'An effervescent tablet containing aspirin, sodium bicarbonate (baking soda), and citric acid. When added to water, it creates a chemical reaction producing carbon dioxide bubbles.',
    commonUses: [
      'Science experiments',
      'Antacid medication',
      'Pain relief',
      'Cleaning solution when dissolved'
    ],
    alternatives: ['Baking soda and citric acid mixture', 'Effervescent vitamin tablets'],
    imageUrl: 'https://example.com/alka-seltzer.jpg',
    category: 'chemical',
    whereToFind: 'Pharmacy section of grocery stores or drugstores',
    tips: [
      'Store in a dry place',
      'Can be broken into smaller pieces for experiments',
      'Generic brands work just as well for experiments'
    ]
  },

  rubbing_alcohol: {
    id: 'rubbing_alcohol',
    name: 'Rubbing Alcohol',
    description: 'A solution of isopropyl alcohol and water, typically 70% or 91% alcohol. Used in the DNA extraction experiment for its ability to precipitate DNA.',
    commonUses: [
      'DNA extraction',
      'Cleaning and disinfecting',
      'Removing sticky residues',
      'Scientific experiments'
    ],
    alternatives: ['91% isopropyl alcohol (preferred for DNA extraction)', '70% isopropyl alcohol'],
    imageUrl: 'https://example.com/rubbing-alcohol.jpg',
    category: 'chemical',
    whereToFind: 'Pharmacy section of grocery stores or drugstores',
    tips: [
      'Higher percentage works better for DNA extraction',
      'Keep away from heat sources',
      'Store in a cool, dark place'
    ]
  },

  strong_neodymium_magnet: {
    id: 'strong_neodymium_magnet',
    name: 'Strong Neodymium Magnet',
    description: 'A powerful rare-earth magnet used in various scientific experiments and industrial applications.',
    commonUses: [
      'Magnetic slime experiments',
      'Industrial machinery',
      'Magnetic therapy',
      'Scientific demonstrations'
    ],
    alternatives: ['Regular magnets (less effective)'],
    imageUrl: 'https://example.com/neodymium-magnet.jpg',
    category: 'equipment',
    whereToFind: 'Online retailers, hardware stores, or science supply stores',
    tips: [
      'Handle with care to avoid pinching fingers',
      'Keep away from electronics and credit cards',
      'Store in a safe place away from children'
    ]
  }
};

export default materialsData;