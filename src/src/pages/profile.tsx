import Link from "next/link";
import { Button } from "@mantine/core";
import { NextPage } from "next";

const ProfilePage: NextPage = () => {
  return (
    <Link href="/" passHref>
      <Button component="a">go to index</Button>
    </Link>
  );
};

export default ProfilePage;
