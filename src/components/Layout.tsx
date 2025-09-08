import {
  AppShell,
  Group,
  Burger,
  Button,
  UnstyledButton,
  Text,
  useMantineColorScheme,
  Switch,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Moon, Sun } from "phosphor-react";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  const imgList = [
    "/assets/1.jpg",
    "/assets/2.jpg",
    "/assets/3.jpg",
    "/assets/4.jpg",
    "/assets/5.jpg",
    "/assets/6.jpg",
    "/assets/光佑此间.jpg",
  ];
  const navigator = useNavigate();
  const [opened, { toggle }] = useDisclosure();
  const { colorScheme, setColorScheme, clearColorScheme } =
    useMantineColorScheme();
  const [page, setPage] = useState(1);

  const TabList = [
    { id: 1, title: "Home", href: "/" },
    { id: 2, title: "Blog", href: "/blog" },
    { id: 3, title: "Contacts", href: "#" },
    { id: 4, title: "Support", href: "#" },
  ].map((item, index) => (
    <UnstyledButton
      key={index}
      onClick={() => {
        setPage(item.id);
        navigator(item.href);
      }}
      className={`${
        page === item.id
          ? "bg-[var(--mantine-color-text)] text-[var(--mantine-color-body)]"
          : "bg-[var(--mantine-color-body)] text-[var(--mantine-color-text)]"
      } p-2 rounded-xl`}
    >
      {item.title}
    </UnstyledButton>
  ));

  return (
    <>
      <div>
        <AppShell
          withBorder={false}
          header={{ height: 60 }}
          navbar={{
            width: 300,
            breakpoint: "sm",
            collapsed: { desktop: true, mobile: !opened },
          }}
          className="px-5 lg:px-28"
        >
          <AppShell.Header>
            <Group h="100%" justify="space-between" className="px-5 lg:px-28">
              <Text>Lynn的网站</Text>
              <div className="flex items-center gap-3.5">
                <Group visibleFrom="sm" gap={14}>
                  {TabList}
                </Group>
                <Switch
                  size="md"
                  onLabel={<Sun size={16} />}
                  offLabel={<Moon size={16} />}
                  checked={colorScheme === "light"}
                  onClick={() => {
                    colorScheme === "light"
                      ? setColorScheme("dark")
                      : setColorScheme("light");
                  }}
                />
                {/* <Button variant="white" onClick={() => setColorScheme("light")}>
                  Light
                </Button> */}
              </div>
              <Burger
                opened={opened}
                onClick={toggle}
                hiddenFrom="sm"
                size="sm"
              />
            </Group>
          </AppShell.Header>

          <AppShell.Navbar className="px-5">{TabList}</AppShell.Navbar>

          <AppShell.Main>
            <Text
              ta="center"
              fw={600}
              className="w-full border-y-2 text-7xl md:text-8xl lg:text-9xl"
            >
              THE BLOG
            </Text>
            <Outlet />
          </AppShell.Main>
        </AppShell>
      </div>
      {/* <div className="lg:px-28 flex gap-5 md:gap-8"></div> */}
    </>
  );
};

export default Layout;
