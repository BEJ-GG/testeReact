import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function FormProduto(props) {

    let id = null

    if (props.match.path.toLowerCase().includes('editar')) {
        id = props.match.params.id
    }

    const [novo, setNovo] = useState({
        cd_usuario: id,
        nm_usuario: "",
        sn_usuario: "",
        dt_nascimento: "",
        ds_gosto_pessoal: "",
        gr_genero: ""
    })


    const handleChange = (e) => {
        setNovo({ ...novo, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        fetch("/rest/usuario/" + id, {
            method: "PUT",
            headers: {
                Accept: 'application/json',
                "Content-Type": "application/json"
            },
            body: JSON.stringify(novo)
        
        }).then(() => {
            window.location = "/"
        })
    }
    useEffect(() => {
        if (id) {
            fetch("/rest/usuario/" + id).then(resp => {
                return (resp.json())
            }).then(data => {
                setNovo(data)
            })
        }
    }, [id])
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>FORM-USUARIOS</legend>
                    <div>
                        <input type="text" name="nm_usuario" placeholder="Nome" value={novo.nm_usuario} onChange={handleChange} />
                    </div>
                    <div>
                        <input type="password" name="sn_usuario" placeholder="Senha" value={novo.sn_usuario} onChange={handleChange} />
                    </div>
                    <div>
                        <input type="text" name="dt_nascimento" placeholder="Data de Nascimento" value={novo.dt_nascimento} onChange={handleChange} />
                    </div>
                    <div>
                        <input type="text" name="ds_gosto_pessoal" placeholder="Gosto Pessoal" value={novo.ds_gosto_pessoal} onChange={handleChange} />
                    </div>
                    <div>
                        <input type="text" name="gr_genero" placeholder="Genero" value={novo.gr_genero} onChange={handleChange} />
                    </div>
                    <div>
                        <button type="submit">ENVIAR</button>
                        <Link title="CANCELAR" to="/">CANCELAR</Link>
                    </div>
                </fieldset>
            </form>
        </div>)
}