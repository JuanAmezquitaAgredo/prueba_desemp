import { PProjects } from "@/app/core/application/ports/vehicles";
import { HttpClient } from "../utils/client-http";

export class CarsServices implements PProjects {
  private clientHttp: HttpClient;

  constructor() {
    this.clientHttp = new HttpClient();
  }

  // async getReport(): Promise<ArrayBuffer> {
  //   try {
  //     const response = await this.clientHttp.get<ArrayBuffer>(`projects/report/download`, true);
  //     return response;
  //   } catch (error) {
  //     console.log(error);
  //     throw error;
  //   }
  // }

  async getAllCars({size, page}: GetCarsRequest): Promise<GetCarsResponse> {
    try {
      const response = await this.clientHttp.get<GetCarsResponse>(`vehicles?page=${page}&size=${size}`);
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async createCar(car: FormData): Promise<IRegisterCarResponse> {
    try {
      const response = await this.clientHttp.post<IRegisterCarResponse, FormData>("vehicles", car, true);
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  // async getProject(id: number): Promise<IProjectResponse> {
  //   try {
  //     const response = await this.clientHttp.get<IProjectResponse>(`projects/${id}`);
  //     return response;
  //   } catch (error) {
  //     console.log(error);
  //     throw error;
  //   }
  // }


  // async updateProject(id: number, project: IEditProjectsRequest): Promise<IEditProjectsResponse> {
  //   try {
  //     const response = await this.clientHttp.put<IEditProjectsResponse, IEditProjectsRequest>(`projects/${id}`, project);
  //     return response;
  //   } catch (error) {
  //     console.log(error);
  //     throw error;
  //   }
  // }

  // async deleteProject(id: number): Promise<IDeleteProjectResponse> {
  //   try {
  //     const response = await this.clientHttp.delete<IDeleteProjectResponse>(`projects/${id}`);
  //     return response;
  //   } catch (error) {
  //     console.log(error);
  //     throw error;
  //   }
  // }
}