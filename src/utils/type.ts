export interface IBooks {
    id: number;
    title: string;
    nameBtn: string;
    imgSrc: boolean;
    author: string;
    statusBtn: string;
    statusStar: boolean;
    imagesSlider?: string[]
}

export interface IArrRoutes {
    id: number;
    path: string;
    name?: string;
    count?: number
}

export interface IControl {
    togleBgColor: () => void;
    bgColor: boolean;
  }

//   export interface IBookswrapper {

//     closeBurger: () => void
//   }

  export interface IBurger {
    toggleBurger?: () => void;
    addArrowOrange?: () => void;
    removeArrowOrange?: () => void;
    burger?: boolean;
    colorArrowOrange?: boolean;
    widtnScreen?: number;
    closeBurger: () => void;
    idbook?: number | string;
    widthScreenRes?: number
    bgColor?: boolean;
  }

  export interface ISearch {
    toggleSearch: () => void;
  }

  export interface IImgSlider {
    imagesSliderArr?: string[]
  }



/// ///////////////////////
  export interface IBookcateg {
    id: number;
    userId: number;
  }
  export interface IBoooksingle {
    issueYear: string;
    rating: string;
    title: string;
    authors: string[];
    image: { url: string };
    categories: string[];
    id: number;
    booking?: null | IBookcateg[];
    delivery?: null | IBookcateg[];
    histories?: null | IBookcateg[];
  }
  export interface IBoooks {
    books: IBoooksingle[];
    loadingBoook: boolean;
    errorBook: string | null;
  }

  export interface ICategory {
    name: string;
    path: string;
    id: number;
  }

  export interface ICategorys {
    category: ICategory[];
    loadingCategory: boolean;
    error: string | null;
  }

//   export interface ISingleBook {
//     id: number;
//     title: string;
//     rating: number;
//     issueYear: string;
//     description: string;
//     publish: string;
//     pages: string;
//     cover: string;
//     weight: string;
//     format: string;
//     ISBN: string;
//     producer: string;
//     authors: string[];
//     images: object[];
//     categories: string[];
//     comments?: [
//         {
//             id: number;
//             rating: number;
//             text: string;
//             createdAt: string;
//             user: {
//                 commentUserId: number;
//                 firstName: string;
//                 lastName: string;
//                 avatarUrl: null
//             }
//         }
//     ] | null;
//     booking: {
//         id: number;
//         order: boolean;
//         dateOrder: string;
//         customerId: number;
//         customerFirstName: string;
//         customerLastName: string;
//     } | null;
//     delivery?: null;
//     histories?: null;
//   }

//   export interface ISingleBookState {
//     bookSingle: ISingleBook;
//     loadingBoookSingle: boolean;
//     error: string | null;
//   }

