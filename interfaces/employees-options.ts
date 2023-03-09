export interface EmployeesOptions {
  acf: Acf;
  date: string;
  date_gmt: string;
  guid: any;
  id: number;
  link: string;
  meta: any;
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  template: any;
  title: any;
  type: any;
  _links: any;
}

export interface Acf {
  full_name: string;
  occupation: string;
  image: string;
  description: string;
}
