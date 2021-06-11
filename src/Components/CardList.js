import React from 'react';
import Card from './Card'
import SearchBox from './SearchBox';
import NextPage from './NextPage';

class CardList extends React.Component {
    constructor(props) {
        super(props);
        this.pgAtual = 1;
        this.pagina = []
        this.nomePersonagem = ''
        this.state = {
            isLoaded: false,
            personagens: [],
        }
    }

    mostraPersonagens() {
        return this.state.personagens.map((personagem) => {
            return <Card personagem={personagem} key={personagem.id} />
        })
    }

    buscarPersonagens(evento) {
        this.nomePersonagem = evento.target.value.toLowerCase();
        if (evento.key === "Enter") {
            fetch(`https://rickandmortyapi.com/api/character/?name=${this.nomePersonagem}`)
            .then(resultado => resultado.json())
            .then(resultadoJson => {
                this.setState({
                    personagens: resultadoJson.results      
                })
            })
            this.pgAtual = 1
        } 
    }

    proximaPagina() {
        this.pgAtual = this.pgAtual + 1;
        this.pagina = this.state.personagens;
        fetch(`https://rickandmortyapi.com/api/character/?page=${this.pgAtual}&name=${this.nomePersonagem}`)
        .then(resultado => resultado.json())
        .then(resultadoJson => {
            this.setState({
                personagens: this.pagina.concat(resultadoJson.results)
            })
        })
        
    } 

    render () {
        const isLoaded = this.state.isLoaded

        if (!isLoaded) {
            return (
                <div className='card-list'>
                    Carregando...
                </div>
            )
        } else {
            return (
                <div>
                    <SearchBox placeholder='Buscar personagens...' funcaoBuscar={(evento) => this.buscarPersonagens(evento)} />
                    <div className='card-list'>
                        {this.mostraPersonagens()}
                    </div>
                    <NextPage placeholder='Próxima página...' proxPagina={() => this.proximaPagina()} />
                </div>
            );
        }
    }

    componentDidMount() {
        fetch('https://rickandmortyapi.com/api/character')
        .then(resultado => resultado.json())
        .then(resultadoJson => {
            this.setState({
                isLoaded: true,
                loadedPersonagens: resultadoJson.results,
                personagens: resultadoJson.results
            })
        })
    }
}



export default CardList;