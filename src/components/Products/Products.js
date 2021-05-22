import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-materialize';
import * as services from '../../services/deliveryServices';

export default function Products() {
  const [cardapio, setCardapio] = useState([]);

  useEffect(() => {
    services
      .getCardapio()
      .then((data) => {
        //armazenar o retorno da API no state..
        setCardapio(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <Card>
      {cardapio.map((item, i) => {
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
