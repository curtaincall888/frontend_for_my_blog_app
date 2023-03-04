import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Layout from "component/commons/Layout";

export default function Home() {
  return (
    <>
      <Layout>
        <h1>MY Blog app</h1>
      </Layout>
    </>
  );
}
