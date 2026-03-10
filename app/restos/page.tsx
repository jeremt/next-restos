import {listRestos} from "@/lib/data/restos";

export default function Page() {
    const restos = listRestos();
    return (
        <div className="p-4">
            <h1 className="text-center text-2xl">Restos</h1>
            <div className="flex flex-col gap-4 p-4">
                {restos.map((resto) => (
                    <div key={resto.id}>
                        <h2 className="font-bold">{resto.titre}</h2>
                        <p>{resto.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
