import {
  LuCalendar,
  LuChartNoAxesColumnIncreasing,
  LuFolder,
  LuLayoutDashboard,
  LuNetwork,
  LuSettings,
  LuUserRound,
} from "react-icons/lu";
import avatar from "../assets/images/avatar.svg";

export const sidebarItems = [
  {
    id: 1,
    name: "Dashboard",
    icon: <LuLayoutDashboard />,
    path: "/dashboard",
  },
  {
    id: 2,
    name: "Content",
    icon: <LuFolder />,
    path: "/dashboard/content",
  },
  {
    id: 3,
    name: "Calendar",
    icon: <LuCalendar />,
    path: "/dashboard/calendar",
  },
  {
    id: 4,
    name: "Accounts",
    icon: <LuUserRound />,
    path: "/dashboard/accounts",
  },
  {
    id: 5,
    name: "Automations",
    icon: <LuNetwork />,
    path: "/dashboard/automations",
  },
  {
    id: 6,
    name: "AI",
    icon: <LuNetwork />,
    path: "/dashboard/ai",
  },
  {
    id: 6,
    name: "Analytics",
    icon: <LuChartNoAxesColumnIncreasing />,
    path: "/dashboard/analytics",
  },
  {
    id: 7,
    name: "Settings",
    icon: <LuSettings />,
    path: "/dashboard/settings",
  },
];

export const connectedAccounts = [
  {
    id: 1,
    name: "Social account",
  },
  {
    id: 2,
    name: "Content summary",
  },
  {
    id: 3,
    name: "Schedule",
  },
  {
    id: 4,
    name: "Action",
  },
  {
    id: 5,
    name: "Delete",
  },
];

export const testAccounts = [
  {
    id: 1,
    name: "Precious Njoku",
    img: avatar,
    socialMedia: "Facebook Profile",
    noOfPosts: 0,
  },
  {
    id: 2,
    name: "Precious Njoku",
    img: avatar,
    socialMedia: "Facebook Profile",
    noOfPosts: 0,
  },
];

export const profileSidebar = [
  {
    id: 1,
    name: "Subscription",
  },
  {
    id: 2,
    name: "Pricing",
  },
];

export const profileSidebarTwo = [
  {
    id: 3,
    name: "Social Accounts",
  },
  {
    id: 4,
    name: "Log out",
  },
];

export const teamSampleData = [
  {
    id: 1,
    name: "User",
    email: "Smart (smart@gmail.com)",
    role: "Content Creator",
    image: avatar,
  },
  {
    id: 2,
    name: "User",
    email: "Jasper (jasper@gmail.com)",
    role: "Manager",
    image: avatar,
  },
];

export const permissionsSampleData = [
  {
    id: 1,
    action: "Content Approver",
    admin: "Yes",
    contentApproved: "No",
    socialMediaManager: "No",
    contentCreator: "No",
  },
  {
    id: 2,
    action: "Invite team",
    admin: "Yes",
    contentApproved: "No",
    socialMediaManager: "No",
    contentCreator: "No",
  },
  {
    id: 3,
    action: "Manage/edit team roles",
    admin: "Yes",
    contentApproved: "No",
    socialMediaManager: "No",
    contentCreator: "No",
  },
  {
    id: 4,
    action: "Payment/ Project Settings",
    admin: "Yes",
    contentApproved: "No",
    socialMediaManager: "No",
    contentCreator: "No",
  },
  {
    id: 5,
    action: "Payment/ Project Settings",
    admin: "Yes",
    contentApproved: "No",
    socialMediaManager: "No",
    contentCreator: "No",
  },
  {
    id: 6,
    action: "Payment/ Project Settings",
    admin: "Yes",
    contentApproved: "No",
    socialMediaManager: "No",
    contentCreator: "No",
  },
  {
    id: 7,
    action: "Payment/ Project Settings",
    admin: "Yes",
    contentApproved: "No",
    socialMediaManager: "No",
    contentCreator: "No",
  },
  {
    id: 8,
    action: "Payment/ Project Settings",
    admin: "Yes",
    contentApproved: "Yes",
    socialMediaManager: "Yes",
    contentCreator: "Yes",
  },
  {
    id: 9,
    action: "Payment/ Project Settings",
    admin: "Yes",
    contentApproved: "Yes",
    socialMediaManager: "Yes",
    contentCreator: "Yes",
  },
  {
    id: 10,
    action: "Payment/ Project Settings",
    admin: "Yes",
    contentApproved: "Yes",
    socialMediaManager: "Yes",
    contentCreator: "Yes",
  },
  {
    id: 11,
    action: "Payment/ Project Settings",
    admin: "Yes",
    contentApproved: "Yes",
    socialMediaManager: "Yes",
    contentCreator: "Yes",
  },
  {
    id: 12,
    action: "Payment/ Project Settings",
    admin: "Yes",
    contentApproved: "Yes",
    socialMediaManager: "Yes",
    contentCreator: "Yes",
  },
  {
    id: 13,
    action: "Payment/ Project Settings",
    admin: "Yes",
    contentApproved: "Yes",
    socialMediaManager: "Yes",
    contentCreator: "Yes",
  },
  {
    id: 14,
    action: "Payment/ Project Settings",
    admin: "Yes",
    contentApproved: "Yes",
    socialMediaManager: "Yes",
    contentCreator: "Yes",
  },
  {
    id: 15,
    action: "Payment/ Project Settings",
    admin: "Yes",
    contentApproved: "Yes",
    socialMediaManager: "Yes",
    contentCreator: "Yes",
  },
];

export const sampleOptions = [
  {
    value: "Option 1",
    label: "Option 1",
  },
  {
    value: "Option 2",
    label: "Option 2",
  },
];
