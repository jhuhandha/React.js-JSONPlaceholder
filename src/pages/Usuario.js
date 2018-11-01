import React, { Component } from 'react';
import axios from 'axios';

import Card from './../components/Card/Card'
import ModalAlbum from './../components/ModalAlbum/ModalAlbum';

class Usuario extends Component {

    url = "https://jsonplaceholder.typicode.com";

    constructor(){
        super();
        this.state = {
            usuarios : [],
            abrir_modal : false, 
            album : []
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
                <Card consulta_album = {this.consulta_album.bind(this)} {...e} />
            </div>
        );
    }

    consulta_album(id){
        axios.get(this.url+"/albums?userId="+id).then((respuesta)=>{
            this.setState({
                abrir_modal : true,
                album : respuesta.data
            });
        }).catch(error=>{
            console.log(error);
        });
    }

    render(){
        return (
            <div>
                <h1 className="text-center">Usuarios {this.state.abrir_modal.toString()}</h1>
                <div className="row">
                    {this.pintar_usuarios()}
                </div>
                <ModalAlbum abrir_modal = {this.state.abrir_modal} album = {this.state.album} />
            </div>
        );
    }
}

export default Usuario;