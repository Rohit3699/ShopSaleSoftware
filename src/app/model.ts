export interface Root {
    message: string
    statusCode: number
    verson: string
    data: Daum[]
  }
  
  export interface Daum {
    productId: number
    parentId: number
    name: string
    price: number
    isReturnable: boolean
    productImage: string
    brand: string
  }