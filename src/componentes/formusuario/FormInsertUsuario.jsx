import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function FormInsertUsuario() {

    const [novo, setNovo] = useState({
        nome: "",
        senha: "",
        email: "",
        nascimento: "",
        gosto: "",
        genero: ""
    })

    const handleChange = (e) => {
        setNovo({ ...novo, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch("/rest/usuario/", {
            method: "POST",
            headers: {
                Accept: 'application/json',
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nm_usuario: novo.nome,
                sn_usuario: novo.senha,
                ds_email: novo.email,
                dt_nascimento: novo.nascimento,
                ds_gosto_pessoal: novo.gosto,
                gr_genero: novo.genero
            })
        }).then(() => {
            window.location = "/"
        })
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>FORM-USUARIOS</legend>
                    <div>
                        <input type="text" name="nome" placeholder="Nome" value={novo.nome} onChange={handleChange} />
                    </div>
                    <div>
                        <input type="email" name="email" placeholder="Email" value={novo.email} onChange={handleChange} />
                    </div>
                    <div>
                        <input type="password" name="senha" placeholder="Senha" value={novo.senha} onChange={handleChange} />
                    </div>
                    <div>
                        <input type="text" name="nascimento" placeholder="Data de Nascimento" value={novo.nascimento} onChange={handleChange} />
                    </div>
                    <div>
                        <input type="text" name="gosto" placeholder="Gosto Pessoal" value={novo.gosto} onChange={handleChange} />
                    </div>
                    <div>
                        <input type="text" name="genero" placeholder="Genero" value={novo.genero} onChange={handleChange} />
                    </div>
                    <div>
                        <button type="submit">ENVIAR</button>
                        <Link title="CANCELAR" to="/">CANCELAR</Link>
                    </div>
                </fieldset>
            </form>
        </div>)
}