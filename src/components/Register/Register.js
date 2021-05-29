import React, { useState } from 'react';
import { Card, Row, Col, Input, Button } from 'react-materialize';
import * as services from '../../services/deliveryServices';

export default function Register() {
  return (
    <Card>
      <h5>Crie sua conta de cliente</h5>
      <br />
      <form method="post" onSubmit={(e) => e.preventDefault}>
        <Row>
          <Col s={6}>
            <Input
              label="Nome do Cliente"
              placeholder="Ex: João da Silva"
              type="text"
              s={12}
            />
          </Col>
          <Col s={3}>
            <Input
              label="Email do Cliente"
              placeholder="Ex: joaodasilva@gmail.com"
              type="text"
              s={12}
            />
          </Col>
          <Col s={3}>
            <Input
              label="Telefone do Cliente"
              placeholder="Ex: (21) 99999-9999"
              type="text"
              s={12}
            />
          </Col>
        </Row>
        <Row>
          <Col s={6}>
            <Input
              label="Informe sua senha de acesso"
              placeholder="Digite aqui"
              type="password"
              s={12}
            />
          </Col>
        </Row>
        <Row>
          <Col s={6}>
            <Input
              label="Confirme sua senha de acesso"
              placeholder="Digite aqui"
              type="password"
              s={12}
            />
          </Col>
        </Row>
        <Row>
          <Col s={12}>
            <Button type="submit" className="deep-orange">
              Realizar Cadastro
            </Button>
          </Col>
        </Row>
      </form>
    </Card>
  );
}
