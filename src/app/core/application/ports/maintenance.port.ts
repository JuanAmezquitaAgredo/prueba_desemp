export interface PMaintenance{
    /**
     * Get all projects
     * @param {GetMaintenanRequest}
     * @returns {Promise<IGetMaintenanceResponse>}Register response
     */

    getMaintenance({size, page}: GetMaintenanRequest): Promise<GetMaintenanceResponse>

    createMaintenance(maintenance: RegisterMainRequest ): Promise<RegisterMainResponse>
    
}   