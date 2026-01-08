
export interface Game {
  id: string;
  title: string;
  category: 'Ação' | 'RPG' | 'Estratégia' | 'Battle Royale' | 'MOBA' | 'Esportes';
  platforms: ('Android' | 'iOS')[];
  rating: number;
  description: string;
  fullDescription: string;
  imageUrl: string;
  bannerUrl: string;
  popular: boolean;
  featured: boolean;
}

export type Category = Game['category'];
