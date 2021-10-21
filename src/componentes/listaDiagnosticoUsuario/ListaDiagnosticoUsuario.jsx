import React from 'react';
import { useEffect, useState } from "react"


export default function ListaDiagnosticoUsuario() {

    const [DiagnosticoUsuarios, setDiagnosticoUsuarios] = useState([])

    useEffect(() => {
        fetch("/rest/DiagnosticoUsuario").then((resp) => {
            return resp.json()
        }).then((resp) => {
            setDiagnosticoUsuarios(resp)
        }).catch((error) => {
            console.error(error)
        })
    })

    return (
        <div>
            <table border = "1">
                <thead>
                    <caption>Teste DiagnosticoUsuarios</caption>
                    <tr>
                        <th>Codigo Diagnostico Usuario</th>
                        <th>Codigo Diagnostico</th>
                        <th>Codigo Usuario</th>
                        <th>Codigo data inicio</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {DiagnosticoUsuarios.map((e, i) => (
                        <tr key={i}>
                            <td>{e.cd_diagnostico_usuario}</td>
                            <td>{e.cd_diagnostico}</td>
                            <td>{e.cd_usuario}</td>  
                            <td>{e.dt_inicio}</td>  
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <td colSpan="5">DiagnosticoUsuarios da Api</td>
                </tfoot>
            </table>
        </div>
    )
}