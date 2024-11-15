'use client'
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import styled from "styled-components";
import Button from "@/ui/atoms/button";
import { signIn } from "next-auth/react";
import { ErrorResponse, FieldError } from "@/app/core/application/dto/common/error-response.dto";
import { useRouter } from "next/navigation";
import FormField from "@/ui/molecules/FormField";
import { Icon } from '@iconify/react';

const loginSchema = yup.object().shape({
    email: yup
        .string()
        .email('Email invalido')
        .required('Email Requerido'),
    password: yup
        .string()
        .min(8, 'La contraseña debe tener al menos 8 caracteres')
        .required('Contraseña Requerida'),
});


const FormContainer = styled.form`
    width: 100%;
    max-width: 24rem;
    margin: 0 auto;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    `;

const Title = styled.h2`
    font-size: 1.5rem;
    font-weight: 600;
    text-align: center;
    color: #7692FF;
    `;

const InstructionText = styled.p`
    text-align: start;
    font-size: 12px;    
    margin-bottom: 1rem;
    font-weight: 600;
    color: #2F2B3D;
`;

const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ButtonLogin = styled(Button)`
    font-size: 15px;
    width: 250px;
    height: 40px;
`;

const ButtonForgotPassword = styled(Button)`
    font-size: 15px;
    background-color: transparent;
    border: none;
    color: #2F2B3D;
    &:hover {
        background-color: transparent;
    }
`;
const LoginForm = () => {
    const router = useRouter();
    const {
        control,
        handleSubmit,
        setError,
        formState: { errors }
    } = useForm<ILoginRequest>({
        mode: "onChange",
        reValidateMode: "onChange",
        resolver: yupResolver(loginSchema)
    });

    const handleLogin = async (data: ILoginRequest) => {
        try {
            const result = await signIn("credentials", {
                redirect: false,
                email: data.email,
                password: data.password
            })

            if (result?.error) {
                console.log("ocurio un error", JSON.parse(result.error));
                handleError(JSON.parse(result.error));
                return
            }

            router.push("/dashboard");
        } catch (error) {
            console.log(error);
        }
    }

    const handleError = (error: unknown) => {
        const errorData = error as ErrorResponse
        if (errorData.errors && errorData) {
            if (Array.isArray(errorData.errors) && "field" in errorData.errors[0]) {
                errorData.errors.forEach((fieldError) => {
                    const { field, error } = fieldError as FieldError;
                    setError(field as keyof ILoginRequest, { message: error });
                });
            } else {
                if ("message" in errorData.errors[0]) {
                    setError("email", {
                        message: errorData.errors[0].message
                    })
                }
            }
        };
    };


    return (
        <FormContainer onSubmit={handleSubmit(handleLogin)}>
            <Icon icon="fluent:vehicle-car-48-regular" width="50" height="50" color="#7692FF" />
            <Title>Transport Solutions S.A</Title>
            <InstructionText>Inicia sesion en tu cuenta y gestiona tu flota de vehiculos</InstructionText>
            <FormField<ILoginRequest>
                control={control}
                type="email"
                name="email"
                label="Correo Electrónico"
                error={errors.email}
                placeholder="tuempresa@dominio.com"
                width="100%"
            />
            <FormField<ILoginRequest>
                control={control}
                type="password"
                name="password"
                label="Contraseña"
                error={errors.password}
                placeholder=""
                width="100%"
            />
            <ButtonLogin type="submit" label="Iniciar Sesión" icon={<Icon icon="mingcute:lock-line" width="20" height="20" color="#FFFFFF" />} />
            <Buttons>
                <ButtonForgotPassword label="¿Problemas para iniciar sesión? Contacta al administrador del sistema" />
            </Buttons>
        </FormContainer>
    );
};

export default LoginForm;
