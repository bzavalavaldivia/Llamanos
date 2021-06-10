import React, { useContext, useState } from 'react';
import { CustomerContext } from '../../contexts/CustomerContext';
import { Form, FormInput, FormSelect } from '../Form/FormElements';
import { ModalCard, ModalCardActions, ModalCardActionsButton, ModalCardContent, ModalCardTitle, ModalContainer } from './ModalElements';

const Modal = props => {
    const { addCustomer, isThereCustomer } = useContext(CustomerContext)

    const [customer, setCustomer] = useState({
        name: null,
        address: null,
        district: null
    });

    const onClose = e => {
        props.onClose && props.onClose(e)
    }

    const onSave = () => {
        addCustomer(customer);
        onClose();
        console.log(isThereCustomer);
    }

    if (!props.show) {
        return  null;
    }

    return (
        <ModalContainer>
            <ModalCard>
                <ModalCardTitle>Ingresa tus datos</ModalCardTitle>
                <ModalCardContent>
                    <Form>
                        <FormInput
                            onChange={e => setCustomer({
                                name: e.target.value,
                                address: customer.address,
                                district: customer.district
                            })}
                            placeholder="Nombre"
                            required
                        />
                        <FormInput
                            onChange={e => setCustomer({
                                name: customer.name,
                                address: e.target.value,
                                district: customer.district
                            })}
                            placeholder="Dirección"
                            required
                        />
                        <FormSelect
                            onChange={e => setCustomer({
                                name: customer.name,
                                address: customer.address,
                                district: e.target.value
                            })}
                            required
                            defaultValue=""
                        >
                            <option value="" disabled>Selecciona tu distrito</option>
                            <option value="Arequipa">Arequipa</option>
                            <option value="Alto Selva Alegre">Alto Selva Alegre</option>
                            <option value="Cayma">Cayma</option>
                            <option value="Cerro Colorado">Cerro Colorado</option>
                            <option value="Jacobo Hunter">Jacobo Hunter</option>
                            <option value="Jose Luis Bustamante Y Rivero">Jose Luis Bustamante Y Rivero</option>
                            <option value="Mariano Melgar">Mariano Melgar</option>
                            <option value="Miraflores">Miraflores</option>
                            <option value="Paucarpata">Paucarpata</option>
                            <option value="Sachaca">Sachaca</option>
                            <option value="Socabaya">Socabaya</option>
                            <option value="Tiabaya">Tiabaya</option>
                            <option value="Yanahuara">Yanahuara</option>
                        </FormSelect>
                    </Form>
                </ModalCardContent>
                <ModalCardActions>
                    <ModalCardActionsButton onClick={onClose}>
                        Cerrar
                    </ModalCardActionsButton>

                    <ModalCardActionsButton type="submit" primary onClick={onSave}>
                        Guardar
                    </ModalCardActionsButton>
                </ModalCardActions>
            </ModalCard>
        </ModalContainer>
    );
}

export default Modal;