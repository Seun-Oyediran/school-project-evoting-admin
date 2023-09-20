export interface GenderResponse {
  success: boolean;
  genderData: GenderData;
  message: string;
}

export interface GenderData {
  male: number;
  female: number;
}

export interface AgeGroupResponse {
  success: boolean;
  ageData: { [key: string]: AgeDatum };
  message: string;
}

export interface AgeDatum {
  male: number;
  female: number;
}

export interface IAgeGroup {
  ageData: { [key: string]: AgeDatum };
}

export interface AgeDatum {
  male: number;
  female: number;
}
