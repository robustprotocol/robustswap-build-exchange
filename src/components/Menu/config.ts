import { MenuEntry } from '@robustswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://robustswap.ngrok.io',
  },
  {
    label: 'Exchange',
    icon: 'TradeIcon',
    href: '/exchange',
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://robustswap.ngrok.io/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://robustswap.ngrok.io/pools',
  },
  {
    label: 'Referrals',
    icon: 'ReferralIcon',
    href: 'https://robustswap.ngrok.io/referrals',
  },
  {
    label: "Divider",
    icon: "",
    href: "",
  },
  {
    label: 'Audit',
    icon: 'AuditIcon',
    href: "https://robustswap.ngrok.io/_audit"
  },
  {
    label: "Listings",
    icon: "ListingIcon",
    items: [
      {
        label: "BSCScan",
        href: "https://robustswap.ngrok.io/_bscscan",
      },
      {
        label: "DappRadar",
        href: "https://robustswap.ngrok.io/_dappradar",
      },
      {
        label: "Coingecko",
        href: "https://robustswap.ngrok.io/_coingecko",
      },
      {
        label: "CoinMarketCap",
        href: "https://robustswap.ngrok.io/_coinmarketcap",
      },
      {
        label: "LiveCoinWatch",
        href: "https://robustswap.ngrok.io/_livecoinwatch",
      },
      {
        label: "Vfat",
        href: "https://robustswap.ngrok.io/_vfat",
      }
    ]
  },
  {
    label: "Features",
    icon: "FeatureIcon",
    items: [
      {
        label: "Configurability",
        href: "https://robustswap.ngrok.io/_features",
      },
      {
        label: "Transaction Limit",
        href: "https://robustswap.ngrok.io/_features/_trlimit",
      },
      {
        label: "Transaction Tax",
        href: "https://robustswap.ngrok.io/_features/_trtax",
      },
      {
        label: "Liquidity Generation",
        href: "https://robustswap.ngrok.io/_features/_liqgen",
      },
      {
        label: "Reward Lockup",
        href: "https://robustswap.ngrok.io/_features/_rewlock",
      },
      {
        label: "Maximum Supply",
        href: "https://robustswap.ngrok.io/_features/_maxsup",
      },
      {
        label: "Automatic Burning",
        href: "https://robustswap.ngrok.io/_features/_autburn",
      },
      {
        label: "Buyback and Burn",
        href: "https://robustswap.ngrok.io/_features/_buyburn",
      },
    ]
  },
  {
    label: "Charts",
    icon: "ChartIcon",
    items: [
      {
        label: "Poocoin",
        href: "https://robustswap.ngrok.io/_charts",
      },
      {
        label: "DexTools",
        href: "https://robustswap.ngrok.io/_charts/_dextools",
      },
      {
        label: "DexGuru",
        href: "https://robustswap.ngrok.io/_charts/_guru",
      },
      {
        label: "Bogged",
        href: "https://robustswap.ngrok.io/_charts/_bogged",
      }
    ]
  },
  {
    label: "More",
    icon: "MoreIcon",
    items: [
      {
        label: "GitHub",
        href: "https://robustswap.ngrok.io/_github",
      },
      {
        label: "GitBook",
        href: "https://robustswap.ngrok.io/_gitbook",
      },
      {
        label: "Roadmap",
        href: "https://robustswap.ngrok.io/_roadmap",
      },
      {
        label: "Voting",
        href: "https://robustswap.ngrok.io/_voting",
      },
      {
        label: "Videos",
        href: "https://robustswap.ngrok.io/_videos",
      }
    ]
  }
]

export default config
