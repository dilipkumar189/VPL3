import { Outlet } from "react-router-dom";

import {
  Home,
  HallOfFame,
  TeamView,
  Sponser,
  Team,
  Advertiser,
  Rules,
  AboutUs,
  ContactUs,
  Profile,
  EditProfile,
  Teamform,
  // Teamform2,
  Login,
  SignUp,
  // Dteamform
} from "../User/Pages";

import {
  Dashboard,
  User,
  ATeam,
  AAdvertiser,
  Advertiserform,
  SType,
  STypeform,
  FSponser,
  FSponserform,
  OSponser,
  OSponserform,
  AProfile,
  AProfileform,
} from "../Admin/Pages";

const userRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/halloffame",
    element: <HallOfFame />,
  },
  {
    path: "/teamview",
    element: <TeamView />,
  },
  {
    path: "/sponser",
    element: <Sponser />,
  },
  {
    path: "/team",
    element: <Team />,
  },
  {
    path: "/advertiser",
    element: <Advertiser />,
  },
  {
    path: "/rules",
    element: <Rules />,
  },
  {
    path: "/aboutus",
    element: <AboutUs />,
  },
  {
    path: "/contactus",
    element: <ContactUs />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/editprofile",
    element: <EditProfile />,
  },
  {
    path: "/addteam",
    element: <Teamform />,
  },
  // {
  //   path: "/addteam2",
  //   element: <Teamform2 />,
  // },
  // {
  //   path: "/daddteam",
  //   element: <Dteamform />,
  // },
];

function AdminLayout() {
  return (
    <div>
      {/* Add any common admin layout elements here */}
      <Outlet />
    </div>
  );
}

const adminRoutes = [
  {
    path: "/admin/",
    element: <AdminLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "users", element: <User /> },
      { path: "teams", element: <ATeam /> },
      { path: "advertisers", element: <AAdvertiser /> },
      { path: "advertiserform", element: <Advertiserform /> },
      { path: "sponsertype", element: <SType /> },
      { path: "sponsertypeform", element: <STypeform /> },
      { path: "fsponser", element: <FSponser /> },
      { path: "fsponserform", element: <FSponserform /> },
      { path: "osponser", element: <OSponser /> },
      { path: "osponserform", element: <OSponserform /> },
      { path: "profile", element: <AProfile /> },
      { path: "profileform", element: <AProfileform /> },
    ],
  },
];

export { userRoutes, adminRoutes };
