
interface Props {
    params: {
        category: string;
    }
}

export default function Page({ params: {category} }: Props) {
    return (
        <div>
            /store/{category}
        </div>
    )
}
