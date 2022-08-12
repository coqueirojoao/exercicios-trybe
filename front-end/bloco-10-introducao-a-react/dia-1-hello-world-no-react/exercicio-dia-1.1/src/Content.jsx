import React from "react";

class Content extends React.Component {
    render() {
        const conteudos = [
            {
              conteudo: 'High Order Functions',
              bloco: 8,
              status: 'Aprendido'
            },
            {
              conteudo: 'Composicao de Componentes',
              bloco: 11,
              status: 'Aprendendo',
            },
            {
              conteudo: 'Composicao de Estados',
              bloco: 12,
              status: 'Aprenderei'
            },
            {
              conteudo: 'Redux',
              bloco: 16,
              status: 'Aprenderei'
            },
          ];
          const subjectTheme = () => {
            return conteudos.map(({ conteudo, bloco, status }) => {
            return (
            <div className="listBox">
            <p className="listContent">O conteúdo é: { conteudo }</p>
            <p className="listContent">Status: { bloco }</p>
            <p className="listContent">Bloco: { status }</p>
            </div>
            )
            })
        }
          return(
            subjectTheme()
          );
    }
}

export default Content