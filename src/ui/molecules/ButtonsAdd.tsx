import styled from "styled-components"
import Button from "../atoms/button";
import { Icon } from '@iconify/react';
import Modal from "../atoms/modal";
import { useState } from "react";
import RegisterForm from "../organisms/cars/registerForm";

const ContainerButtons = styled.div`
    display: flex;
    justify-content: start;
    width: 100%;
    gap: 20px;
`;

const ButtonAddCar = styled(Button)`
    width: 214px;
    height: 40px;
    border-radius: 10px;
    font-weight: 600;
    background-color: #7692FF;
    border: none;
    font-size: 16px;

    &:hover {
        font-size: 17px;
    }
`;

const ButtonDownloadreport = styled(Button)`
    width: 214px;
    height: 40px;
    border-radius: 10px;
    font-weight: 600;
    background-color: #217346;
    border: none;
    font-size: 16px;

    &:hover {
        font-size: 17px;
    }
`;

export default function ButtonsAddDownload() {
    const [ModalOpenRegister, setModalOpenRegister] = useState(false);

    const toggleModalRegister = () => {
        setModalOpenRegister(!ModalOpenRegister);
    }

    const handleAdd = () => {
        toggleModalRegister();
    }

    return (
        <ContainerButtons>
            <ButtonAddCar label="Agregar Vehiculo" icon={<Icon icon="lets-icons:add-duotone" width="30" height="30" color="#FFFF" />} onClick={handleAdd} />
            <ButtonDownloadreport label="Descargar reporte" icon={<Icon icon="uiw:file-excel" width="20" height="20" color="#FFFF" />} />
            <Modal isOpen={ModalOpenRegister} onClose={toggleModalRegister}>
                <RegisterForm onClose={toggleModalRegister} />
            </Modal>
        </ContainerButtons>
    )
}