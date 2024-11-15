'use client'
import InpustFilter from "@/ui/molecules/InputsFilter";
import styled from "styled-components"

const HeaderHomePageComponent = styled.header`
    width: 100%;
    height: 20vh;
    padding: 15px;
    background-color: transparent;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;


export default function HeaderMainPage() {

    return (
        <HeaderHomePageComponent>
            <InpustFilter/>
        </HeaderHomePageComponent>
    )
}