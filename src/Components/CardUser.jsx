import React from "react";

const CardUser = () => {
    return (
        <div className="flex-col w-72 h-96  bg-slate-700 m-16 rounded  shadow-2xl border-b-2 border-b-cyan-500 ">
            <div className="flex w-full h-44 justify-center items-center bg-slate-950 ">
                <img className="w-40 h-40 rounded-full bg-auto object-cover" src="https://psverso.com.br/wp-content/uploads/2022/09/Tengen-Uzui-Hashira-do-Som-demon-slayer-kimetsu-no-yaiba.webp" />
            </div>
            <div className="w-72 ">
                <h1 className="text-gray-200 p-3 pb-1 text-[32px] font-bold font-sans">
                    Eric de Araújo
                </h1>
                <p className="ml-3 text-gray-300 font-sans font-bold text-[14px]">Bem vindo ao meu portifólio</p>
            </div>
            <div className="flex w-64 border-t-2 border-t-teal-500 m-4 mt-6 justify-center">
                <a href="https://github.com/erc-eu" target="_blank"  rel="noreferrer"><img className="w-16 h-16 m-2 object-contain  hover:border-b-2  cursor-pointer" src="github.png" alt="git" /></a>
                <a href="https://www.linkedin.com/in/eric-ara%C3%BAjo-b08087218/" target="_blank"  rel="noreferrer"><img className="w-16 h-16 m-2 object-contain  hover:border-b-2  cursor-pointer" src="linkedin.png" alt="linkedin" /></a>
            </div>
        </div>
    )
}


export default CardUser;