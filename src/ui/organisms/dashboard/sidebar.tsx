import Button from "@/ui/atoms/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styled from "styled-components";
import { signOut } from "next-auth/react";
import { Icon } from '@iconify/react';

const Sidebar = styled.nav`
  left: 0;
  width: 20vw;
  height: 100vh;
  background-color: #F5F5F5;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SidebarList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NamePage = styled.h1`
    display: flex;
    align-items: center;
    color: #2F2B3D;
    font-size: 16px;
    font-weight: 700;
    padding: 10px;
    margin-bottom: 30px;
    margin-top: 30px;
`;

const Profile = styled.div`
  width: auto;
  height: 140px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const Hr = styled.hr`
  width: 211px;
  height: 1px;
  color: #9E9E9E54;
`;

const P = styled.p`
  font-size: 16px;
  font-weight: 600;
`;

const SidebarItem = styled.li`
  margin: 15px 0;
  display: flex;
  align-items: center;
  justify-content: start;
`;

const CaseIcon = styled.div`
  background-color: #7692FF;
  border-radius: 10px;
  width: 40px;
  height: 40px; 
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLinkWrapper = styled.div<{ $isActive: boolean }>`
    display: flex;
    align-items: center;
    justify-content: start;
    padding: 17px;
    width: 218px;
    height: 50px;   
    font-weight: 600;
    border-radius: 10px;
    color: ${(props) => (props.$isActive ? "#7692FF" : "#313131")};
    background-color: ${(props) => (props.$isActive ? "#FFFFFF" : "transparent")};

    &:hover {
      background-color: #f8f8f8;
    }
    
  a {
    text-decoration: none;
    font-size: 15px;
    padding: 10px;
    display: block;

    &:hover {
      font-size: 16px;
    }
  }
`;

const ButtonLogout = styled(Button)`
    display: flex;
    justify-content: start;
    color: #313131;
    font-size: 15px;
    font-weight: 600;
    width: 100%;
    height: 45px;
    border-radius: 0;
    border: none;
    background-color: transparent;

    &:hover {
      background-color: transparent;
      font-size: 16px;
    }
`;

export default function SidebarDashboard() {
  const pathname = usePathname();
  const handlelogout = async () => {
    await signOut();
  }

  return (
    <Sidebar>
      <SidebarList>
        <NamePage>{<Icon icon="fluent:vehicle-car-parking-16-filled" width="50" height="50" color="#2F2B3D" />}Transport Solutions</NamePage>
        <Hr />
        <Profile>
          <Icon icon="ix:user-profile-filled" width="50" height="50" color="#7692FF" />
          <P>Kevin Mejía</P>
        </Profile>
        <SidebarItem>
          <StyledLinkWrapper $isActive={pathname === "/dashboard"}>
            <CaseIcon>
              <Icon icon="fluent:vehicle-car-32-filled" width="35" height="35" color="#ffff" />
            </CaseIcon>
            <Link href="/dashboard" prefetch={false}>Vehiculos</Link>
          </StyledLinkWrapper>
        </SidebarItem>
        <SidebarItem>
          <ButtonLogout label="Cerrar sesión" icon={<Icon icon="bx:log-in" width="35" height="35" color="#2F2B3D" />} onClick={handlelogout} />
        </SidebarItem>
      </SidebarList>
    </Sidebar>
  )
}