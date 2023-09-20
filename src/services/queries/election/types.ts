export interface ElectionResponse {
  success: boolean;
  elections: Election[];
  message: string;
}

export interface Election {
  id: string;
  name: string;
  description: string;
  status: boolean;
  date: Date;
  startDate: Date;
  endDate: Date;
  createdAt: Date;
  updatedAt: Date;
  candidates: any[];
}

export interface SingleElectionResponse {
  success: boolean;
  elections: Elections;
  message: string;
}

export interface Elections {
  id: string;
  name: string;
  description: string;
  status: boolean;
  date: Date;
  startDate: Date;
  endDate: Date;
  createdAt: Date;
  updatedAt: Date;
}
