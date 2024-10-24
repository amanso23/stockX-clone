import type { JSX } from "astro/jsx-runtime"

export interface Article {
    src: string
    href: string
    title: string
    subtitle: string
    price: string
    badgeType: BadgeType
}

export type LastSale = `Last Sale: ${string}`

export type BadgeType = 
    | "Xpress Ship"
    | "Sponsored"
    | LastSale

export interface SimpleArticle {
    src: string
    href: string
}

