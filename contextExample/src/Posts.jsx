import Heading from "./Heading"
import Section from "./Section"

export default function Post({ title, body }) {
    return (
        <Section isFancy={true}>
            <Heading>
                {title}
            </Heading>
            <p>{body}</p>
        </Section>
    )
}

export function AllPosts() {
    return (
        <Section>
            <Heading>
                Posts
            </Heading>
            <RecentPosts />
        </Section>
    )
}

export function RecentPosts() {
    return (
        <Section>
            <Heading>
                Recent Posts
            </Heading>
            <Post title="The battle of musical chairs" body="Among this cruel world where I live..." />
            <Post title="The battle of Basketball" body="There used to be time of prosperity and..." />
        </Section>
    )
}