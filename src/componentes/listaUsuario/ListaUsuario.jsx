import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


export default function ListaUsuario() {

    const [usuario, setUsuario] = useState([])

    useEffect(() => {
        fetch("/rest/usuario").then((resp) => {
            return resp.json()
        }).then((resp) => {
            setUsuario(resp)
        }).catch((error) => {
            console.error(error)
        })
    }, [])

    const handleDelete = (id) => {

        fetch("/rest/usuario/" + id, {
            method: 'DELETE'
        }).then(() => {
            window.location = "/"
        }).catch((error) => {
            console.error(error)
        })
    }

    return (
        <div>
            <Link title="Inserir" to="/inserir" > Inserir Usuario</Link>
            <table border="1">
                <caption>LISTA USUARIO</caption>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NOME</th>
                        <th>EMAIL</th>
                        <th>SENHA</th>
                        <th>DATA DE NASCIMENTO</th>
                        <th>GOSTO PESSOAL</th>
                        <th>GENERO</th>
                    </tr>
                </thead>
                <tbody>
                    {usuario.map((p, i) => (
                        <tr key={i}>
                            <td>{p.cd_usuario}</td>
                            <td>{p.nm_usuario}</td>
                            <td>{p.ds_email}</td>
                            <td>{p.sn_usuario}</td>
                            <td>{p.dt_nascimento}</td>
                            <td>{p.ds_gosto_pessoal}</td>
                            <td>{p.gr_genero}</td>
                            <td>
                                <Link title="Editar" to={`/editar/${p.cd_usuario}`}>UPDATE  |</Link>
                                <Link title="Excluir" to="/" onClick={handleDelete.bind(this, p.cd_usuario)}>  EXCLUIR</Link>
                            </td>
                        </tr>))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="5">USUARIOS DA API</td>
                    </tr>

                </tfoot>
            </table>
        </div>)
}