'use client'
import HeaderMainPage from "@/ui/organisms/MainPage/header";
import styled from "styled-components"

const PageContainer = styled.div`
  width: 100%;
  height: 80vh;
  background-image: #F5F5F5;
`;
export default function MainPage() {

    return (
        <PageContainer>
            <HeaderMainPage/>
        </PageContainer>
    )
}