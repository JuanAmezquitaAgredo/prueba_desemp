'use client'
import styled from "styled-components";
import { Suspense } from "react";
import Loading from "@/ui/atoms/loading";
import SidebarDashboard from "@/ui/organisms/dashboard/sidebar";

interface ILayout {
    children: React.ReactNode;
}

const StylesLayout = styled.div`
    display: flex;
    width: 100%;
    min-height: 100vh;
    background-color: #F5F5F5;
`;

const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    background-color: #F5F5F5;
`;

export default function Layout({ children }: ILayout) {
    return (
        <StylesLayout>
            <SidebarDashboard />
            <StyledMain>
                <Suspense fallback={<Loading />}>
                    {children}
                </Suspense>
            </StyledMain>
        </StylesLayout>
    )
}