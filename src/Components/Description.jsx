import React, { useState } from "react";
import c from '../Assets/c.png'
import css from '../Assets/css.png'

import htmlLogo from '../Assets/htmlLogo.png'
import java from '../Assets/java.png'
import javaScript from '../Assets/javaScript.png'

import react from '../Assets/react.png'
import spring from '../Assets/spring.png'
import tailwind from '../Assets/tailwind.png'


const techs = [
    {
        id: 1,
        src: htmlLogo,
        title: 'HTML',
        style: 'shadow-orange-500'
    },
    {
        id: 2,
        src: css,
        title: 'CSS',
        style: 'shadow-blue-500'
    }, {
        id: 3,
        src: react,
        title: 'React JS',
        style: 'shadow-cyan-500'
    }, {
        id: 4,
        src: tailwind,
        title: 'TailwindCss',
        style: 'shadow-gray-400'
    },
    {
        id: 5,
        src: javaScript,
        title: 'JavaScript',
        style: 'shadow-yellow-500'
    },
    {
        id: 6,
        src: java,
        title: 'Java',
        style: 'shadow-red-500'
    },
    {
        id: 7,
        src: c,
        title: 'C e C++',
        style: 'shadow-pink-500'
    },
    {
        id: 8,
        src: spring,
        title: 'SpringBoot',
        style: 'shadow-green-500'
    }

]


const Habilidades = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8 text-center py-8 px-4 sm:px-6 md:px-8 lg:px-12">
            {
                techs.map(({ id, src, title, style }) => (
                    <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style} hover:cursor-pointer bg-slate-950`}>
                        <img className="h-24 mx-auto py-2" src={src} alt={title} />
                        <p className="mt-4 text-white font-bold font-mono">{title}</p>
                    </div>
                ))
            }
        </div>
    )
}

const Formacao = () => {
    return (
        <div className="flex flex-col w-full h-96 overflow-auto text-gray-300 font-sans font-bold text-[16px] ">
            <p className="m-4">Meu nome é Eric de Araujo Albuquerque, atualmente estudante da Universidade Federal do Ceará em Cratéus (CE), cursando Ciências da Computação. Encontro-me no sexto período do curso, com pouco mais de dois anos restantes para a conclusão.</p>
            <p className="m-4 ">Minha jornada na área de tecnologia teve início durante o ensino médio,
                quando frequentei a Escola Estadual de Educação Profissional Deputado José Maria Melo. Lá,
                tive a oportunidade de explorar diversas disciplinas essenciais e linguagens de programação amplamente utilizadas.
                Entre os conhecimentos adquiridos, destaco o estudo de Programação Orientada a Objetos (POO), Sistemas Operacionais,
                Banco de Dados, Java, JavaScript, HTML e CSS.
            </p>
            <p className="m-4">
                Com a transição para a universidade, aprofundei meus conhecimentos em disciplinas que já havia explorado no ensino médio,
                como POO, Sistemas Operacionais e Banco de Dados. No entanto, também fui apresentado a novas áreas de estudo,
                como Desenvolvimento Web, Estrutura de Dados, Estrutura de Dados Avançadas, Programação Funcional e Redes de Computadores.
            </p>
            <p className="m-4">
                Ao longo desse percurso, tive a oportunidade de ampliar minha compreensão e habilidades na área de Ciências da Computação,
                consolidando conhecimentos prévios e adquirindo novos saberes. Com a base sólida que construí no ensino médio e o enriquecimento
                proporcionado pelas disciplinas da faculdade, sinto-me preparado para enfrentar os desafios futuros e contribuir
                de forma significativa no campo da tecnologia.
            </p>
        </div>
    )
}


const Description = () => {
    const [showHabilidades, setShowHabilidades] = useState(true);

    const handleHabilidadesClick = () => {
        setShowHabilidades(true);
    };

    const handleFormacaoClick = () => {
        setShowHabilidades(false);
    };

    return (
        <div className="w-[790px] bg-transparent m-16 shadow-2x1 ">
            <div className="bg-transparent">
                <ul className=" bg-slate-950 flex overflow-x-auto">
                    <li
                        className={`p-3 text-gray-200 font-bold flex-none hover:cursor-pointer hover:bg-slate-800 ${showHabilidades ? 'bg-slate-800' : ''
                            }`}
                        onClick={handleHabilidadesClick}
                    >
                        HABILIDADES
                    </li>
                    <li
                        className={`p-3 text-gray-200 font-bold flex-none hover:cursor-pointer hover:bg-slate-800 ${!showHabilidades ? 'bg-slate-800' : ''
                            }`}
                        onClick={handleFormacaoClick}
                    >
                        SOBRE MIM
                    </li>
                </ul>
                <div className="h-96">
                    {showHabilidades ? <Habilidades /> : <Formacao />}
                </div>
            </div>
        </div>
    );
}


export default Description;