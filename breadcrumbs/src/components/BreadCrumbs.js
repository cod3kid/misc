import { useLocation, Link } from "react-router-dom";
const BreadCrumbs = () => {
  const { pathname } = useLocation();
  const allPaths = pathname.split("/").filter((path) => path);
  console.log(allPaths);
  let breadcrumbsPath = "";

  return (
    <div>
      <Link to="/">Home</Link>{" "}
      {allPaths.map((path, idx) => {
        breadcrumbsPath += `/${path}`;

        const isLastPath = idx === allPaths.length - 1;

        return isLastPath ? (
          <span>/ {path}</span>
        ) : (
          <>
            /<Link to={`${path}`}>{path}</Link>
          </>
        );
      })}
    </div>
  );
};

export default BreadCrumbs;
