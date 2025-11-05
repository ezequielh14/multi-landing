import { motion } from "framer-motion";
const products = [
    {
        name: "Auriculares Pro X",
        price: "$45.000",
        img: "https://i.ibb.co/kgmV3j4t/istockphoto-1246138278-1024x1024.jpg",
    },
    {
        name: "Smartwatch Active",
        price: "$70.000",
        img: "https://i.ibb.co/rKQ7Yvyx/emiliano-cicero-OKZqs-Vseko-unsplash.jpg",
    },
    {
        name: "Zapatillas Urban Fit",
        price: "$60.000",
        img: "https://i.ibb.co/FbJydTPx/daniel-lim-2878b-Ww5-Zx-U-unsplash.jpg",
    },
];
export default function ProductGrid() {
    return (
        <section id="productos" className="py-20 px-6 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">
                Nuestros Productos
            </h2>
            <div className="grid sm:grid-cols-3 gap-8">
                {products.map((p, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.2 }}
                        className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
                    >
                        <img
                            src={p.img}
                            alt={p.name}
                            className="w-full h-64 object-cover"
                        />
                        <div className="p-6 text-center">
                            <h3 className="font-semibold text-lg mb-2">
                                {p.name}
                            </h3>
                            <p className="text-green-600 font-bold mb-3">
                                {p.price}
                            </p>
                            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
                                Comprar
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
