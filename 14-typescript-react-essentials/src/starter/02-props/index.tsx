import { type PropsWithChildren } from "react";
import React from "react";

// type ComponentProps = {
//     name?: string;
//     id: number;
//     children?: React.ReactNode;
// };
type ComponentProps = PropsWithChildren<{
    name?: string;
    id: number;
}>;
// type ComponentProps = {
//     name?: string;
//     id: number;
// } & { children?: React.ReactNode; };

function Component(props: ComponentProps) {
    return (
        <div>
            <h2>Name: {props.name}</h2>
            <h2>id: {props.id}</h2>
            {props.children}
        </div>
    );
}
export default Component;
