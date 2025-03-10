import { Button, Flex, Text } from "@radix-ui/themes";
import logo from "../../assets/icons/logo.svg";
import closeButton from "../../assets/icons/closeButton.svg";
import openSidebar from "../../assets/icons/openSidebar.svg";
import createCollapsed from "../../assets/icons/createCollapsed.svg";
import upgrade from "../../assets/icons/upgrade.svg";
import { LuPlus, LuZap } from "react-icons/lu";
import { sidebarItems } from "../../utils/data";
import { NavLink } from "react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Sidebar = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const toggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  // return (
  //   <aside className="flex flex-col bg-blue-50 py-6 px-4 h-screen">
  //     <Flex align="center" justify="between">
  //       {isSideBarOpen ? <img src={logo} /> : ""}
  //       <div className="cursor-pointer" onClick={() => toggleSideBar()}>
  //         {isSideBarOpen ? (
  //           <img src={openSidebar} />
  //         ) : (
  //           <img src={closeButton} />
  //         )}
  //       </div>
  //     </Flex>

  //     {isSideBarOpen ? (
  //       <Button className="my-6 rounded-3xl w-[188px] bg-blue-600 py-6 px-10 text-sm font-medium text-primaryForeground">
  //         <LuPlus />
  //         Create Post
  //       </Button>
  //     ) : (
  //       <img src={createCollapsed} className="py-6" />
  //     )}

  //     {sidebarItems.map(({ icon, id, name, path }) => {
  //       return (
  //         <NavLink
  //           className={({ isActive }) =>
  //             `flex items-center mb-4 font-medium py-2.5 pl-4 ${
  //               isActive
  //                 ? "text-foreground bg-white rounded-md"
  //                 : "text-gray-600"
  //             }`
  //           }
  //           to={path}
  //           key={id}
  //           end
  //         >
  //           {icon}
  //           {isSideBarOpen && (
  //             <p className="text-sm text-gray-600 font-medium pl-3">{name}</p>
  //           )}
  //         </NavLink>
  //       );
  //     })}

  //     {isSideBarOpen ? (
  //       <div className="mt-auto bg-white text-center p-4 ">
  //         <Text size="2" weight="medium" className="text-gray-800 pb-2">
  //           Upgrade to Pro
  //         </Text>
  //         <Text
  //           as="p"
  //           size="2"
  //           weight="regular"
  //           className="text-gray-600 w-[188px] pb-4"
  //         >
  //           Unlock all features and get unlimited access to our support team.
  //         </Text>

  //         <Flex
  //           align="center"
  //           justify="center"
  //           className="text-blue-600 gap-x-2"
  //         >
  //           <LuZap />
  //           <Text as="p" size="2" weight="medium" className="">
  //             Upgrade
  //           </Text>
  //         </Flex>
  //       </div>
  //     ) : (
  //       <img src={upgrade} />
  //     )}
  //   </aside>
  // );
  return (
    <motion.aside
      className="flex flex-col bg-blue-50 py-6 px-4 min-h-screen w-[252px]"
      initial={{ width: isSideBarOpen ? "256px" : "80px" }} // Initial width
      animate={{ width: isSideBarOpen ? "256px" : "80px" }} // Animate width
      transition={{ duration: 0.3, ease: "easeInOut" }} // Smooth transition
    >
      <Flex align="center" justify="between">
        <AnimatePresence>
          {isSideBarOpen && (
            <motion.img
              src={logo}
              initial={{ opacity: 0, x: -20 }} // Initial state
              animate={{ opacity: 1, x: 0 }} // Animate in
              exit={{ opacity: 0, x: -20 }} // Animate out
              transition={{ duration: 0.3 }} // Smooth transition
            />
          )}
        </AnimatePresence>
        <div className="cursor-pointer" onClick={() => toggleSideBar()}>
          {isSideBarOpen ? (
            <img src={openSidebar} />
          ) : (
            <img src={closeButton} />
          )}
        </div>
      </Flex>

      <AnimatePresence>
        {isSideBarOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -20 }} // Initial state
            animate={{ opacity: 1, y: 0 }} // Animate in
            exit={{ opacity: 0, y: -20 }} // Animate out
            transition={{ duration: 0.3 }} // Smooth transition
          >
            <Button className="my-6 rounded-3xl w-[188px] bg-blue-600 py-6 px-10 text-sm font-medium text-primaryForeground">
              <LuPlus />
              Create Post
            </Button>
          </motion.div>
        ) : (
          <motion.img
            src={createCollapsed}
            className="py-6"
            initial={{ opacity: 0, y: -20 }} // Initial state
            animate={{ opacity: 1, y: 0 }} // Animate in
            exit={{ opacity: 0, y: -20 }} // Animate out
            transition={{ duration: 0.3 }} // Smooth transition
          />
        )}
      </AnimatePresence>

      {sidebarItems.map(({ icon, id, name, path }) => {
        return (
          <NavLink
            className={({ isActive }) =>
              `flex items-center mb-4 font-medium py-2.5 pl-4 ${
                isActive
                  ? "text-foreground bg-white rounded-md"
                  : "text-gray-600"
              }`
            }
            to={path}
            key={id}
            end
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }} // Initial state
              animate={{ opacity: 1, x: 0 }} // Animate in
              exit={{ opacity: 0, x: -20 }} // Animate out
              transition={{ duration: 0.3 }} // Smooth transition
            >
              {icon}
            </motion.div>
            {isSideBarOpen && (
              <motion.p
                className="text-sm text-gray-600 font-medium pl-3"
                initial={{ opacity: 0, x: -20 }} // Initial state
                animate={{ opacity: 1, x: 0 }} // Animate in
                exit={{ opacity: 0, x: -20 }} // Animate out
                transition={{ duration: 0.3 }} // Smooth transition
              >
                {name}
              </motion.p>
            )}
          </NavLink>
        );
      })}

      <AnimatePresence>
        {isSideBarOpen ? (
          <motion.div
            className="mt-auto bg-white text-center p-4"
            initial={{ opacity: 0, y: 20 }} // Initial state
            animate={{ opacity: 1, y: 0 }} // Animate in
            exit={{ opacity: 0, y: 20 }} // Animate out
            transition={{ duration: 0.3 }} // Smooth transition
          >
            <Text size="2" weight="medium" className="text-gray-800 pb-2">
              Upgrade to Pro
            </Text>
            <Text
              as="p"
              size="2"
              weight="regular"
              className="text-gray-600 w-[188px] pb-4"
            >
              Unlock all features and get unlimited access to our support team.
            </Text>

            <Flex
              align="center"
              justify="center"
              className="text-blue-600 gap-x-2"
            >
              <LuZap />
              <Text as="p" size="2" weight="medium" className="">
                Upgrade
              </Text>
            </Flex>
          </motion.div>
        ) : (
          <motion.img
            src={upgrade}
            initial={{ opacity: 0, y: 20 }} // Initial state
            animate={{ opacity: 1, y: 0 }} // Animate in
            exit={{ opacity: 0, y: 20 }} // Animate out
            transition={{ duration: 0.3 }} // Smooth transition
          />
        )}
      </AnimatePresence>
    </motion.aside>
  );
};

export { Sidebar };
