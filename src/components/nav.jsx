function Nav({contents, links}){
    return(
        <nav className="w-full bg-stone-900 px-5 py-4 flex justify-between items-center">
            <h1 className="text-2xl flex items-center gap-2 text-primary-clr">
                <img width="30" height="30" src="https://img.icons8.com/glyph-neue/64/46db7c/leaf.png" alt="leaf"/>
                EcoVision
                </h1>
                <div className="flex items-center gap-6 list-none text-green-50">
          <div className='flex items-center gap-5'>
          {links}
          </div>
          <button className="ml-2 px-6 py-3 sm:px-4 sm:py-2 text-stone-950 font-semi-bold bg-gradient-to-r from-primary-clr to-secondary-clr rounded-3xl hover:cursor-pointer hover:shadow-lg hover:shadow-secondary-clr/50 transition-all">{contents}</button>
        </div>
        </nav>
    )
}
export default Nav