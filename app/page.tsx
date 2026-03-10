import Link from "next/link";

export default function Home() {
    return (
        <div className="flex flex-col p-4">
            <h1 className="text-2xl">Next restos</h1>
            <p>Le meilleur site pour referencer les restos de Paris pour manger le midi</p>
            <Link className="text-purple-400" href="/restos">
                Accéder aux restos
            </Link>
        </div>
    );
}
