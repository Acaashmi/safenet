import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Input,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@nextui-org/react";

function Nav() {
  return (
    <Navbar className="bg-black bg-opacity-80">
      {/* Logo Region */}
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4">
          <p className="font-bold text-inherit text-purple-400 text-2xl">
            SAFENET
          </p>
        </NavbarBrand>
      </NavbarContent>

      {/* Search Region */}
      <NavbarContent as="div" className="items-center" justify="middle">
        <Input
          classNames={{
            base: "max-w-full sm:max-w-[20rem] h-8 text-zinc-200 rounded-full",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper:
              "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Search for Location"
          size="sm"
          type="search"
        />
      </NavbarContent>

      {/* User Avatar Region .. which is now a dropdown */}
      <NavbarContent as="div" className="items-center" justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          {/* <DropdownMenu aria-label="Profile Actions" variant="flat">
        <DropdownItem key="profile" className="h-14 gap-2">
          <p className="font-semibold">Signed in as</p>
          <p className="font-semibold">zoey@example.com</p>
        </DropdownItem>
        <DropdownItem key="settings">My Settings</DropdownItem>
        <DropdownItem key="team_settings">Team Settings</DropdownItem>
        <DropdownItem key="analytics">Analytics</DropdownItem>
        <DropdownItem key="system">System</DropdownItem>
        <DropdownItem key="configurations">Configurations</DropdownItem>
        <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
        <DropdownItem key="logout" color="danger">
          Log Out
        </DropdownItem>
      </DropdownMenu> */}
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}

export default Nav;
