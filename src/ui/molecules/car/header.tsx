import Image from 'next/image';
import { Icon } from '@iconify/react';
import styled from 'styled-components';
import Button from '@/ui/atoms/button';

interface CarProps {
    car: Vehicle
}

const Component = styled.div`
    width: 100%;
    height: 229px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
    background-color: #f5f5f5;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ImageCar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 200px;
    background-color: #e0e0e0;
    border-radius: 8px;
    overflow: hidden;
`;

const InfoCar = styled.div`
    flex: 1;
    margin-left: 16px;
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const P = styled.p`
    margin: 0;
    font-size: 14px;
    color: #333;
`;

const DownloadInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ButtonDownloadreport = styled(Button)`
    width: 214px;
    height: 40px;
    border-radius: 10px;
    font-weight: 600;
    background-color: #217346;
    border: none;
    font-size: 16px;

    &:hover {
        font-size: 17px;
    }
`;

export default function HeaderCar({car}: CarProps) {

    return (
        <Component>
            <ImageCar>
            {car.photo ? (
                <Image
                  src={car.photo}
                  alt={`Vehicle ${car.id}`}
                  width={150}
                  height={50}
                  objectFit="cover"
                  priority
                />
              ) : (
                <span>No image</span>
              )}
            </ImageCar>
            <InfoCar>
                <P>Año: {car.year}</P>
                <P>Marca: {car.make}</P>
                <P>Modelo: {car.model}</P>
                <P>Placa: {car.licensePlate}</P>
            </InfoCar>
            <DownloadInfo>
                <ButtonDownloadreport label="Descargar reporte" icon={<Icon icon="uiw:file-excel" width="20" height="20" color="#FFFF" />} />
            </DownloadInfo>
        </Component>
    )
}