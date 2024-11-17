export interface MaterialInfo {
  id: string;
  name: string;
  description: string;
  commonUses: string[];
  alternatives?: string[];
  imageUrl?: string;
  category: 'chemical' | 'equipment' | 'household';
  whereToFind: string;
  tips?: string[];
}
