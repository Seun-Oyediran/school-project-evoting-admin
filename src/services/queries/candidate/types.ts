export interface CandidateResponse {
  success: boolean;
  candidates: Candidate[];
  message: string;
}

export interface Candidate {
  id: string;
  firstName: string;
  lastName: string;
  state: string;
  dob: Date;
  gender: string;
  electionId: string;
  createdAt: Date;
  updatedAt: Date;
}
