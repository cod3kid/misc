import React, { useState } from "react";

const Folder = ({ explorer }) => {
  const [isExanded, setExapanded] = useState(false);
  const hasChildren = explorer?.children?.length > 0;
  return (
    <div>
      <span
        style={{ fontWeight: hasChildren ? "bold" : "400" }}
        onClick={() => setExapanded((prev) => !prev)}
      >
        {explorer.name}
      </span>
      {isExanded &&
        hasChildren &&
        explorer.children.map((item) => (
          <span key={item.name}>
            <Folder explorer={item} />
          </span>
        ))}
    </div>
  );
};

export default Folder;
