import React, {Component} from 'react';
import axios from 'axios';
import md5 from 'md5';
import Cookies from 'universal-cookie';
import '../css/Login.css';

const baseurl = "https://cors-anywhere.herokuapp.com/http://arc123.xyz/login";
const cookies = new Cookies();


class Login extends Component {

    state = {
        form: {
            username: '',
            password: ''
        }

    }


    headChange = async e => {
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
        console.log(this.state.form)

    }

    iniciarsesion = async () => {
        await axios.post(baseurl, {username: this.state.form.username, password: this.state.form.password})
            .then(response => {
                console.log(response)
                return response.data


            })
            .then(response => {
                if (response.length > 0) {
                    var respuesta = response[0];

                    console.log(respuesta)

                    cookies.set('data', respuesta.data, {path: "/"})
                    alert("bienvenido");

                    window.location.href = "./home";


                } else {
                    alert("el usuario o la contraseña no coincide")
                }
            })
            .catch(error => {
                console.log(error);
            })

    }


    render() {
        return (<div className="containerPrincial">

                <div className="containerSegundario">
                    <div className="form-group">


                        <label>Usuario </label>
                        <input
                            type="text"
                            className="form-control"
                            name="username"
                            onChange={this.headChange}
                        />
                        <br/>
                        <label>contraseña</label>
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            onChange={this.headChange}
                        />
                        <br/>
                        <button onClick={() => this.iniciarsesion()} className="btn btn-primary">iniciar sesion</button>

                    </div>
                </div>
            </div>


        );

    }
}

export default Login;