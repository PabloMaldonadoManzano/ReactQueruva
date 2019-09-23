import React from 'react'
import Header from '../Header.js'
import Footer from '../footer.js'
import '../styles/login.css'


class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            url: 'https://amitiza-app.com/oauth/token',
            form: {
                email: '',
                password: '',
            },
            grant_type: 'password',
            client_id: '2',
            client_secret: 'hYWbHF84qbfrMBoTtIIGenr0t6EufN6s6xJ6oyyJ',
            scope: '*'
        }
    }
    
    handleChange = e =>{
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    handleClick = async (e) => {        
         
        var data = await  {
            username: this.state.form.email,
            password: this.state.form.password,
            grant_type: this.state.form.grant_type,
            client_id: this.state.form.client_id,
            client_secret: this.state.form.client_secret,
            scope: this.state.form.scope
        }

        fetch(this.state.url, {
            method: 'POST',
            body:  JSON.stringify(data),
            headers:{
                'Access-Control-Allow-Origin': 'https://amitiza-app.com',
                'Content-Type': 'multipart/form-data',
                'Accept': 'application/json',
                "X-Requested-With": "XMLHttpRequest",
            },
            withCredentials: false,
        }).then((response) => {
            console.log(response)
        })
                
    }
    
    render (){
        return(
            <div>
                <Header />
                <section className="login">
                    <div className="login__formulario">
                        <h2 className="login__formulario-title">Inicio de sesión</h2>
                        <input onChange={this.handleChange} className="login__formulario-input" name="email" type="text" placeholder="Email..." value={this.state.form.email}/>
                        <input onChange={this.handleChange} className="login__formulario-input" name="password" type="password" placeholder="Contraseña..." value={this.state.form.password}/>
                        <button className="login__formulario-submit" type="button" onClick={this.handleClick}>Iniciar sesión</button>
                    </div>
                </section>
                <Footer />
            </div>            
        )
    }
}

export default Login
