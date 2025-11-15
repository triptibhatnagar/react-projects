function customRender(reactElement, container) {
    // create dom element and inject it

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    /*
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)
    
    container.appendChild(domElement)
    */
   
    // adding loops
    for (const prop in reactElement.props) {
        if (prop === 'children')
            continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}

// SIMULATING RETURN HTML ELEMENT IN COMPONENT
//      BTS of returning <a> tag - how react sees it
//      react tries to make a tree of element
const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: "_blank"
    },
    children: 'Click me to visit google'
}

// Selecting element
const mainContainer = document.querySelector('#root')

// Render function(what, where)
customRender(reactElement, mainContainer)
