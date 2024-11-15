'use client'
import Button from "@/ui/atoms/button";
import FormField from "@/ui/molecules/FormField";
import { FormFileField } from "@/ui/molecules/FormFileField";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import * as yup from "yup";

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
    max-width: 24rem;
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

const RegisterForm = () => {
    const router = useRouter();
    const {
        control,
        handleSubmit,
        setError,
        formState: { errors }
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

            if (data.file instanceof File) {
                formData.append("file", data.file);
            } else {
                console.warn("El archivo no es válido");
            }
            
            const response = await fetch("/api/cars/post", {
                method: "POST",
                body: formData
            });

            if (!response.ok) {
                throw new Error("Error al registrar el vehículo");
            }
            alert('Vehículo registrado exitosamente');
            router.refresh();
            console.log(response);
            return await response.json();

        } catch (error) {
            console.error("Error en el POST:", error);
            throw error;
        }
    };

    return (
        <FormContainer onSubmit={handleSubmit(handleRegister)}>
            <Title>Registro de Vehículo</Title>

            <FormField<IRegisterCarRequest>
                control={control}
                type="text"
                name="make"
                label="Marca"
                error={errors.make}
                placeholder="Ingrese la marca"
            />

            <FormField<IRegisterCarRequest>
                control={control}
                type="text"
                name="model"
                label="Modelo"
                error={errors.model}
                placeholder="Ingrese el modelo"
            />

            <FormField<IRegisterCarRequest>
                control={control}
                type="text"
                name="year"
                label="Año"
                error={errors.year}
                placeholder="Ingrese el año"
            />

            <FormField<IRegisterCarRequest>
                control={control}
                type="text"
                name="licensePlate"
                label="Placa"
                error={errors.licensePlate}
                placeholder="Ingrese la placa"
            />

            <FormFileField<IRegisterCarRequest>
                control={control}
                name="file"
                label="Foto del vehículo"
                error={errors.file}
            />

            <Button type="submit" label="Registrar Vehículo" />
        </FormContainer>
    );
};

export default RegisterForm;
