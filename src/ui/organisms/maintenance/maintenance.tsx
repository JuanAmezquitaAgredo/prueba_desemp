'use client'
import MaintenanceTableComponent from "@/ui/molecules/car/body";
import { useRouter, useSearchParams } from "next/navigation";
import styled from "styled-components";

interface MainProps {
    data: GetMaintenanceResponse
}

const Pagination = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    margin-top: 20px;
`;

const MainContent = styled.div`
    width: 100%;
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 10px;
`;

const PaginationButton = styled.button<{ isActive: boolean }>`
    background-color: ${(props) => (props.isActive ? "#7692FF" : "#e0e0e0")};
    color: white;
    border: none;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    font-size: 14px;
    margin: 0 5px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background-color: #0056b3;
    }
`;

export default function MainComponent({ data }: MainProps) {
    const searchParams = useSearchParams();
    const router = useRouter();

    const HandleClickPage = (page: number) => {
        const params = new URLSearchParams(searchParams.toString());
        if (page >= 1 && page <= data.metadata.totalPages) {
            params.set('page', page.toString());
            router.push(`?${params.toString()}`);
        }
    };

    const courrentPage = data.metadata.currentPage;
    const totalPages = data.metadata.totalPages;

    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1); 

    const content = data.data;

    return (
        <MainContent>
            <StyledDiv>
                <MaintenanceTableComponent tbody={content}/>
            </StyledDiv>
            <Pagination>
                {pageNumbers.map((page) => (
                    <PaginationButton
                        key={page}
                        isActive={page === courrentPage}
                        onClick={() => HandleClickPage(page)}
                    >
                        {page}
                    </PaginationButton>
                ))}
            </Pagination>
        </MainContent>
    );
}
