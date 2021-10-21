import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function FormDiagnosticoUsuario(props) {

    let id = null

    if (props.match.path.toLowerCase().includes('editar')) {
        id = props.match.params.id
    }

    const [novo, setNovo] = useState({
        codigo: id,
        cd_diagnostico_user: "",
        cd_diagnostico: "",
        cd_Usuario: "",
        dt_inicio: ""
    })

    let metodo = ''
    metodo = id ? 'PUT' : 'POST'

    const handleChange = (e) => {
        setNovo({ ...novo, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        fetch("/rest/DiagnosticoUsuario/" + (id ? id : ""), {
            method: metodo,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(novo)
        }).then(() => {
            window.location = "/"
        })
    }
    useEffect(() => {
        if (id) {
            fetch("/rest/DiagnosticoUsuario/" + id).then(resp => {
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
                        <input type="text" name="cd_diagnostico_user" placeholder="Cd_diagnostico_user" value={novo.cd_diagnostico_user} onChange={handleChange} />
                    </div>
                    <div>
                        <input type="text" name="cd_diagnostico" placeholder="Cd_diagnostico" value={novo.cd_diagnostico} onChange={handleChange} />
                    </div>
                    <div>
                        <input type="text" name="cd_Usuario" placeholder="Cd_usuario" value={novo.cd_Usuario} onChange={handleChange} />
                    </div>
                    <div>
                        <input type="text" name="dt_inicio" placeholder="Dt_inicio" value={novo.dt_inicio} onChange={handleChange} />
                    </div>
                    <div>
                        <button title="ENVIAR" type="submit">ENVIAR</button>
                        <Link title="CANCELAR" to="/">CANCELAR</Link>
                    </div>
                </fieldset>
            </form>
        </div>)
}