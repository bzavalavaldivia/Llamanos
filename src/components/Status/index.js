import React, { useContext } from 'react';
import { StatusContainer, StatusContent } from './StatusElements';
import { CustomerContext } from '../../contexts/CustomerContext';

const Status = () => {
  const { customer } = useContext(CustomerContext);

  return (
    <StatusContainer>
        <StatusContent>
            <div>Bienvenido, {customer.name}</div>
            <div>{customer.address}, {customer.district}</div>
        </StatusContent>
    </StatusContainer>
  )
};

export default Status;