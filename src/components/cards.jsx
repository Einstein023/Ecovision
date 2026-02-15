export default function Cards({ img, percent, head, style, description}){
    return(
        <div className="bg-secondary-clr/5 border-1 border-secondary-clr/20 rounded-xl px-6 py-6 w-230 flex flex-col justify-start gap-4">
             <div className="flex items-center justify-between gap-7">
                <div className={`flex items-center justify-center w-10 h-10 rounded-lg ${style}`}>
                    {img}
                </div>
                {percent}
             </div>
             <div className="flex flex-col justify-start gap-2">
                <h1 className="opacity-70 font-heading text-lg">{description}</h1>
                {head}
             </div>
        </div>
    )
}