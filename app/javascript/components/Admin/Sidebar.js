import { Link, useRouteMatch } from "react-router-dom";

function Sidebar() {
  const { url } = useRouteMatch();

  return (
    <div className="relative flex-1 flex flex-col max-w-xs w-full bg-gray-800">
      <div className="flex flex-col">
        <a
          href="/admin"
          className="h-16 bg-gray-900 flex justify-center items-center"
        >
          <h1 className="text-2xl text-indigo-600 font-bold tracking-wide">
            Trail
          </h1>
        </a>
        <div className="h-0 flex-1 flex flex-col overflow-y-auto">
          <nav className="flex-1 px-2 py-4 bg-gray-800 text-gray-300">
            <Link
              to={`${url}`}
              className="group flex items-center px-2 py-2 text-base leading-5 font-medium rounded-md focus:outline-none focus:bg-gray-700 transition ease-in-out duration-150"
            >
              Dashboard
            </Link>
            <Link
              to={`${url}/stations`}
              className="mt-1 group flex items-center px-2 py-2 text-base leading-5 font-medium rounded-md focus:outline-none focus:bg-gray-700 transition ease-in-out duration-150"
            >
              Stations
            </Link>
            <Link
              to={`${url}/suppliers`}
              className="mt-1 group flex items-center px-2 py-2 text-base leading-5 font-medium rounded-md focus:outline-none focus:bg-gray-700 transition ease-in-out duration-150"
            >
              Suppliers
            </Link>
            <Link
              to={`${url}/cylinders`}
              className="mt-1 group flex items-center px-2 py-2 text-base leading-5 font-medium rounded-md focus:outline-none focus:bg-gray-700 transition ease-in-out duration-150"
            >
              Cylinders
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
