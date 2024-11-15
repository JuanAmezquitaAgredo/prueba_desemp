'use client'
import Button from "@/ui/atoms/button";
import FormField from "@/ui/molecules/FormField";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import * as yup from "yup";
import { useState } from "react";
import { Icon } from '@iconify/react';
import { FormFileField } from "@/ui/molecules/FormFileField";

interface Iprops {
    onClose: () => void;
}

const registerCarSchema = yup.object().shape({
    make: yup
        .string()
        .min(1, 'La marca es requerida')
        .required('Marca requerida'),
    model: yup
        .string()
        .min(1, 'El modelo es requerido')
        .required('Modelo requerido'),
    year: yup
        .string()
        .matches(/^\d{4}$/, 'El año debe ser un número de 4 dígitos')
        .required('Año requerido'),
    licensePlate: yup
        .string()
        .min(1, 'La placa es requerida')
        .required('Placa requerida'),
    file: yup
        .mixed<File>()
        .nullable()
        .notRequired()
});

const FormContainer = styled.form`
    width: 100%;
    margin: 0 auto;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const Title = styled.h2`
    font-size: 1.5rem;
    font-weight: 600;
    text-align: center;
    color: #202020;
`;

const Sectionone = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Sectiontwo = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const SectionButtons = styled.div`
    margin-top: 40px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const ButtonCancel = styled(Button)`
    width: 250px;
    height: 50px;
    border-radius: 10px;
    background-color: transparent;
    border: 1px solid black;
    color: #2F2B3D;
    font-weight: 600;
    font-size: 16px;
`;

const ButtonSubmit = styled(Button)`
    width: 250px;
    height: 50px;
    border-radius: 10px;
    background-color: #7692FF;
    color: #FFFF;
    font-weight: 600;
    font-size: 16px;
`;

const FileInputContainer = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 30px;
    margin-bottom: 15px;
`;

const FileInputButton = styled.button`
    width: 100px;
    height: 40px;
    background-color: #7692FF;
    color: white;
    border: none;
    border-radius: 10px;
    font-weight: 600;
    cursor: pointer;
    font-size: 16px;
    &:hover {
        background-color: #5c7aee;
    }
`;

const FileCancelButton = styled.button`
    width: 100px;
    height: 40px;
    background-color: #FF7678;
    color: #FFFF;
    border: none;
    border-radius: 10px;
    font-weight: 600;
    cursor: pointer;
    font-size: 16px;
    &:hover {
        background-color: #ff6265;
    }
`;

const BackIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #D9D9D9;
    border-radius: 50%;
    width: 100px;
    height: 100px;
`;

const RegisterForm = ({ onClose }: Iprops) => {
    const router = useRouter();
    const {
        control,
        handleSubmit,
        setError,
        formState: { errors },
        setValue
    } = useForm<IRegisterCarRequest>({
        mode: "onChange",
        reValidateMode: "onChange",
        resolver: yupResolver(registerCarSchema)
    });

    const handleRegister = async (data: IRegisterCarRequest) => {
        try {
            const formData = new FormData();

            formData.append("make", data.make);
            formData.append("model", data.model);
            formData.append("year", data.year);
            formData.append("licensePlate", data.licensePlate);

            if (data.file) {
                formData.append("file", data.file);
            } else {
                console.warn("El archivo no es válido");
            }
            console.log(formData);
            const response = await fetch("/api/cars/create", {
                method: "POST",
                body: formData
            });

            if (!response.ok) {
                throw new Error("Error al registrar el vehículo");
            }
            alert('Vehículo registrado exitosamente');
            router.refresh();
            onClose();
            console.log(response);
            return await response.json();

        } catch (error) {
            console.error("Error en el POST:", error);
            throw error;
        }
    };

    return (
        <FormContainer onSubmit={handleSubmit(handleRegister)}>
            <Title>Agregar nuevo vehiculo</Title>

            <FileInputContainer>
                <BackIcon>
                    <Icon icon="carbon:camera" width="50" height="50" color="#a1a1a1" />
                </BackIcon>
                <FormFileField<IRegisterCarRequest>
                    control={control}
                    name="file"
                    label="Imagen del Vehiculo"
                    error={errors.file}
                />
            </FileInputContainer>

            <Sectionone>
                <FormField<IRegisterCarRequest>
                    control={control}
                    type="text"
                    name="make"
                    label="Marca"
                    error={errors.make}
                    placeholder="Ingrese la marca"
                    width="250px"
                    height="47px"
                />

                <FormField<IRegisterCarRequest>
                    control={control}
                    type="text"
                    name="model"
                    label="Modelo"
                    error={errors.model}
                    placeholder="Ingrese el modelo"
                    width="250px"
                    height="47px"
                />
            </Sectionone>

            <Sectiontwo>
                <FormField<IRegisterCarRequest>
                    control={control}
                    type="text"
                    name="year"
                    label="Año"
                    error={errors.year}
                    placeholder="Ingrese el año"
                    width="250px"
                    height="47px"
                />

                <FormField<IRegisterCarRequest>
                    control={control}
                    type="text"
                    name="licensePlate"
                    label="Placa"
                    error={errors.licensePlate}
                    placeholder="Ingrese la placa"
                    width="250px"
                    height="47px"
                />
            </Sectiontwo>

            <SectionButtons>
                <ButtonCancel type="button" label="Cancelar" onClick={onClose} />
                <ButtonSubmit type="submit" label="Agregar" />
            </SectionButtons>

        </FormContainer>
    );
};

export default RegisterForm;
