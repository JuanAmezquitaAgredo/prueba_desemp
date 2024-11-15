'use client'
import Button from "@/ui/atoms/button";
import FormField from "@/ui/molecules/FormField";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import * as yup from "yup";

interface Iprops {
    onClose: () => void;
}

const registerMainSchema = yup.object().shape({
    type: yup
        .string()
        .min(1, 'El tipo es requerido')
        .required('Tipo requerido'),
    date: yup
        .string()
        .matches(/^\d{4}-\d{2}-\d{2}$/, 'La fecha debe estar en formato AAAA-MM-DD')
        .required('Fecha requerida'),
    mileage: yup
        .number()
        .positive('El kilometraje debe ser un número positivo')
        .required('Kilometraje requerido'),
    notes: yup
        .string()
        .max(300, 'Las notas deben tener un máximo de 300 caracteres')
        .optional()
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

const RegisterForm = ({ onClose }: Iprops) => {
    const router = useRouter();
    const {
        control,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm<RegisterMainRequest>({
        mode: "onChange",
        reValidateMode: "onChange",
        resolver: yupResolver(registerMainSchema)
    });

    const handleRegister = async (data: RegisterMainRequest) => {
        try {
            const response = await fetch("/api/maintenance/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error("Error al registrar el mantenimiento");
            }
            alert('Mantenimiento registrado exitosamente');
            router.refresh();
            onClose();
            return await response.json();

        } catch (error) {
            console.error("Error en el POST:", error);
            throw error;
        }
    };

    return (
        <FormContainer onSubmit={handleSubmit(handleRegister)}>
            <Title>Agregar nuevo mantenimiento</Title>

            <Sectionone>
                <FormField<RegisterMainRequest>
                    control={control}
                    type="text"
                    name="type"
                    label="Tipo"
                    error={errors.type}
                    placeholder="Ingrese el tipo de mantenimiento"
                    width="250px"
                    height="47px"
                />

                <FormField<RegisterMainRequest>
                    control={control}
                    type="date"
                    name="date"
                    label="Fecha"
                    error={errors.date}
                    placeholder="Ingrese la fecha"
                    width="250px"
                    height="47px"
                />
            </Sectionone>

            <Sectionone>
                <FormField<RegisterMainRequest>
                    control={control}
                    type="number"
                    name="mileage"
                    label="Kilometraje"
                    error={errors.mileage}
                    placeholder="Ingrese el kilometraje"
                    width="250px"
                    height="47px"
                />

                <FormField<RegisterMainRequest>
                    control={control}
                    type="text"
                    name="notes"
                    label="Notas"
                    error={errors.notes}
                    placeholder="Ingrese las notas (opcional)"
                    width="250px"
                    height="47px"
                />
            </Sectionone>

            <SectionButtons>
                <ButtonCancel type="button" label="Cancelar" onClick={onClose} />
                <ButtonSubmit type="submit" label="Agregar" />
            </SectionButtons>

        </FormContainer>
    );
};

export default RegisterForm;
