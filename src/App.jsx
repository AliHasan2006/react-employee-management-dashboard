import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./contexts/AuthProvider";

function App() {
  const [userRole, setUserRole] = useState(null);
  const [userData, setUserData] = useState(null);

  const authData = useContext(AuthContext);

useEffect(() => {
  const storedUser = localStorage.getItem("loggedInUserData");

  if (!storedUser) return;

  try {
    const parsedUser = JSON.parse(storedUser);
    setUserRole(parsedUser.role);
    setUserData(parsedUser.data);
  } catch (error) {
    console.error("Invalid localStorage data");
    localStorage.removeItem("loggedInUserData");
  }
}, []);

  const handleLogin = (email, password) => {
    if (email === "admin@example.com" && password === "123") {
      const admin = authData.adminData;

      setUserRole("admin");
      setUserData(admin);
      console.log(userData);

      localStorage.setItem(
        "loggedInUserData",
        JSON.stringify({ role: "admin", data: admin })
      );
      return;
    }

    const employee = authData.employeesData.find(
      (e) => e.email === email && e.password === password
    );

    if (employee) {
      setUserRole("employee");
      setUserData(employee);

      localStorage.setItem(
        "loggedInUserData",
        JSON.stringify({ role: "employee", data: employee })
      );
      console.log(userData);
    } else {
      alert("Invalid credentials");
    }
  };

  // prevent early render
  if (userRole && !userData) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      {!userRole && <Login handleLogin={handleLogin} />}

      {userRole === "admin" && <AdminDashboard data={userData} />}
      {userRole === "employee" && <EmployeeDashboard data={userData} />}
    </>
  );
}

export default App;
