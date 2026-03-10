type Props = {
    params: Promise<{section: string}>;
};

export default async function Page({params}: Props) {
    const {section} = await params;
    return <div>About {section}</div>;
}
