export interface NavChild {
  name: string;
  url: string;
}

export interface NavItem {
  name: string;
  url: string;
  newTab?: boolean;
  children?: NavChild[];
}

export const navigation: NavItem[] = [
  {
    name: 'Works',
    url: '/',
    children: [
      { name: 'Memesis (2024)', url: '/projects/memesis/' },
      { name: 'Ribcage (for Eternal Friends) (2024)', url: '/projects/ribcage/' },
      { name: 'Heart (2024)', url: '/projects/heart/' },
      { name: 'Symphony (2024)', url: '/projects/symphony/' },
      { name: 'Me and My OC (2024)', url: '/projects/meandmyoc/' },
      { name: 'CNC Relief of AI Imagery (2024)', url: '/projects/cnc-relief/' },
      { name: 'Aspire (2024)', url: '/projects/aspire/' },
      { name: 'Cactus Cat Brewing Co. (2024)', url: '/projects/cactus-cat/' },
      { name: 'OH Lottery Climbing Bag (2024)', url: '/projects/oh-lottery-bag/' },
      { name: 'Sewn Functional Objects (ongoing)', url: '/projects/sewn-objects/' },
    ],
  },
  {
    name: 'Portfolio',
    url: '/portfolio/',
  },
  {
    name: 'Archive',
    url: '/archive/',
  },
  {
    name: 'About',
    url: '/about/',
  },
  {
    name: 'CV',
    url: 'https://docs.google.com/document/d/1Hz3NVwG38V32lhux7nOSHJu5RFVkuvYjTMAudxF0bck/edit?usp=sharing',
    newTab: true,
  },
];
