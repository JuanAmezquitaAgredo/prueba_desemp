interface Car {
    make: string;
    model: string;
    year: number;
    licensePlate: string;
    photo: string | null;
    id: number;
}

interface IRegisterCarResponse {
    statusCode: number;
    message: string;
    data: Car;
}