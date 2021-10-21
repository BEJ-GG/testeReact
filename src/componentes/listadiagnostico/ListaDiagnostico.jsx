import React from 'react';
import { useEffect, useState } from "react"


export default function ListaDiagnostico() {

    const [diagnostico, setDiagnosticos] = useState([])

    useEffect(() => {
        fetch("/rest/diagnostico").then((resp) => {
            return resp.json()
        }).then((resp) => {
            setDiagnosticos(resp)
        }).catch((error) => {
            console.error(error)
        })
    })

    return (
        <div>
            <table border = "1">
                <thead>
                    <caption>Teste Diagnosticos</caption>
                    <tr>
                        <th>Codigo</th>
                        <th>Diagnostico</th>
                    </tr>
                </thead>
                <tbody>
                    {diagnostico.map((e, i) => (
                        <tr key={i}>
                            <td>{e.cd_diagnostico}</td>
                            <td>{e.ds_diagnostico}</td>
                            
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <td colSpan="5">Diagnosticos da Api</td>
                </tfoot>
            </table>
        </div>
    )
}