import React, {Component, useState} from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';

const instance = axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/http://arc123.xyz/',
    timeout: 1000,
    headers: {
        'content-type': 'application/json',
        'Authorization': 'Token 5a83319c1aff0a6e284326b92bae9a03e5d63af2'
    }
});

function Home() {

    const [archivos, setArchivos] = useState(null);

    const subirArchivo = e => {
        setArchivos(e);
    }

    const insertarArchivo = async () => {
        const f = new FormData();

        f.append("nombre", archivos);

        console.log(Cookies.data)

        await instance.post("entrada/",
            {'nombre':"desde el frontend"}
        ).then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error.data)
        })


    }

    return (
        <div className="Home">
            <br/> <br/>
            <input type="file" name="files" onChange={(e) => setArchivos(e.target.files)}/>
            <br/> <br/>
            <button className="btn btn-primary" onClick={() => insertarArchivo()}>Insertar Archivo</button>


        </div>


    );
}

export default Home;