import React from 'react'

export default (props) =>{
            {
                if(props == null){
               return (<h1>Pesquise aqui</h1>) 
                }
                return (<h1>{props.params.id}</h1>)
            }
}