import React, { useEffect, useState } from 'react';
import { Row, Card } from 'react-materialize';
import * as services from '../../services/deliveryServices';

export default function Profile() {
  const [state, setState] = useState({});

  useEffect(() => {
    services
      .getDadosRestaurante()
      .then((data) => {
        setState(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <Card>
      <Row>
        <img
          src={services.getApiUrl() + state.foto}
          className="responsive-img"
        />
      </Row>
      <Row>
        <strong>{state.nome}</strong>
      </Row>
      <Row>
        <small>{state.descricao}</small>
      </Row>
    </Card>
  );
}
