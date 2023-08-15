import React from "react";


const GitProjetos = () => {

    const project = [
        {
            id: 1,
            name: 'Em Desenvolvimento',
            src: ''
        },
        {
            id: 2,
            name: 'Em Desenvolvimento',
            src: ''
        }
    ]

    return (
        <div className="flex flex-col">
            <h1 className="text-white scale-[2]">Em Desenvolvimento</h1>
            {project.map(({ id, name, src }) =>
                <div key={id} className="text-white">
                    <p>{name}</p>
                </div>
            )}
        </div>
    )
}

export default GitProjetos;