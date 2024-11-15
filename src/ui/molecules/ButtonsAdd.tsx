import styled from "styled-components"
import Button from "../atoms/button";
import { Icon } from '@iconify/react';

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
    background-color: #7692FF;
    border: none;
`;

const ButtonDownloadreport = styled(Button)`
`;

export default function ButtonsAddDownload(){
    return(
        <ContainerButtons>
            <ButtonAddCar label="Agregar Vehiculo" icon={<Icon icon="lets-icons:add-duotone" width="30" height="30" color="#FFFF" />}/>
            <ButtonDownloadreport/>
        </ContainerButtons>
    )
}