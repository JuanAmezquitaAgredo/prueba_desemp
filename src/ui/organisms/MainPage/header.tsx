'use client'
import ButtonsAddDownload from "@/ui/molecules/ButtonsAdd";
import InpustFilter from "@/ui/molecules/InputsFilter";
import styled from "styled-components"

const HeaderHomePageComponent = styled.header`
    width: 100%;
    height: 20vh;
    padding: 15px;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;


export default function HeaderMainPage() {

    return (
        <HeaderHomePageComponent>
            <InpustFilter/>
            <ButtonsAddDownload/>
        </HeaderHomePageComponent>
    )
}