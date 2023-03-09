export interface ServicesPageOptions {
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
  services_title: string;
  employee_section_title: string;
  employee_section_description: string;
}
