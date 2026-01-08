
import { Game, Category } from './types';

export const GAMES: Game[] = [
  {
    id: 'genshin-impact',
    title: 'Genshin Impact',
    category: 'RPG',
    platforms: ['Android', 'iOS'],
    rating: 4.8,
    description: 'Explore um vasto mundo aberto de fantasia em Teyvat neste RPG de ação épico.',
    fullDescription: 'Genshin Impact é um RPG de ação de mundo aberto gratuito desenvolvido e publicado pela miHoYo. O jogo apresenta um ambiente de mundo aberto fantástico e um sistema de batalha baseado em ação usando magia elemental e troca de personagens. O jogo é apenas online e apresenta um modo multijogador limitado, permitindo que até quatro jogadores joguem juntos.',
    imageUrl: 'https://picsum.photos/seed/genshin/600/800',
    bannerUrl: 'https://picsum.photos/seed/genshinbanner/1200/600',
    popular: true,
    featured: true
  },
  {
    id: 'league-of-legends-wild-rift',
    title: 'Wild Rift',
    category: 'MOBA',
    platforms: ['Android', 'iOS'],
    rating: 4.7,
    description: 'A experiência 5v5 estratégica de League of Legends, reconstruída do zero para mobile.',
    fullDescription: 'League of Legends: Wild Rift traz a estratégia e a ação competitiva do LoL original para dispositivos móveis e consoles. Com controles renovados e partidas mais rápidas, jogadores de todos os níveis podem se unir a amigos, escolher seus campeões e realizar grandes jogadas.',
    imageUrl: 'https://picsum.photos/seed/wildrift/600/800',
    bannerUrl: 'https://picsum.photos/seed/wildriftbanner/1200/600',
    popular: true,
    featured: true
  },
  {
    id: 'pubg-mobile',
    title: 'PUBG Mobile',
    category: 'Battle Royale',
    platforms: ['Android', 'iOS'],
    rating: 4.5,
    description: 'O Battle Royale original. Sobreviva a batalhas épicas de 100 jogadores em mapas detalhados.',
    fullDescription: 'PUBG MOBILE oferece a ação multiplayer gratuita mais intensa no celular. Entre, prepare-se e compita. Sobreviva a batalhas épicas de 100 jogadores e partidas rápidas de deathmatch em equipe 4v4 e modos zumbi. A sobrevivência é fundamental e o último sobrevivente vence.',
    imageUrl: 'https://picsum.photos/seed/pubg/600/800',
    bannerUrl: 'https://picsum.photos/seed/pubgbanner/1200/600',
    popular: true,
    featured: false
  },
  {
    id: 'brawl-stars',
    title: 'Brawl Stars',
    category: 'Ação',
    platforms: ['Android', 'iOS'],
    rating: 4.6,
    description: 'Batalhas multiplayer rápidas 3v3 e battle royale frenético dos criadores de Clash of Clans.',
    fullDescription: 'Desbloqueie e melhore dezenas de Brawlers com super-habilidades poderosas, poderes de estrela e gadgets! Colete visuais exclusivos para se destacar e ostentar. Lute em uma variedade de locais misteriosos dentro do universo Brawliverse!',
    imageUrl: 'https://picsum.photos/seed/brawl/600/800',
    bannerUrl: 'https://picsum.photos/seed/brawlbanner/1200/600',
    popular: true,
    featured: false
  },
  {
    id: 'cod-mobile',
    title: 'Call of Duty: Mobile',
    category: 'Ação',
    platforms: ['Android', 'iOS'],
    rating: 4.7,
    description: 'FPS icônico com mapas clássicos, modos multiplayer e um Battle Royale massivo.',
    fullDescription: 'Jogue mapas e modos icônicos a qualquer hora, em qualquer lugar. Team Deathmatch de 5v5? Sniper vs Sniper? Batalha de Battle Royale de 100 jogadores? O Call of Duty: Mobile tem de tudo. Gráficos HD de qualidade de console no seu telefone com controles personalizáveis.',
    imageUrl: 'https://picsum.photos/seed/codm/600/800',
    bannerUrl: 'https://picsum.photos/seed/codmbanner/1200/600',
    popular: true,
    featured: true
  },
  {
    id: 'clash-royale',
    title: 'Clash Royale',
    category: 'Estratégia',
    platforms: ['Android', 'iOS'],
    rating: 4.4,
    description: 'Duelos em tempo real combinando cartas, estratégia e defesa de torre.',
    fullDescription: 'Entre na arena! Dos criadores de Clash of Clans, vem um jogo multiplayer em tempo real estrelado pelos Royales, seus personagens favoritos do Clash e muito, muito mais. Colete e melhore dezenas de cartas com as tropas, feitiços e defesas que você conhece e adora.',
    imageUrl: 'https://picsum.photos/seed/clashr/600/800',
    bannerUrl: 'https://picsum.photos/seed/clashrbanner/1200/600',
    popular: false,
    featured: false
  },
  {
    id: 'free-fire',
    title: 'Free Fire',
    category: 'Battle Royale',
    platforms: ['Android', 'iOS'],
    rating: 4.3,
    description: 'Partidas rápidas de 10 minutos, 50 jogadores, um único sobrevivente. O fenômeno mobile.',
    fullDescription: 'Free Fire é o último jogo de tiro de sobrevivência disponível no celular. Cada jogo de 10 minutos coloca você em uma ilha remota onde você enfrenta 49 outros jogadores, todos buscando sobrevivência. Os jogadores escolhem livremente seu ponto de partida com seu paraquedas e pretendem permanecer na zona segura pelo maior tempo possível.',
    imageUrl: 'https://picsum.photos/seed/ff/600/800',
    bannerUrl: 'https://picsum.photos/seed/ffbanner/1200/600',
    popular: true,
    featured: false
  },
  {
    id: 'fifa-mobile',
    title: 'EA SPORTS FC Mobile',
    category: 'Esportes',
    platforms: ['Android', 'iOS'],
    rating: 4.2,
    description: 'Monte seu Ultimate Team com os maiores astros do futebol mundial.',
    fullDescription: 'Construa um Ultimate Team™ de lendas do futebol e coloque-as à prova. Colecione itens de jogador de talentos de classe mundial como Erling Haaland, Jude Bellingham, Virgil van Dijk e Son Heung-min. Jogue com o Real Madrid da LALIGA EA SPORTS, o Manchester City da Premier League e muito mais.',
    imageUrl: 'https://picsum.photos/seed/fcm/600/800',
    bannerUrl: 'https://picsum.photos/seed/fcmbanner/1200/600',
    popular: false,
    featured: false
  }
];

// Added Category type to fix the missing type error
export const CATEGORIES: Category[] = ['Ação', 'RPG', 'Estratégia', 'Battle Royale', 'MOBA', 'Esportes'];
