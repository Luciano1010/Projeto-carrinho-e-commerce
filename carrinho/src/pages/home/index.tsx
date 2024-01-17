import { BsCartPlus } from "react-icons/bs"
export function Home(){
    return(
        <div>
           <main className="w-full max-w-7xl px-4 mx-auto">
            <h1 className="font-bold text-2xl mb-4 mt-10 text-center">
                Produtos em alta 
            </h1>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
                <section className="w-full ">
                    <img
                        className="w-full rounded-lg max-h-70 mb-2"
                        src="https://media.istockphoto.com/id/1204039347/pt/foto/apple-airpods-on-a-white-background.jpg?s=612x612&w=0&k=20&c=vVFTMoQ1WCP-HRa1vLT2JxfkEjy73ThQG7KpMzUtIT4="
                    alt="Logo do Produto"
                    />
                    <p className="font-medium mt-2 mb-2">Air pod</p>
                    <div className="flex gap-3 items-center">
                        <strong className="text-zinc-700/100 ">R$:1000</strong>
                        <button className="bg-zinc-900 p-1 rounded">
                            <BsCartPlus size={20} color="#fff"/>    
                        </button>
                    </div>
                    

                </section>
            </div>

           </main>
        </div>
    )
}