import { createContext, ReactNode, useState } from "react";
import { productsProps } from "../pages/home";

interface CartContextData{
    cart: CartProps[];
    cartAmount: number;
    addItemCart: (newItem: productsProps) => void;
    removeItemsCart: (product: CartProps) => void;
    total: string
}

interface CartProps{
    id: string;
    title: string;
    description: string;
    price: number;
    cover: string;
    amount: number;
    total: number;
}

interface CartProviderProps{
    children: ReactNode;
}

export const CartContext = createContext({} as CartContextData)

function CartProvider({children}: CartProviderProps){

    const [cart, setCart] = useState<CartProps[]>([])
    const [total, setTotal] = useState("")
    

    function addItemCart(newItem: productsProps){
        const indexItem = cart.findIndex(item => item.id === newItem.id)

        if(indexItem !== -1){
            let cartList = [...cart];

            cartList[indexItem] = {
                ...cartList[indexItem],
                amount: cartList[indexItem].amount + 1,
                total: (cartList[indexItem].amount + 1) * cartList[indexItem].price
            };
            setCart(cartList) 
            totalResulCart(cartList)
            return;           
        } else {
            let data = {
                ...newItem,
                amount: 1,
                total: newItem.price
            };
            setCart(prevCart => [...prevCart, data]);
            totalResulCart([...cart, data]);
        }
    

    }

    function removeItemsCart(product: CartProps){
        const indexItem = cart.findIndex(item => item.id === product.id)

        if(cart[indexItem]?.amount > 1){
            let cartList = cart;

            cartList[indexItem].amount = cartList[indexItem].amount - 1;
            cartList[indexItem].total = cartList[indexItem].total - cartList[indexItem].price;

            setCart(cartList)
            totalResulCart(cartList)
            return;
        }
        const removeItems = cart.filter(item => item.id !== product.id)
        setCart(removeItems)
    }

    function totalResulCart(items: CartProps[]){
        let myCart = [...items];
        let result = myCart.reduce((acc, obj) => {return acc + obj.total}, 0 )
        const resultFormated = result.toLocaleString("pt-br", {style: "currency", currency: "BRL"})
        setTotal(resultFormated)
        

    }


    return(
        <CartContext.Provider value={{
            cart,
            cartAmount: cart.length,
            addItemCart,
            removeItemsCart,
            total
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;