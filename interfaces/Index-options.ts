export interface IndexOptions {
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
  first_number: number;
  first_symbol: string;
  first_text: string;
  hero_image: string;
  hero_logo: string;
  hero_text: string;
  number_image: string;
  main_bg_color: string;
  number_description: string;
  number_title: string;
  second_number: number;
  second_symbol: string;
  second_text: string;
  third_number: number;
  third_symbol: string;
  third_text: string;
  video_description: string;
  video_title: string;
  video_url: string;
}
