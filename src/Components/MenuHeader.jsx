import React from "react";


const MenuHeader = () => {
    return (
        <div className="flex  flex-col sm:flex-row w-[50%] h-auto sm:h-10 bg-fixed text-center items-center justify-center bg-cover">
                <ul className="flex flex-col sm:flex-row">
                    <li className="p-3 text-gray-200 font-bold hover:cursor-pointer">PERFIL</li>
                    <li className="p-3 text-gray-200 font-bold hover:cursor-pointer"> <a href="#gitProjet">GIT-PROJETOS</a></li>
                </ul>
        </div>

    )
}


export default MenuHeader;