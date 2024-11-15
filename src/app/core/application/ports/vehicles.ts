export interface PProjects{
    /**
     * Get all projects
     * @param {GetCarsRequest}
     * @returns {Promise<IProjectsResponse>}Register response
     */

    getAllCars({size, page}: GetCarsRequest): Promise<GetCarsResponse>
    


    getCar(id: string): Promise<GetCarResponse>


    createCar(car: FormData): Promise<IRegisterCarResponse>
    
}   