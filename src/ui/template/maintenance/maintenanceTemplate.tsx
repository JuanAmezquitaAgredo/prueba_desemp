'use client'
import HeaderCar from "@/ui/molecules/car/header";
import HeaderDashboard from "@/ui/organisms/dashboard/header";
import MainComponent from "@/ui/organisms/maintenance/maintenance";
import styled from "styled-components"
import { Icon } from '@iconify/react';
import Button from "@/ui/atoms/button";

interface IProps {
    car: Car;
    data: GetMaintenanceResponse;
}

const PageContainer = styled.div`
  padding-top: 20px;
  width: 100%;
  height: 90vh;
  background-image: #F5F5F5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ButtonAdd = styled.div`
    width: 97%;
    display: flex;
    justify-content: start;
    margin-top: 10px;
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

export default function MainPage({ car, data }: IProps) {
    const handleAdd = () => {
        // Implementar la acción para agregar un vehículo
    }

    return (
        <PageContainer>
            <HeaderDashboard title='Mantenimientos del vehiculo' />
            <HeaderCar car={car} />
            <ButtonAdd>
                <ButtonAddCar label="Agregar Vehiculo" icon={<Icon icon="lets-icons:add-duotone" width="30" height="30" color="#FFFF" />} onClick={handleAdd} />
            </ButtonAdd>
            <MainComponent data={data} />
        </PageContainer>
    )
}