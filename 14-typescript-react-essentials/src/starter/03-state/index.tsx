import { useState } from "react";

type Link = {
    id: number;
    url: string;
    text: string
}

const navLinks = [
    {
        id: 1,
        url: 'some url',
        text: 'some text',
    },
    {
        id: 2,
        url: 'some url',
        text: 'some text',
    },
    {
        id: 3,
        url: 'some url',
        text: 'some text',
    },
]

function Component() {

    const [text, setText] = useState<string>('shkeAndBake')
    const [number, setNumber] = useState<number>(1);
    const [list, setList] = useState<string[]>([])
    const [links, setLinks] = useState<Link[]>([]);

    return (
        <div>
            <h2 className="mb-1">React & Typescript</h2>
            <button className="btn btn-center" onClick={() => {
                setLinks([...navLinks, { id: 4, url: 'hello', text: 'world' }])
            }}>click me</button>
            <div>{links.map(item => {
                return <div key={item.id}>
                    {item.id}
                </div>
            })}</div>
        </div>
    );
}
export default Component;
