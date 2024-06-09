import { Hero } from "@/components/home/Hero"
import { Description } from "@/components/home/Description"

export default function HomeLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Hero />
            <Description />
            {children}
        </div>
    )
}
