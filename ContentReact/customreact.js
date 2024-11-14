function customRender(reactElement, container) {
    // Create a DOM element based on the reactElement type
    const domElement = document.createElement(reactElement.type);

    // Set the innerHTML to the text from the children property
    domElement.innerHTML = reactElement.props.children;

    // Set attributes if the element is a link
    if (reactElement.type === 'a') {
        domElement.setAttribute('href', reactElement.props.href);
        domElement.setAttribute('target', reactElement.props.target);
    }

    // Append to container
    container.appendChild(domElement);
}

// Define a react-like element
const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: '_blank',
        children: 'Click me to visit Google'
    }
};

// Correctly select the root container
const mainContainer = document.getElementById('root');
customRender(reactElement, mainContainer);
