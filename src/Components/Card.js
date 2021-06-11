import React from "react";
import { Link } from "react-router-dom";

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            personagem: {}
        }
    }

    render(){
        const { isLoaded, personagem } = this.state;

        if (!isLoaded) {
            return (
                <div className='card-list__card'>
                    Carregando...
                </div>
            );
        } else {
            const imageId = personagem.id
            const imageSrc = `https://rickandmortyapi.com/api/character/avatar/${imageId}.jpeg`;

            return (
                <Link to={`/sobre/${personagem.id}`}>
                    <div className='card-list__card'>
                        <div>
                            <img className='card-list__card__img' src={imageSrc} alt={personagem.name}/>
                        </div>
                        <div className='card-list__card__info'>
                            <p><strong>{personagem.name}</strong></p>
                            <p><span>Status: {personagem.status}</span></p>
                            <p><span>Especie: {personagem.species}</span></p>
                        </div>
                    </div>
                </Link> 
            );
        }
    }

    componentDidMount() {
        fetch(this.props.personagem.url)
        .then(resultado => resultado.json())
        .then(resultadoJson => {
            this.setState({
                isLoaded: true,
                personagem: resultadoJson
            });
        })
    }
}

export default Card;