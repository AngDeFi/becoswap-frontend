import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  {
    pid: 1,
    lpSymbol: 'POLEX-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xA0C577f5b4861132727A235e8bD93208Cc1229Df',
    },
    token: tokens.beco,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    token: tokens.busd,
    quoteToken: tokens.wbnb,
  },
 
]

export default farms
