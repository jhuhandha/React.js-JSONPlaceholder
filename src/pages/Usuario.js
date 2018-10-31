import React, { Component } from 'react';
import axios from 'axios';

import Card from './../components/Card/Card'

class Usuario extends Component {

    url = "https://jsonplaceholder.typicode.com";

    constructor(){
        super();
        this.state = {
            usuarios : []
        }
    }

    componentDidMount(){
        axios.get(this.url+"/users").then((respuesta)=>{
            this.setState({
                usuarios: respuesta.data
            });
        }).catch(error=>{
            console.log(error);
        });
    }

    pintar_usuarios(){
        return this.state.usuarios.map((e, i) => 
            <div className="col-md-4">
                {/* <Card key={i} id={e.id} name = {e.name} /> */}
                <Card uno = {this.consulta_album.bind(this)} {...e} />
            </div>
        );
    }

    consulta_album(id){
        axios.get(this.url+"/albums?userId="+id).then((respuesta)=>{
            console.log(respuesta);
        }).catch(error=>{
            console.log(error);
        });
    }

    render(){
        return (
            <div>
                <h1 className="text-center">Usuarios</h1>
                <div className="row">
                    {this.pintar_usuarios()}
                </div>
            </div>
        );
    }
}

export default Usuario;