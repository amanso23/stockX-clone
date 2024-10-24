import type { InfoArticle } from "src/types"

interface Props {
    article: InfoArticle
}


const InfoCard: React.FC<Props> = ({article}) => {

    const {icon: Icon, title, href, description} = article

    return (
        <div className="grid grid-cols-[25px,1fr] max-w-[410px] bg-[#ededed] p-5 text-black gap-x-3 rounded-lg mb-8">
            <div className="flex items-start">
                <Icon className="text-black size-7" />
            </div>
            <div className="flex flex-col gap-y-2 justify-start text-sm">
                <h1 className="font-bold py-1">{title}</h1>
                <div>
                    <p>{description}</p>
                    <a href={href} className="underline">Learn more</a>
                </div>
            </div>
        </div>

    )
}

export default InfoCard