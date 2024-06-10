'use client'

import {Simulate} from "react-dom/test-utils";

export default function Error(props: ErrorPageProps) {
    return (
        <div style={{
            padding: '10rem',
        }}>
            <h1>:(</h1>
            <p> ha ocurrido un error</p>
            <button onClick={props.reset}>Intentar de nuevo</button>
        </div>
    )
}
