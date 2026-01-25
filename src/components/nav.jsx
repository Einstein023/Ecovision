function Nav({contents, links, extras}){
    return(
        <nav className="w-full bg-stone-950 px-5 py-4 flex justify-between items-center border-b border-stone-900">
            <div className="flex list-none items-center gap-10 justify-center">
            <h1 className="text-2xl flex items-center gap-2 text-primary-clr">
                <img width="30" height="30" src="https://img.icons8.com/glyph-neue/64/46db7c/leaf.png" alt="leaf"/>
                EcoVision
                </h1>
          <div className='flex items-center gap-5'>
          {links}
          </div>
          </div>
                <div className="flex items-center gap-6 text-green-50">
          <button className="ml-2 px-4 py-2 text-stone-950 font-semi-bold bg-gradient-to-r from-primary-clr to-secondary-clr rounded-3xl hover:cursor-pointer hover:shadow-lg hover:shadow-secondary-clr/50 transition-all">{contents}</button>
        {extras}
        </div>
        </nav>
    )
}
export default Nav