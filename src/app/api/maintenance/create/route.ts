import { MaintenanceServices } from "@/app/infrastructure/services/maintenance.service";
import { NextResponse } from "next/server";


const useMaintenance = new MaintenanceServices();

// POST
export async function POST(req: Request) {
    try {
        const body: RegisterMainRequest = await req.json();
        const newService = await useMaintenance.createMaintenance(body);
        
        return NextResponse.json(newService, { status: 200 });
    } catch (error) {
        console.error("Error en el servidor:", error);
        return NextResponse.json({ error: "Error al procesar la solicitud" }, { status: 500 });
    }
}