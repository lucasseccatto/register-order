import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import axios from 'axios';

import Burger from '../../assets/burger 2.svg';
import Thrash from '../../assets/trash.svg';

import H1 from '../../components/Title';
import ContainerItens from '../../components/ContainerItens';
import Button from '../../components/Button';

import { Container, Image, Client } from './styles';

const Orders = () => {
  const [clients, setClients] = useState([]);
  const history = useHistory();

  const baseUrl = 'https://hamburgueria-opal.vercel.app/orders';

  useEffect(() => {
    const fetchClients = async () => {
      const { data: newClients } = await axios.get(`${baseUrl}`);

      setClients(newClients);
    };

    fetchClients();
  }, []);

  const deleteClient = async (clientId) => {
    await axios.delete(`${baseUrl}/${clientId}`);
    setClients(clients.filter((client) => client.id !== clientId));
  };

  const goBackPage = () => {
    history.push('/');
  };

  return (
    <Container>
      <Image alt='logo-burger' src={Burger} />
      <ContainerItens>
        <H1>Pedidos</H1>
        <ul>
          {clients.map((client) => (
            <Client key={client.id}>
              <div>
                <div className='orderItems'>{client.order}</div>
                <p className='clientName'>{client.clientName}</p>
              </div>
              <button onClick={() => deleteClient(client.id)}>
                <img src={Thrash} alt='trash-can' />
              </button>
            </Client>
          ))}
        </ul>
        <Button isBack={true} onClick={goBackPage}>
          Voltar
        </Button>
      </ContainerItens>
    </Container>
  );
};

export default Orders;
