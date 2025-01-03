export const logoUrl = "https://www.tradebulls.in/images/tradebulls-logo.svg";
export const blogColorCode = [
  {name: 'Select Colour'},
  {name: 'Blue'},
  {name: 'Light Blue'},
  {name: 'Dark Blue'},
  {name: 'Green'},
  {name: 'Dark Green'},
  {name: 'Pink'},
  {name: 'Red'},
  {name: 'Purple'},
  {name: 'Yellow'},
  {name: 'Orange'}
];

export const tags = ['Trading','Mutual Fund','Recently Uploaded','Margin Trading','Pledge','Order','IPO','CDSL','Fund Transfer','Intraday','Tax Saving','Add Nominee','Activate MTF','TOUCH 2.0','PRO']

export const languages = ['All','English','Hindi']

export const videoLeftMenus = [
  {identifier: '/videos', name: 'All Videos'},
  {identifier: '/videos/trade-using-mobile-app', name: 'Trade Using Mobile App'},
  {identifier: '/videos/tradebulls-investment-products', name: 'Tradebulls Investment Products'}
];

export const blogObjectUat = "https://uat-cmsapi.tradebulls.in/api/getAllBlogList"; //UAT API

// PROD API Below
export const TB_STRAPI_URL = 'https://cmsapi.tradebulls.in';
export const blogObjectProd = "https://cmsapi.tradebulls.in/api/getAllBlogList";
export const blogObjDetailsProd = "https://cmsapi.tradebulls.in/api/getBlogDetails/";
export const videoCategoryProd = 'https://cmsapi.tradebulls.in/api/getAllVideoCategory/';
export const videoDetailsProd = 'https://cmsapi.tradebulls.in/api/getVideoDetails/';