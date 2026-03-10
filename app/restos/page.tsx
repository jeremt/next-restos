import {listRestos} from "@/lib/data/restos";
import Link from "next/link";

export default function Page() {
    const restos = listRestos();

    return (
        <div className="p-4">
            <h1 className="text-center text-2xl">Restos</h1>
            <div className="flex flex-col gap-4 p-4">
                {restos.map((resto) => (
                    <div key={resto.id} className="bg-purple-100 rounded-2xl p-4">
                        <h2 className="font-bold text-lg">{resto.titre}</h2>
                        <p>{resto.description}</p>
                        <Link className="text-purple-600" href={`/restos/${resto.id}`}>
                            Voir détails
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
