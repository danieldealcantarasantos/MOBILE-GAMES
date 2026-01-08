
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
    imageUrl: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?q=80&w=600&h=800&fit=crop',
    bannerUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&h=600&fit=crop',
    popular: true,
    featured: true
  },
  {
    id: 'league-of-legends-wild-rift',
    title: 'Wild Rift',
    category: 'MOBA',
    platforms: ['Android', 'iOS'],
    rating: 4.7,
    description: 'A experiência 5v5 estratégica de League of Legends, reconstruída para mobile.',
    fullDescription: 'League of Legends: Wild Rift traz a estratégia e a ação competitiva do LoL original para dispositivos móveis. Com controles renovados e partidas mais rápidas, jogadores de todos os níveis podem se unir a amigos, escolher seus campeões e realizar grandes jogadas.',
    imageUrl: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=600&h=800&fit=crop',
    bannerUrl: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&h=600&fit=crop',
    popular: true,
    featured: true
  },
  {
    id: 'pubg-mobile',
    title: 'PUBG Mobile',
    category: 'Battle Royale',
    platforms: ['Android', 'iOS'],
    rating: 4.5,
    description: 'O Battle Royale original. Sobreviva a batalhas épicas de 100 jogadores.',
    fullDescription: 'PUBG MOBILE oferece a ação multiplayer gratuita mais intensa no celular. Entre, prepare-se e compita. Sobreviva a batalhas épicas de 100 jogadores e partidas rápidas de deathmatch em equipe 4v4. A sobrevivência é fundamental e o último sobrevivente vence.',
    imageUrl: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=600&h=800&fit=crop',
    bannerUrl: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=1200&h=600&fit=crop',
    popular: true,
    featured: false
  },
  {
    id: 'cod-mobile',
    title: 'Call of Duty: Mobile',
    category: 'Ação',
    platforms: ['Android', 'iOS'],
    rating: 4.7,
    description: 'FPS icônico com mapas clássicos e um Battle Royale massivo.',
    fullDescription: 'Jogue mapas e modos icônicos a qualquer hora, em qualquer lugar. Team Deathmatch de 5v5? Sniper vs Sniper? Batalha de Battle Royale de 100 jogadores? O Call of Duty: Mobile tem de tudo com gráficos de console no seu bolso.',
    imageUrl: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=600&h=800&fit=crop',
    bannerUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&h=600&fit=crop',
    popular: true,
    featured: true
  },
  {
    id: 'brawl-stars',
    title: 'Brawl Stars',
    category: 'Ação',
    platforms: ['Android', 'iOS'],
    rating: 4.6,
    description: 'Batalhas multiplayer rápidas 3v3 dos criadores de Clash of Clans.',
    fullDescription: 'Desbloqueie e melhore dezenas de Brawlers com super-habilidades poderosas! Lute em uma variedade de locais misteriosos dentro do universo Brawliverse. Rápido, frenético e viciante.',
    imageUrl: 'https://images.unsplash.com/photo-1580234811497-9bd7fd2f357d?q=80&w=600&h=800&fit=crop',
    bannerUrl: 'https://images.unsplash.com/photo-1605898835373-02f837f477de?q=80&w=1200&h=600&fit=crop',
    popular: true,
    featured: false
  },
  {
    id: 'free-fire',
    title: 'Free Fire',
    category: 'Battle Royale',
    platforms: ['Android', 'iOS'],
    rating: 4.3,
    description: 'Partidas rápidas de 10 minutos. O fenômeno mobile global.',
    fullDescription: 'Free Fire é o último jogo de tiro de sobrevivência disponível no celular. Cada jogo de 10 minutos coloca você em uma ilha remota onde você enfrenta 49 outros jogadores, todos buscando sobrevivência.',
    imageUrl: 'https://images.unsplash.com/photo-1614027164847-1b28ccc12172?q=80&w=600&h=800&fit=crop',
    bannerUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&h=600&fit=crop',
    popular: true,
    featured: false
  },
  {
    id: 'minecraft',
    title: 'Minecraft',
    category: 'RPG',
    platforms: ['Android', 'iOS'],
    rating: 4.8,
    description: 'Explore mundos infinitos e construa desde a mais simples casa até o mais grandioso castelo.',
    fullDescription: 'Minecraft é um jogo sobre colocar blocos e sair em aventuras. Explore mundos gerados aleatoriamente e construa coisas incríveis. Jogue no modo Criativo com recursos ilimitados ou mine fundo no mundo no modo Sobrevivência.',
    imageUrl: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=600&h=800&fit=crop',
    bannerUrl: 'https://images.unsplash.com/photo-1616110266205-f938c538a7c2?q=80&w=1200&h=600&fit=crop',
    popular: true,
    featured: false
  },
  {
    id: 'stardew-valley',
    title: 'Stardew Valley',
    category: 'RPG',
    platforms: ['Android', 'iOS'],
    rating: 4.9,
    description: 'O premiado RPG de vida no campo chega ao seu dispositivo móvel.',
    fullDescription: 'Mude-se para o campo e cultive uma nova vida neste RPG de fazenda premiado e sem fim! Com mais de 50 horas de conteúdo de jogo e novos recursos específicos para dispositivos móveis.',
    imageUrl: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=600&h=800&fit=crop',
    bannerUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&h=600&fit=crop',
    popular: false,
    featured: false
  },
  {
    id: 'clash-royale',
    title: 'Clash Royale',
    category: 'Estratégia',
    platforms: ['Android', 'iOS'],
    rating: 4.4,
    description: 'Duelos em tempo real combinando cartas e estratégia de defesa de torre.',
    fullDescription: 'Entre na arena! Dos criadores de Clash of Clans, vem um jogo multiplayer em tempo real estrelado pelos Royales. Colete e melhore dezenas de cartas com as tropas e feitiços que você conhece e adora.',
    imageUrl: 'https://images.unsplash.com/photo-1611996575749-79a3a250f948?q=80&w=600&h=800&fit=crop',
    bannerUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&h=600&fit=crop',
    popular: false,
    featured: false
  },
  {
    id: 'mobile-legends',
    title: 'Mobile Legends',
    category: 'MOBA',
    platforms: ['Android', 'iOS'],
    rating: 4.6,
    description: 'O MOBA 5v5 clássico. Escolha seus heróis favoritos e monte o time perfeito.',
    fullDescription: 'Junte-se aos seus amigos no Mobile Legends: Bang Bang, o novo confronto MOBA 5v5 contra jogadores reais! Escolha seus heróis favoritos e monte o time perfeito com seus companheiros de armas!',
    imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600&h=800&fit=crop',
    bannerUrl: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&h=600&fit=crop',
    popular: true,
    featured: false
  },
  {
    id: 'warzone-mobile',
    title: 'Warzone Mobile',
    category: 'Battle Royale',
    platforms: ['Android', 'iOS'],
    rating: 4.1,
    description: 'Call of Duty: Warzone agora no celular com combates massivos.',
    fullDescription: 'Call of Duty: Warzone Mobile redefine o Battle Royale mobile com o combate de tiro de Call of Duty: Warzone clássico. Entre no mapa épico de Verdansk e domine a competição.',
    imageUrl: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=600&h=800&fit=crop',
    bannerUrl: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=1200&h=600&fit=crop',
    popular: true,
    featured: false
  },
  {
    id: 'fc-mobile',
    title: 'EA SPORTS FC Mobile',
    category: 'Esportes',
    platforms: ['Android', 'iOS'],
    rating: 4.2,
    description: 'O jogo de futebol número 1 do mundo agora no seu bolso.',
    fullDescription: 'Construa um Ultimate Team™ de lendas do futebol e coloque-as à prova. Jogue com os maiores astros mundiais e viva a emoção do futebol real onde quer que esteja.',
    imageUrl: 'https://images.unsplash.com/photo-1431324155629-1a6eda1fed2d?q=80&w=600&h=800&fit=crop',
    bannerUrl: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1200&h=600&fit=crop',
    popular: false,
    featured: false
  }
];

export const CATEGORIES: Category[] = ['Ação', 'RPG', 'Estratégia', 'Battle Royale', 'MOBA', 'Esportes'];
