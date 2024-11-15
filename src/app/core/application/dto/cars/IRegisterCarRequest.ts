interface IRegisterCarRequest {
    make: string;
    model: string;
    year: string;
    licensePlate: string;
    file?: File | null;
}