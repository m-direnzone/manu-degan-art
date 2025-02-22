export interface Article {
  title: string;
  preview: string;
  link: string;
}

export interface Paint {
  id: number;
  src: string;
  title: string;
  description: string;
  paintSize: string;
  year: number;
  height: number;
  width: number;
  mobileHeight: number;
  mobileWidth: number;
}

export type PageType = 'home' | 'biografia' | 'galleria' | 'scuola' | 'contatti';