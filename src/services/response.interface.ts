export interface RAnimeItem{
    mal_id:number,
    title:string,
    rating:string,
    score:number,
    year:number,
    images: AnimeItemImage
}

export interface AnimeItemImage {
    webp: Image
    
}

export interface Image{
    image_url:string;
    small_image_url:string;
    large_image_url:string;
}