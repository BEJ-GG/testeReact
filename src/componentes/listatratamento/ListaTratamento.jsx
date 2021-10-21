import React from 'react';
import { useEffect, useState } from "react"


export default function ListaTratamento() {

    const [tratamentos, setTratamentos] = useState([])

    useEffect(() => {
        fetch("/rest/tratamento").then((resp) => {
            return resp.json()
        }).then((resp) => {
            setTratamentos(resp)
        }).catch((error) => {
            console.error(error)
        })
    })

    return (
        <div>
            <table border = "1">
                <thead>
                    <caption>Teste Tratamentos</caption>
                    <tr>
                        <th>Codigo Tratamento</th>
                        <th>Codigo Exercicio</th>
                        <th>Codigo Diagnostico do Usuario</th>
                        <th>Codigo do Diagnostico</th>
                        <th>Descrição Tratamento</th>
                    </tr>
                </thead>
                <tbody>
                    {tratamentos.map((e, i) => (
                        <tr key={i}>
                            <td>{e.cd_tratamento}</td>
                            <td>{e.cd_exercicio}</td>
                            <td>{e.cd_diagnostico_usuario}</td>
                            <td>{e.cd_diagnostico}</td>  
                            <td>{e.ds_tratamento}</td>  
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <td colSpan="5">Tratamentos da Api</td>
                </tfoot>
            </table>
        </div>
    )
}