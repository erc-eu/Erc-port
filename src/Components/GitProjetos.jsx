import React from "react";
import gtorneios from '../Assets/gtorneios.png'

const GitProjetos = () => {

    const project = [
        {
            id: 1,
            name: 'Gtorneios',
            src: gtorneios,
            description: 'Esse projeto é apenas um video de demonstração, a criação dele envolve REACT JS, SPRING BOOT e Docker por isso decidi aprenseta-lo em forma de video'
        },

    ]

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            {project.map(({ id, name, src, description }) => (
                <div key={id} className="relative text-white mt-4">
                    <p className="flex pt-9 text-4xl justify-center font-mono font-bold">{name}</p>
                    <a href="https://youtu.be/AUlFV1o5pKE" target="_blank"  rel="noreferrer">
                        <img className="h-36 mx-auto py-2 hover:scale-105 duration-500 cursor-pointer" src={src} />
                    </a>
                    <p className="line-clamp-5 p-2 max-w-2xl justify-center font-sans text-center font-bold">{description} Para ver a implementação do projeto <a className="text-cyan-300 cursor-pointer" target="_blank"  rel="noreferrer" href="https://github.com/erc-eu/gtorneios-react">clique aqui!</a></p>
                    <p></p>
                </div>
            ))}
        </div>

    )
}

export default GitProjetos;