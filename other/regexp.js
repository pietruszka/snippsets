
const removeHTML = (element) => {
    let pattern = new RegExp('(<.+?>)', 'g');
    return element.replace(pattern, '');
};

const removeMarkdown = (element) => {

};

let text = `<div class="d">a</div><p>b<h1>c</h1></p>`;

console.log(removeHTML(text));