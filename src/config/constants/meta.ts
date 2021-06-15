import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'PoliEx Finance',
  description:
    'The most popular AMM on BSC by user count! Earn POLEX through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by PoliEx Finance), NFTs, and more, on a platform you can trust.',
  image: 'https://becoswap.com/images/hero.jpg',
}

export const customMeta: { [key: string]: PageMeta } = {
  '/': {
    title: 'Home | PoliEx Finance',
  },
  '/competition': {
    title: 'Trading Battle | PoliEx Finance',
  },
  '/prediction': {
    title: 'Prediction | PoliEx Finance',
  },
  '/farms': {
    title: 'Farms | PoliEx Finance',
  },
  '/pools': {
    title: 'Pools | PoliEx Finance',
  },
  '/lottery': {
    title: 'Lottery | PoliEx Finance',
  },
  '/collectibles': {
    title: 'Collectibles | PoliEx Finance',
  },
  '/ifo': {
    title: 'Initial Farm Offering | PoliEx Finance',
  },
  '/teams': {
    title: 'Leaderboard | PoliEx Finance',
  },
  '/profile/tasks': {
    title: 'Task Center | PoliEx Finance',
  },
  '/profile': {
    title: 'Your Profile | PoliEx Finance',
  },
}
