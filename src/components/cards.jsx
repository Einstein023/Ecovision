export default function Cards({ img, percent, head, style}){
    return(
        <div className="bg-secondary-clr/10 rounded-xl px-4 py-6 w-230 h-50">
             <div className="flex items-center justify-between gap-7">
                <div className={`flex items-center justify-center w-12 h-12 rounded-lg ${style}`}>
                    {img}
                </div>
                {percent}
             </div>
             <div className="flex flex-col justify-start">
                {head}
             </div>
        </div>
    )
}