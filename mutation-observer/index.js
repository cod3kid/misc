const mutationObserver = new MutationObserver((entries) => {
  console.log(entries);
});

const parent = document.getElementById("parent");

// mutationObserver.observe(parent,{childList:true})

// If attributeFilter is set, then mutation observer will only respond to changes of those attributes mentioned
// mutationObserver.observe(parent,{attributes:true, attributeOldValue:true, attributeFilter:['title']})

// We are using it at the child node level as text is a Node itself
mutationObserver.observe(parent, {
  characterData: true,
  characterDataOldValue: true,
  subtree: true,
});

parent.children[0].remove();
parent.appendChild(document.createElement("div"));
parent.id = "hello";
parent.title = "New Title";
parent.children[0].childNodes[0].textContent = "Mello";

// To disconnect the mutation observer
// mutationObserver.disconnect()
