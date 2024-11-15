interface Vehicle {
    id: number;
    make: string;
    model: string;
    year: number;
    licensePlate: string;
    photo: string | null;
}

interface MaintenanceData {
    type: string;
    date: string;
    mileage: number;
    notes: string;
    vehicle: Vehicle;
    id: number;
}

interface RegisterMainResponse {
    statusCode: number;
    message: string;
    data: MaintenanceData;
}
