import { useState } from "react";
export default function ContactForm() {
    const [sent, setSent] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setSent(true);
    };
    return (
        <section className="py-20 px-6 bg-gradient-to-br from-purple-600 via-fuchsia-500 to-cyan-400 text-white text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">Contactanos</h2>
            <form
                onSubmit={handleSubmit}
                className="max-w-md mx-auto bg-white/10 backdrop-blur-md p-6 rounded-2xl"
            >
                <input
                    required
                    className="w-full p-3 rounded-lg mb-4 text-gray-800"
                    placeholder="Tu nombre"
                />
                <input
                    required
                    className="w-full p-3 rounded-lg mb-4 text-gray-800"
                    placeholder="Tu email"
                />
                <textarea
                    required
                    rows="4"
                    className="w-full p-3 rounded-lg mb-4 text-gray-800"
                    placeholder="Tu mensaje"
                ></textarea>
                <button
                    type="submit"
                    className="bg-white text-purple-700 font-semibold py-3 px-8 rounded-full"
                >
                    Enviar mensaje
                </button>
                {sent && (
                    <p className="mt-4 text-green-100">¡Mensaje enviado!</p>
                )}
            </form>
        </section>
    );
}
