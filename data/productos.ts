export interface ProductosTarjeta {
  id: string
  nombre: string
  imagen: string
  precio: number
  cuotas: string
  envioGratis?: boolean
  descuento?: number
  agotado?: boolean
}

export const productos: ProductosTarjeta[] = [
  {
    id: "iphone-16-pro",
    nombre: "Apple iPhone 16 PRO",
    imagen: "/images/iphone16pro.png",
    precio: 1399,
    cuotas: "12x sin interés",
    envioGratis: true,
    descuento: 10,
    agotado: false,
  },
  {
    id: "iphone-15",
    nombre: "Apple iPhone 15",
    imagen: "/images/iphone.png",
    precio: 999,
    cuotas: "10x sin interés",
    envioGratis: false,
    descuento: 0,
    agotado: true,
  },
  {
    id: "iphone-6",
    nombre: "Apple iPhone SE",
    imagen: "/images/iphonese.png",
    precio: 499,
    cuotas: "6x sin interés",
    envioGratis: true,
    agotado: false,
  },

  {
    id: "iphone-8",
    nombre: "Apple iPhone SE",
    imagen: "/images/iphonese.png",
    precio: 499,
    cuotas: "6x sin interés",
    envioGratis: true,
    agotado: false,
  },
  {
    id: "iphone-10",
    nombre: "Apple iPhone SE",
    imagen: "/images/iphonese.png",
    precio: 499,
    cuotas: "6x sin interés",
    envioGratis: true,
    agotado: false,
  },
]
