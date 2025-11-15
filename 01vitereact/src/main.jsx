import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
    // VARIABLES
    const username = "chai aur code"
    return (
        <div>
            <h1>Custom App | {username}</h1>
            {/* {} -> Evaluated expression */}
        </div>
    )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: "https://google.com",
//         target: "_blank"
//     },
//     children: 'Click me to visit google'
// }

const anotherElement = (
    <a href="https://google.com" target="_blank">Visit Gooogle</a>
)

const anotherUser = "chai aur react"
// how to inject variables in this
// TREE FORMATION -> THEN VARIABLE INJECTIONS COME
// so anotherUser will automatically go inside ReactElem


// so creating element acc to react
// REACT RENDER
const ReactElem = React.createElement(
    'a',
    {href: "https://google.com", target: "_blank"},
    "Click me to visit google",
    anotherUser
    // can't write if, else etc here
    // evaluated expressiona written here as they as it is go to browser
)

createRoot(document.getElementById('root')).render(
    // <MyApp />
    // MyApp()
    // < ReactElement />
    // But function expected, not object
    // ReactElement // did not worked due to syntax
    // anotherElement // worked
    ReactElem // worked
    // <App/>
    // <MyApp/>
)

// If MyApp is a function Then how it's written in JSX
// Converting syntaxes is work of bundler
// html syntax -> parsed to -> object


// If returned HTML is converted to the object then why not to pass object directly


// The object did not work but the HTML inside another object worked So it is because maybe the syntax that we are writing inside the object, the key value pairs are not according to the syntax
