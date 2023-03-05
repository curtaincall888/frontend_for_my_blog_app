import Link from "next/link";
import { useState } from "react";
import {
  createStyles,
  Header,
  Container,
  Anchor,
  Group,
  Burger,
  rem,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

const HEADER_HEIGHT = rem(84);

const useStyles = createStyles((theme) => ({
  inner: {
    height: HEADER_HEIGHT,
    // display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  links: {
    paddingTop: theme.spacing.lg,
    height: HEADER_HEIGHT,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",

    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  mainLinks: {
    marginRight: `calc(${theme.spacing.sm} * -1)`,
  },

  mainLink: {
    textTransform: "uppercase",
    fontSize: rem(18),
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[1]
        : theme.colors.gray[6],
    padding: `${rem(7)} ${theme.spacing.sm}`,
    fontWeight: 700,
    borderBottom: `${rem(2)} solid transparent`,
    transition: "border-color 100ms ease, color 100ms ease",
    textDecoration: "none",

    "&:hover": {
      color: theme.colorScheme === "dark" ? theme.white : theme.black,
      textDecoration: "none",
    },
  },

  secondaryLink: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[2]
        : theme.colors.gray[6],
    fontSize: theme.fontSizes.xs,
    textTransform: "uppercase",
    transition: "color 100ms ease",

    "&:hover": {
      color: theme.colorScheme === "dark" ? theme.white : theme.black,
      textDecoration: "none",
    },
  },

  mainLinkActive: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    borderBottomColor:
      theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 5 : 6],
  },

  navLink: {
    textDecoration: "none",
  },
}));

interface LinkProps {
  label: string;
  link: string;
}

interface DoubleHeaderProps {
  mainLinks: LinkProps[];
  userLinks: LinkProps[];
}

export function DoubleHeader({ mainLinks, userLinks }: DoubleHeaderProps) {
  const [opened, { toggle }] = useDisclosure(false);
  const { classes, cx } = useStyles();
  const [active, setActive] = useState(0);

  const mainItems = mainLinks.map((item, index) => (
    <Anchor
      key={item.label}
      className={cx(classes.mainLink, {
        [classes.mainLinkActive]: index === active,
      })}
      onClick={(event) => {
        event.preventDefault();
        setActive(index);
      }}
    >
      <Link href={item.link} className={classes.navLink}>
        {item.label}
      </Link>
    </Anchor>
  ));

  const secondaryItems = userLinks.map((item) => (
    <Anchor<"a">
      href={item.link}
      key={item.label}
      onClick={(event) => event.preventDefault()}
      className={classes.secondaryLink}
    >
      {item.label}
    </Anchor>
  ));

  return (
    <Header height={HEADER_HEIGHT}>
      <Container className={classes.inner}>
        <div className={classes.links}>
          <Group position="right">{secondaryItems}</Group>
          <Group spacing={0} position="center" className={classes.mainLinks}>
            {mainItems}
          </Group>
        </div>
        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
        />
      </Container>
    </Header>
  );
}
