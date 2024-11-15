import { HttpClient } from "../utils/client-http";
import { PMaintenance } from "@/app/core/application/ports/maintenance.port";

export class MaintenanceServices implements PMaintenance {
  private clientHttp: HttpClient;

  constructor() {
    this.clientHttp = new HttpClient();
  }

  async getMaintenance({size, page, id}: GetMaintenanRequest): Promise<GetMaintenanceResponse> {
    try {
      const response = await this.clientHttp.get<GetMaintenanceResponse>(`vehicles/${id}/maintenance?page=${page}&size=${size}`);
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async createMaintenance(maintenance: RegisterMainRequest ): Promise<RegisterMainResponse> {
    try {
      const response = await this.clientHttp.post<RegisterMainResponse, RegisterMainRequest>("vehicles", maintenance);
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

}