import { FaAngleRight } from "react-icons/fa";
import { Link, useLocation } from "react-router";

const Breadcrumb = () => {
  const location = useLocation();
  const pathname = location.pathname;
  console.log(pathname);
  const pathSegments = pathname.split("/").filter((segment) => segment !== "");
  console.log(pathSegments);
  // ["about", "one", "kk"];
  const breadcrumb = pathSegments.map((item, index) => {
    const href = "/" + pathSegments.slice(0, index + 1).join("/");
    return {
      name: item,
      href,
    };
  });

  return (
    <div className="flex gap-2">
      <ul className="flex items-center">
        <li className="list-none flex items-center">
          <Link to="/">Home</Link>
        </li>
        {breadcrumb.map((item, index) => (
          <li
            key={index}
            className="list-none flex items-center flex-row-reverse"
          >
            <Link to={item.href}>{item.name}</Link>
            <FaAngleRight className="mx-2" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Breadcrumb;
