import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashSideBar from "../components/DashSideBar";
import DashProfile from "../components/DashProfile";
import DashPosts from "../components/DashPosts";
const Dashboard = () => {
  const locaation = useLocation();
  const [tab, settab] = useState();
  useEffect(() => {
    const urlParams = new URLSearchParams(locaation.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      settab(tabFromUrl);
    }
  }, [location.search]);
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="md:w-56">
        {/* SideBar */}
        <DashSideBar />
      </div>
      {/* Profile */}
      {tab === "profile" && <DashProfile />}
      {/*Posts*/}
      {tab === "posts" && <DashPosts />}
    </div>
  );
};

export default Dashboard;
