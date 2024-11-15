'use client'
import HeaderCar from "@/ui/molecules/car/header";
import HeaderDashboard from "@/ui/organisms/dashboard/header";
import MainComponent from "@/ui/organisms/maintenance/maintenance";
import styled from "styled-components"

interface IProps{
    car: Car;
    data: GetMaintenanceResponse;
}

const PageContainer = styled.div`
  width: 100%;
  height: 80vh;
  background-image: #F5F5F5;
`;

export default function MainPage({car, data}: IProps) {
    
    return (
        <PageContainer>
            <HeaderDashboard title='Mantenimientos del vehiculo'/>
            <HeaderCar car={car}/>
            <MainComponent data={data}/>
        </PageContainer>
    )
}