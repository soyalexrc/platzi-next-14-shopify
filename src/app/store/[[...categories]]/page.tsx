
interface Props {
    params: {
        categories: string[];
    },
    searchParams?: string
}

export default function Page({ params: {categories}, searchParams }: Props) {
    console.log(typeof searchParams);
    return (
        <div>
            /store/{categories.map(c => `${c}, `)}
        </div>
    )
}
