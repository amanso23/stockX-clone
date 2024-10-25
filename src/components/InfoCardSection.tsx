import type { InfoArticle } from "src/types"
import InfoCard from "@components/InfoCard"
import Verified from "@icons/Verified.tsx"
import ShellHeart from "@icons/ShellHeart"
import Dollar from "@icons/Dollar"


const InfoCardSection = () => {

    const ARTICLES: InfoArticle[] = [
        {
            icon: Verified,
            title: "StockX Verified",
            description: "StockX Verified is our own designation and means that we inspect every item, every time.",
            href: "https://stockx.com/about/verification"
        },
        {
            icon: ShellHeart,
            title: "Our Promise",
            description: "We strive to earn and keep your trust. If we make a mistake, we'll make it right.",
            href: "https://stockx.com/about/how-it-works/"

        },
        {
            icon: Dollar,
            title: "Start Selling ASAP",
            description: "You can start selling on StockX in just a few clicks, no application process necessary.",
            href: "https://stockx.com/about/selling/"
        }
    ]

    return (
        <div className="flex flex-col flex-wrap md:flex-row items-center gap-x-5 gap-y-3 mb-8">
            {ARTICLES.map((article, index) => (
                <InfoCard  article={article} key={index} />
                
            ))}


        </div>
    )
}

export default InfoCardSection