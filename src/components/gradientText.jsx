export default function GradientText({context, gradientContext, style}){
    return(
        <h1 className={style}>{context}<span className="bg-gradient-to-r from-primary-clr to-secondary-clr bg-clip-text text-transparent">{gradientContext}</span></h1>
    )
}