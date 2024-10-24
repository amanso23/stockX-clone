import type { InfoArticle } from "src/types"

interface Props {
    article: InfoArticle
}


const InfoCard: React.FC<Props> = ({article}) => {

    const {icon: Icon, title, href, description} = article

    return (
        <div className="grid grid-cols-[25px,1fr] w-full md:w-[410px] h-auto bg-[#ededed] py-4 px-3 text-black gap-x-3 rounded-lg  ">
            <div className="flex items-start ">
                <Icon className="text-black size-7" />
            </div>
            <div className="flex flex-col gap-y-1 justify-start text-xs">
                <h1 className="font-bold py-1">{title}</h1>
                <div className="mt-[-4px]">
                    <p>{description}</p>
                    <a href={href} className="underline">Learn more</a>
                </div>
            </div>
        </div>

    )
}

export default InfoCard