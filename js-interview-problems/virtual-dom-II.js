const virtualDOM = {
  type: "div",
  props: {
    id: "root",
    children: [
      {
        type: "h1",
        props: {
          children: "We have",
        },
      },
      {
        type: "div",
        props: {
          className: "container",
          children: [
            "successfully",
            {
              type: "a",
              props: {
                href: "https://google.com",
                target: "_blank",
                children: "implemented a",
              },
            },
            {
              type: "button",
              props: {
                children: "Custom",
              },
            },
            {
              type: "p",
              props: {
                children: [
                  {
                    type: "strong",
                    props: {
                      className: "bold",
                      children: "Virtual DOM",
                    },
                  },
                  {
                    type: "span",
                    props: {
                      children: "Implementation",
                    },
                  },
                ],
              },
            },
          ],
        },
      },
    ],
  },
};

const renderDOM = (vDOM) => {
  if (typeof vDOM !== "object") {
    return document.createTextNode(vDOM);
  }

  const { type, props } = vDOM;

  const root = document.createElement(type);

  const { children, ...attrProps } = props;

  Object.keys(attrProps).forEach((attr) => {
    const value = attrProps[attr];
    root.setAttribute(attr, value);
  });

  if (Array.isArray(children)) {
    children.forEach((child) => {
      let childEl = renderDOM(child);
      root.appendChild(childEl);
    });
  } else {
    let childEl = renderDOM(children);
    root.appendChild(childEl);
  }
  return root;
};

document.body.appendChild(renderDOM(virtualDOM));
