import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';

import axios from 'axios';

import Burger from '../../assets/burger 1.svg';

import H1 from '../../components/Title/';
import ContainerItens from '../../components/ContainerItens';
import Button from '../../components/Button';

import { Container, Image, Label, Input } from './styles';

const Home = () => {
  const [clients, setClients] = useState([]);
  const history = useHistory();

  const inputOrder = useRef();
  const inputName = useRef();

  const baseUrl = 'https://hamburgueria-opal.vercel.app/orders';

  const addNewClient = async () => {
    if (!inputOrder.current.value || !inputName.current.value) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    const { data: newClient } = await axios.post(`${baseUrl}`, {
      order: inputOrder.current.value,
      clientName: inputName.current.value,
    });

    console.log(newClient);

    setClients([...clients, newClient]);

    history.push('/pedidos');
  };

  return (
    <Container>
      <Image alt='logo-burger' src={Burger} />
      <ContainerItens>
        <H1>Faça seu pedido!</H1>
        <Label>Pedido</Label>
        <Input ref={inputOrder} placeholder='1 Coca Cola, 1 X Salada' />
        <Label>Nome do Cliente</Label>
        <Input ref={inputName} placeholder='Digite o seu nome' />
        <Button onClick={addNewClient}>Novo Pedido</Button>
      </ContainerItens>
    </Container>
  );
};

export default Home;
