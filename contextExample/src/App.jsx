import { createContext } from "react";
import Heading from "./Heading";
import Post, { AllPosts } from "./Posts";
import Section from "./Section";
import "./App.css"


export const LevelContext = createContext(0);
export default function App() {
    return (
        <Section>
            <Heading>My Profile</Heading>
            <Post title="Hello Traveller" body="Read About my adventures" />
            <AllPosts />
        </Section>
    )
}