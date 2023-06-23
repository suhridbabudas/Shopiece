export interface APIQuery<T> {
    URL: string; 
    payload?: {[key:string]: string | number | Date | Array<T> | Object | null | undefined};
    options?: {[key:string]: string | number | Date | Array<T> | Object | null | undefined};
    limit?: number;
    sortby?: string;
    skip?: number
}