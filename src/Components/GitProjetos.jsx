import React from "react";


const GitProjetos = () => {

    const project = [
        {
            id: 1,
            name: 'projeto 1',
            src: ''
        },
        {
            id: 2,
            name: 'projeto 2',
            src: ''
        }
    ]

    return (
        <div className="flex flex-col">
            {project.map(({ id, name, src }) =>
                <div key={id}>
                    <p>{name}</p>
                </div>
            )}
        </div>
    )
}

export default GitProjetos;