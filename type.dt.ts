
interface IImage {
    _type:string
    assets:{
        _ref:string
        _type:string
    }
}


interface IProducts {
    name:string
    price:number
    discountPercent:number
    description:string
    image:IImage
    slug:{current:string}
    id:number
    category:string
    colors:string[]
    sizes:string[]

}