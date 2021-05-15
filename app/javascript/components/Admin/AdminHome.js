import React, { useEffect, useState } from "react";
import { Route, useHistory, useRouteMatch } from "react-router-dom";
import { isLoggedIn } from "Apis/Admin/Auth";

import Header from "./Header";
import Sidebar from "./Sidebar";
import Supplier from "./Supplier";

function AdminHome() {
  const history = useHistory();
  const { path } = useRouteMatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const login = () => {
      setLoading(true);
      const token = localStorage.getItem("admin-auth-token");
      if (!token) {
        history.push("/admin/login");
      } else {
        isLoggedIn();
      }
      setLoading(false);
    };

    login();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <Sidebar />
      <div className="flex flex-col w-0 flex-1 overflow-auto">
        <Header />
        <Route path={`${path}supplier`}>
          <Supplier />
        </Route>
      </div>
    </div>
  );
}

export default AdminHome;
