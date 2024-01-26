import { useContext, useEffect, useState, } from "react"
import { CartContext } from "../../contexts/CartContext"
import { useNavigate, useParams } from "react-router-dom"
import { api } from "../../service/api"
import { productsProps } from "../home"
import toast from "react-hot-toast"
import { BsCartPlus } from "react-icons/bs"


export function Detail() {

    const { addItemCart } = useContext(CartContext)
    const { id } = useParams()
    const navigate = useNavigate()

    const [products, setProducts] = useState<productsProps>()

    useEffect(() => {
        async function getProducts() {
            const response = await api.get(`/products/${id}`)
            setProducts(response.data)
        }

        getProducts();
    }, [id])

    function handleCartItems(product: productsProps) {
        toast.success("Produto adicionado no carrinho")
        addItemCart(product);
        navigate("/cart")

    }

    return (
        <div className="w-full max-w-6xl mx-auto">
            <main className="w-full max-w-6xl px-4 mx-auto my-6">
                <h1 className="font-bold text-2xl mb-4 mt-10 text-center">
                    Detalhe do Produto
                </h1>
                {products && (
                    <section className="w-full">
                        <div className="flex flex-col lg:flex-row">
                            <img 
                            className="flex-1 w-full max-h-72 object-contain"
                            src={products?.cover}
                            alt={products?.title}
                            />
                            <div className="flex-1">
                                <p className="font-bold text-2xl mt-4 mb-2 ">
                                    {products?.title}
                                </p>
                                <p className="my-4">
                                    {products?.description}
                                </p>
                                <strong className="text-zinc-700/90 text-xl">Preço: {products.price.toLocaleString("pt-BR", {
                                    style: "currency",
                                    currency: "BRL"
                                })}</strong>
                                 <button className="bg-zinc-900 p-1 rounded ml-3 " onClick={() => handleCartItems(products)}>
                                    <BsCartPlus size={20} color="#fff" />
                                </button>

                            </div>
                        </div>
                    </section>
                )}

            </main>
        </div>
    )
}


