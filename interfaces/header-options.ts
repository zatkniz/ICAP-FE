export interface HeaderOptions {
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
  header_logo: string;
  home_button_text: string;
  services_button_text: string;
  contact_button_text: string;
}
