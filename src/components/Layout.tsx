import {
  AppShell,
  Group,
  Burger,
  Button,
  UnstyledButton,
  Text,
  useMantineColorScheme,
  Switch,
  ActionIcon,
  Modal,
  PasswordInput,
  TextInput,
} from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { useDisclosure } from "@mantine/hooks";
import { Moon, Sun, User } from "phosphor-react";
import { FormEvent, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const Layout = () => {
  const navigator = useNavigate();
  const location = useLocation();
  const [opened, { toggle, close: closeNavbar }] = useDisclosure();
  const [loginOpened, { open: openLogin, close: closeLogin }] =
    useDisclosure(false);
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const [page, setPage] = useState(location.pathname);
  console.log(location);

  const handleOpenLogin = () => {
    closeNavbar();
    openLogin();
  };

  const handleLoginSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    notifications.show({
      color: "yellow",
      title: "登录暂不可用",
      message: "登录接口尚未接入。",
    });
  };

  const TabList = [
    { id: 1, title: "Home", href: "/" },
    { id: 2, title: "Blog", href: "/blog" },
    { id: 3, title: "Contacts", href: "/contacts" },
    { id: 4, title: "Support", href: "/support" },
  ].map((item) => (
    <UnstyledButton
      key={item.id}
      onClick={() => {
        setPage(item.href);
        navigator(item.href);
      }}
      className={`${
        page == item.href ? "bg-black text-white" : "bg-transparent text-black"
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
            breakpoint: "xs",
            collapsed: { desktop: true, mobile: !opened },
          }}
          className="px-5 lg:px-28"
        >
          <AppShell.Header>
            <Group h="100%" justify="space-between" className="px-5 lg:px-28">
              <div className="cursor-default" onClick={() => navigator("/")}>
                Lynn的网站
              </div>
              <Group visibleFrom="xs" gap={14}>
                {TabList}
                <ActionIcon
                  variant="filled"
                  color={
                    colorScheme === "light" ? "blackFade.0" : "whiteFade.0"
                  }
                  radius="lg"
                  aria-label="打开登录弹窗"
                  onClick={handleOpenLogin}
                >
                  <User
                    size={20}
                    className="text-[var(--mantine-color-body)]"
                  />
                </ActionIcon>
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
              </Group>

              <Burger
                opened={opened}
                onClick={toggle}
                hiddenFrom="xs"
                size="xs"
              />
            </Group>
          </AppShell.Header>

          <AppShell.Navbar>
            <div className="h-full flex flex-col items-center justify-center gap-5">
              {TabList}
              <ActionIcon
                variant="filled"
                color={colorScheme === "light" ? "blackFade.0" : "whiteFade.0"}
                radius="lg"
                aria-label="打开登录弹窗"
                onClick={handleOpenLogin}
              >
                <User size={20} className="text-[var(--mantine-color-body)]" />
              </ActionIcon>
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
            </div>
          </AppShell.Navbar>

          <AppShell.Main className="flex flex-col">
            <div className="flex-1">
              <Outlet />
            </div>
            <footer className="py-4 text-center sticky bottom-0">
              This is footer
            </footer>
          </AppShell.Main>
        </AppShell>
        <Modal
          opened={loginOpened}
          onClose={closeLogin}
          title="登录"
          centered
        >
          <form onSubmit={handleLoginSubmit} className="flex flex-col gap-4">
            <TextInput
              label="用户名"
              name="username"
              autoComplete="username"
              required
            />
            <PasswordInput
              label="密码"
              name="password"
              autoComplete="current-password"
              required
            />
            <Group justify="flex-end">
              <Button variant="default" type="button" onClick={closeLogin}>
                取消
              </Button>
              <Button type="submit">登录</Button>
            </Group>
          </form>
        </Modal>
      </div>
      {/* <div className="lg:px-28 flex gap-5 md:gap-8"></div> */}
    </>
  );
};

export default Layout;
