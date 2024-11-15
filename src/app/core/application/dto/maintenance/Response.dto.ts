interface MaintenanceItem {
    id: number;
    type: string;
    date: string; 
    mileage: number;
    notes: string;
}

interface Metadata {
    totalItems: number;
    itemCount: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
}

interface GetMaintenanceResponse {
    statusCode: number;
    message: string;
    data: MaintenanceItem[]; 
    metadata: Metadata; 
}
