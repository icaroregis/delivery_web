import React from 'react';
import { Card, Col, Row } from 'react-materialize';
import * as services from '../../services/deliveryServices';

class Products extends React.Component {
  //construtor..
  constructor(props) {
    super(props);

    //declarando o state do componente..
    this.state = {
      cardapio: [], //array vazio
    };
  }

  //método executado antes do componente ser renderizado
  componentDidMount() {
    //acessando o serviço da API..
    services
      .getCardapio()
      .then((data) => {
        //armazenar o retorno da API no state..
        this.setState({ cardapio: data });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    return (
      <Card>
        {this.state.cardapio.map(function (item, i) {
          return (
            <Row key={i}>
              <Col m={1}>
                <img
                  src={services.getApiUrl() + item.foto}
                  className="responsive-img"
                />
              </Col>
              <Col m={9}>
                <h6>
                  <strong>{item.nome}</strong>
                </h6>
                <p>{item.descricao}</p>
              </Col>
              <Col m={2}>
                <h5>{item.preco}</h5>
                <small>{item.categoria.nome}</small>
              </Col>
            </Row>
          );
        })}
      </Card>
    );
  }
}

export default Products;
