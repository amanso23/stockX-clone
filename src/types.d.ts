export interface Article {
    src: string
    href: string
    title: string
    subtitle: string
    price: string
    badgeType: BadgeType
}

export type BadgeType = 
    | "Xpress Ship"
    | "Sponsored"
    | "Last Sale: --"

