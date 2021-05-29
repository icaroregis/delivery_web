import React, { useState } from 'react';
import { Card, Row, Col, Input, Button } from 'react-materialize';
import * as services from '../../services/deliveryServices';

export default function Register() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');
  const [senhaConfirm, setSenhaConfirm] = useState('');

  function handleSubmit() {
    services
      .postClient({
        nome,
        email,
        telefone,
        senha,
        senhaConfirm,
      })
      .then((e) => console.log(e))
      .catch((e) => console.log(e));
  }

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
              value={nome}
              onChange={({ target }) => setNome(target.value)}
            />
          </Col>
          <Col s={3}>
            <Input
              label="Email do Cliente"
              placeholder="Ex: joaodasilva@gmail.com"
              type="text"
              s={12}
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
          </Col>
          <Col s={3}>
            <Input
              label="Telefone do Cliente"
              placeholder="Ex: (21) 99999-9999"
              type="text"
              s={12}
              value={telefone}
              onChange={({ target }) => setTelefone(target.value)}
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
              value={senha}
              onChange={({ target }) => setSenha(target.value)}
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
              value={senhaConfirm}
              onChange={({ target }) => setSenhaConfirm(target.value)}
            />
          </Col>
        </Row>
        <Row>
          <Col s={12}>
            <Button
              type="submit"
              className="deep-orange"
              onClick={handleSubmit}
            >
              Realizar Cadastro
            </Button>
          </Col>
        </Row>
      </form>
    </Card>
  );
}
