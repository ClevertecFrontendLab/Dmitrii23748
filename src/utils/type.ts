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
    loading: boolean;
    error: string | null;
  }
