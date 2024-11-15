import Button from "@/ui/atoms/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styled from "styled-components";
import { FiLogOut } from "react-icons/fi";
import { signOut } from "next-auth/react";
import { Icon } from '@iconify/react';

const Sidebar = styled.nav`
  left: 0;
  width: 17vw;
  height: 100vh;
  background-color: #d1d1d1;
  display: flex;
  flex-direction: column;
`;

const SidebarList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NamePage = styled.h1`
    color: #2F2B3D;
    font-size: 16px;
    font-weight: 700;
    padding: 10px;
    margin-bottom: 30px;
`;

const Profile = styled.div`

`;

const Br = styled.br`

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

const StyledLinkWrapper = styled.div<{ $isActive: boolean }>`
    display: flex;
    align-items: center;
    justify-content: start;
    padding: 17px;
    width: 100%;
    height: 45px;    
    color: ${(props) => (props.$isActive ? "#313131" : "#313131")};
    background-color: ${(props) => (props.$isActive ? "#d7d7d7" : "transparent")};

    &:hover {
      background-color: #a2a2a2;
      color: #fff;
    }
    
  a {
    text-decoration: none;
    font-size: 20px;
    padding: 10px;
    display: block;
  }
`;

const ButtonLogout = styled(Button)`
    display: flex;
    justify-content: start;
    color: #313131;
    font-size: 20px;
    width: 100%;
    height: 45px;
    border-radius: 0;
    border: none;
    background-color: transparent;

    &:hover {
        background-color: #d7d7d7;
        color: #fff;
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
        <Profile>
          <Br />
          <Icon icon="ix:user-profile-filled" width="50" height="50" color="#7692FF" />
          <P>Name</P>
        </Profile>
        <SidebarItem>
          <StyledLinkWrapper $isActive={pathname === "/dashboard"}>
            <Icon icon="fluent:vehicle-car-32-filled" width="35" height="35" color="#ffff" />
            <Link href="/dashboard/services" prefetch={false}>Vehiculos</Link>
          </StyledLinkWrapper>
        </SidebarItem>
        <SidebarItem>
          <ButtonLogout label="Cerrar sesión" icon={<Icon icon="bx:log-in" width="35" height="35" color="#2F2B3D" />} onClick={handlelogout} />
        </SidebarItem>
      </SidebarList>
    </Sidebar>
  )
}