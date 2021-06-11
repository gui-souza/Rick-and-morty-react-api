import React from 'react';

class NextPage extends React.Component {
    
    render() {
        
        return (
            <div className='next-page'>
                <button className='next-page__input'
                onClick={this.props.proxPagina}>
                    Próxima Pagina
                </button>
            </div>
        );
    }
}

export default NextPage;