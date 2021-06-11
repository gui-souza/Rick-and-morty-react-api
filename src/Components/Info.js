import React from "react";
import { Link } from "react-router-dom";

class Info extends React.Component {
    constructor(props) {
        super(props);
        this.id = parseInt(props.match.params.id)

        this.state = {
            personagem: { }
        }
    }

    render() {
        const personagem = this.state.personagem;
        return (
            <section className='info'>
                <div className='info-header'>
                    
                </div>
                <div className='info__body'>
                    <div className='info__body__block'>
                        <img className='info__body__block__img' src={personagem.image} alt={personagem.name} />
                    </div>
                    <div className='info__body__details'>
                        <p><strong>{personagem.name}</strong></p>
                        <p><span>Status: {personagem.status}</span></p>
                        <p><span>Especie: {personagem.species}</span></p>
                        <div className='info__body__button-footer'><Link to='/'>Voltar!</Link></div>  
                    </div>
                </div>
                <div className='info-footer'>
                </div>
            </section>
        );
    }

    componentDidMount() {
        fetch(`https://rickandmortyapi.com/api/character/${this.id}`)
        .then(resultado => resultado.json())
        .then(resultado => {
            this.setState({
                personagem: resultado
            })
        })
    }
}

export default Info