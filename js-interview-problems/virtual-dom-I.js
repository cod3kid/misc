const root = document.getElementById("root");

const virtualDOM = (root) => {
  const virtualTree = {
    type: root.tagName.toLowerCase(),
  };

  const props = {};
  const children = [];

  if (root.hasAttributes()) {
    const attributes = root.attributes;
    for (let i = 0; i < attributes.length; i++) {
      const name = attributes[i].name;
      const value = attributes[i].value;

      if (name === "class") {
        props["className"] = value;
      } else {
        props[name] = value;
      }
    }
  }

  if (root.childNodes.length > 0) {
    for (let i = 0; i < root.childNodes.length; i++) {
      const node = root.childNodes[i];

      if (node.nodeType === Node.TEXT_NODE) {
        const text = node.textContent.trim().replace("\n", "");
        if (text.length > 0) {
          children.push(node.textContent.trim());
        }
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        children.push(virtualDOM(node));
      }
    }
  }

  if (children.length > 0) {
    props.children = children.length === 1 ? children[0] : children;
  }

  virtualTree.props = props;

  return virtualTree;
};

console.log(virtualDOM(root));
