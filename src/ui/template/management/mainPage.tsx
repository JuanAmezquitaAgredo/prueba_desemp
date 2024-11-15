'use client'
import MainComponent from "@/ui/organisms/dashboard/cars";
import HeaderDashboard from "@/ui/organisms/dashboard/header";
import HeaderMainPage from "@/ui/organisms/MainPage/header";
import { useRouter } from "next/navigation";
import styled from "styled-components"

interface IProps {
    data: GetCarsResponse;
}

const PageContainer = styled.div`
  width: 100%;
  height: 80vh;
  background-image: #F5F5F5;
`;

const BodyMainPage = styled.div`
    width: 100%;
    height: 75%;
    display: flex;
`;
export default function MainPage({data}: IProps) {

    const router = useRouter();

    const handleEdit = (id: number) => {
        // Implement edit functionality here
    }
    
    const handleDelete = (id: number) => {
        // Implement delete functionality here
    }
    
    const handleView = (id: number) => {
        router.push(`/vehicle/${id}`); // Navigate to car detail page with the provided id
    }
    
    return (
        <PageContainer>
            <HeaderDashboard title='Gestión de vehiculos'/>
            <HeaderMainPage/>
            <BodyMainPage>
                <MainComponent data={data} onEdit={handleEdit} onDelete={handleDelete} onView={handleView}/>
            </BodyMainPage>
        </PageContainer>
    )
}