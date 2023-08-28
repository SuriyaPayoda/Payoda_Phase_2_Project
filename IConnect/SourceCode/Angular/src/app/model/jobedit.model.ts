export interface JobEdit {
    jId: number;
    cId: number;
    jRole: string;
    jSkill: string;
    jMinexperience: number;
    jMaxexperience: number;
    jVacancy: number;
    jSalary: number;
    jHighlight: string;
    jContact: string;
    jTimeline: string; // Consider changing this to a Date type if needed
    jUpdatedon: string; // Consider changing this to a Date type if needed
    jLocation: string;
    isactive: number;
    tName: string;
  }
  