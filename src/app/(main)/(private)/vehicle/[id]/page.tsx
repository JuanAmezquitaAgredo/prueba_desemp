import { CarsServices } from "@/app/infrastructure/services/cars.service";
import { MaintenanceServices } from "@/app/infrastructure/services/maintenance.service";
import MainPage from "@/ui/template/maintenance/maintenanceTemplate";

const useCarsService = new CarsServices();
const useMaintenance = new MaintenanceServices();

export default async function DashboardPage({
    params,
    searchParams
}: {
    params: { id: string };
    searchParams: GetCarsRequest;
}) {
    const id = params.id;
    const page = searchParams.page ? parseInt(searchParams.page.toString()) : 1;
    const response = await useCarsService.getCar(id);
    const car = response.data;
    const maintenance = await useMaintenance.getMaintenance({ page, size: 4, id});

    return (
        <>
            <MainPage car={car} data={maintenance}/>
        </>
    );
}
