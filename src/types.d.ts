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

export interface ReleaseArticle {
    src: string
    href: string
    description: string
    date: Date
}

type Date = `${string} | ${number}`


export interface InfoArticle {
    icon: JSX.Element
    title: string
    description: string
    href: string

}


export interface Post {
    src: string
    href: string
    title: string
    date: `${number}/${number}/${number}`
}