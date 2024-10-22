function customRender(reactElement,container){

    const newElement = document.createElement(reactElement.type);
    newElement.innerHTML = reactElement.children;
    for(const prop in reactElement.props){
        newElement.setAttribute(prop,reactElement.props[prop]);
    }
    container.appendChild(newElement);
}


const reactElement = {
    type: "a",
    props:{
        href: "https://www.google.com",
        target: "_blank",
    },
    children: "Click me to visit Google",
};



const mainContainer = document.getElementById("root");

customRender(reactElement,mainContainer);