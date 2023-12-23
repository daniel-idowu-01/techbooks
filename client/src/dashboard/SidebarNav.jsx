import React, { useContext } from 'react';
import { Sidebar } from 'flowbite-react';
import { BiBuoy } from 'react-icons/bi';
import Img from '../assets/images/profile.jpg'
import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineCloud, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import { AuthContext } from '../context/AuthProvider'

const SidebarNav = () => {

  const { user } = useContext(AuthContext);

  return (
    <Sidebar aria-label="Sidebar with content separator example">
      <Sidebar.Logo href="#" img={user.photoURL} imgAlt="Flowbite logo">
        {user?.displayName || 'Demo User'}
      </Sidebar.Logo>
      
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloud}>
            Upload Book
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
            Manage Books
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser}>
            Users
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiShoppingBag}>
            Products
          </Sidebar.Item>
          <Sidebar.Item href="/login" icon={HiArrowSmRight}>
            Sign In
          </Sidebar.Item>
          <Sidebar.Item href="/logout" icon={HiTable}>
            Logout
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie}>
            Upgrade to Pro
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiViewBoards}>
            Documentation
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={BiBuoy}>
            Help
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}

export default SidebarNav