import {getRestoById} from "@/lib/data/restos";

type Props = {params: Promise<{resto_id: string}>};

export default async function Page({params}: Props) {
    const {resto_id} = await params;
    const resto = getRestoById(parseInt(resto_id, 10));
    if (resto === undefined) {
        return <div>Resto not found</div>;
    }
    return <div>TODO: resto {resto.titre}</div>;
}
