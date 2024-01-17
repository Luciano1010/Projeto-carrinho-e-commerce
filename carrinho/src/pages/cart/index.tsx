export function Cart(){
    return(
        <div className="w-full max-w-6xl mx-auto">
            <h1 className="font-medium text-2xl text-center my-4">Meu Carrinho</h1>
            <section className="flex items-center justify-between border-b-2 border-gray-300"
            >
            <img
            src="https://media.istockphoto.com/id/1204039347/pt/foto/apple-airpods-on-a-white-background.jpg?s=612x612&w=0&k=20&c=vVFTMoQ1WCP-HRa1vLT2JxfkEjy73ThQG7KpMzUtIT4="
            alt="Logo do Produto"
            className="w-28"
            />

            <strong>Preço: R$1.000</strong>

            <div className="flex item-center justify-center gap-3">
                <button className="bg-slate-600 px-2  rounded text-white font-medium flex items-center justify-center">
                     -
                </button>
             1
                <button className="bg-slate-600 px-2  rounded text-white font-medium flex items-center justify-center">
                     +
                </button>
            </div>

            <strong className="float-right">
                Subtotal: R$1.000
            </strong>

            </section>

            <p className="font-bold mt-4">Total: R$1.000</p>
        </div>
    )
            
}