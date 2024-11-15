'use client'
import styled from "styled-components"


const Header = styled.header`
    background-color: #F5F5F5;
    width: 83vw;
    height: 20vh;
    display: flex;
    padding: 10px;
`;

const Titles = styled.div`
    width: 50%;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 10px;
`;

const NameSection = styled.h2`
    color: #2F2B3D;
    font-size: 24px;
    font-weight: 700;
`;

export default function HeaderDashboard() {
    return (
        <Header>
            <Titles>
                <NameSection>Gestión de vehiculos</NameSection>
            </Titles>
        </Header>
    )
}
