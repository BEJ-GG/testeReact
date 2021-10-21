import React from 'react';
import { useEffect, useState } from "react"


export default function ListaExercicio() {

    const [exercicios, setExercicios] = useState([])

    useEffect(() => {
        fetch("/rest/exercicios").then((resp) => {
            return resp.json()
        }).then((resp) => {
            setExercicios(resp)
        }).catch((error) => {
            console.error(error)
        })
    })

    return (
        <div>
            <table border = "1">
                <thead>
                    <caption>Teste Exercicios</caption>
                    <tr>
                        <th>Codigo</th>
                        <th>Nome</th>
                        <th>Exercicio</th>
                        <th>Icone</th>
                        <th>Nivel</th>
                        <th>Gosto Pessoal</th>
                    </tr>
                </thead>
                <tbody>
                    {exercicios.map((e, i) => (
                        <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{e.nm_exercicio}</td>
                            <td>{e.ds_exercicio}</td>
                            <td>{e.ic_exercicio}</td>
                            <td>{e.ds_nivel_ansiedade}</td>
                            <td>{e.ds_gosto_pessoal}</td>
                            
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <td colSpan="5">Exercicios da Api</td>
                </tfoot>
            </table>
        </div>
    )
}