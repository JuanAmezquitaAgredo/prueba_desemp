import { CarsServices } from "@/app/infrastructure/services/cars.service";
import { NextResponse } from "next/server";

const useCrasService = new CarsServices();
export async function POST(req: Request) {
    try {
        const formData = await req.formData();  
        const newUser = await useCrasService.createCar(formData);

        return NextResponse.json(newUser, { status: 200 });
    } catch (error) {
        console.error("Error en el servidor:", error);
        return NextResponse.json({ error: "Error al procesar la solicitud" }, { status: 500 });
    }
}