export type Assets = {
  baseUrl: string;
  images:{ key:string, url:string }[];
};
export default {
  baseUrl: './assets/',
  images: [
    
    {
      key: 'front',
      url: 'img/smilies.png',
    },
    {
      key: 'desyrel',
      url: 'fonts/desyrel.xml',
    },
  ],
};
