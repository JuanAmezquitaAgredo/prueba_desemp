import { CarsServices } from "@/app/infrastructure/services/cars.service";
import MainPage from "@/ui/template/management/mainPage";

interface IProps {
    searchParams: GetCarsRequest;
}

const useCarsService = new CarsServices();
export default async function DashboardPage({ searchParams }: IProps) {
    const page = searchParams.page ? parseInt(searchParams.page.toString()) : 1;
    const data = await useCarsService.getAllCars({ page, size: 4 });
    return (
        <>
            <MainPage data={data} />
        </>
    );
}