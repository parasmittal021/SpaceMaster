export interface ISpaceDataModel {
    mission_name: string;
    flight_number: number;
    mission_id: string[];
    launch_year: string;
    launch_success: boolean;
    rocket: {
        first_stage: {
            cores: {
                land_success: boolean
            }[]
        }
    };
    links: {
        mission_patch: string;
        mission_patch_small: string;
    };
}

export class SpaceDataModel {
    missionName: string;
    flightNumber: number;
    missionId: string[];
    launchYear: string;
    launchSuccess: boolean;
    landSuccess: boolean;
    missionPatch: string;
    constructor(spaceData: ISpaceDataModel) {
        this.missionName = spaceData?.mission_name;
        this.flightNumber = spaceData?.flight_number;
        this.missionId = spaceData?.mission_id;
        this.launchYear = spaceData?.launch_year;
        this.launchSuccess = spaceData?.launch_success;
        this.landSuccess = spaceData?.rocket?.first_stage?.cores?.every(el => el?.land_success);
        this.missionPatch = spaceData?.links?.mission_patch_small || spaceData?.links?.mission_patch;
    }

}
