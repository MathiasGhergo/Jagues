const products =[
    { id:"1", name: "Charlotte", price: 4999 , category: "Mujer"},
    { id:"2", name: "Mumbai", price: 5499 , category: "Mujer"},
    { id:"3", name: "Venecia", price: 4499 , category: "Mujer"},
    { id:"4", name: "Atenas", price: 5999 , category: "Mujer"},
    { id:"5", name: "Esparta", price: 5299 , category: "Hombre"},
    { id:"6", name: "Manhattan", price: 5999 , category: "Hombre"},
    { id:"7", name: "Arizona", price: 5299 , category: "Hombre"},
    { id:"8", name: "Detroit", price: 6699 , category: "Hombre"},
];
 export const getProduct =(id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          const product =products.find(p => p.id === id);
          if(product){
            resolve(product);
          }  else{
            reject(new Error("No se encontró el producto"));
          }
        }, 1000);
    });
};
export const getProducts = (category) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const productsFiltered = category
            ? products.filter(product => product.category === category) 
            : products;
            resolve(productsFiltered);
        }, 1000);
    });
};