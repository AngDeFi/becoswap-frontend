import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    stakingToken: tokens.polex,
    earningToken: tokens.polex,
    contractAddress: {
       97: '',
       56: '0x9a9d8Ec7bF0DAb04DB5AdE3305bd784471f9b102',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 1,
    stakingToken: tokens.wbnb,
    earningToken: tokens.polex,
    contractAddress: {
       97: '',
       56: '0x9a9d8Ec7bF0DAb04DB5AdE3305bd784471f9b102',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '5',
    sortOrder: 1,
    isFinished: false,
  }
]

export default pools
