"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { Container } from "../components/Container/container";
import { Button } from "../components/Button/button";
import { Header } from "../components/Header/header";
import { Input } from "../components/Input/input";
import Space from "../components/Space/space";
import Modal from "../components/Modal/Modal";
import { IconButton } from "../components/IconButton/iconButton";
import { Text } from "../components/Text/text";
import { Tag } from "../components/Tag/tag";
import { Table } from "../components/Table/table";

export default function Home() {


  return (
    <main>
       <Header />
      <Container
        width={800}
        style={{ backgroundColor: "#e4e4e4", padding: "20px" }}
      >
        <p>container</p>
     

      <Button size={"sm"} type={"primary"}>
        button1
      </Button>
      <Button size={"md"} type={"secondary"}>
        button2
      </Button>
      <Button type={"default"}>button3</Button>

      <Space height={50} />

     

      <Input type="text" placeholder="Enter text here" />

      <Modal />

      <Text size={18} bold={true} color="red" style={{ fontStyle: "italic" }}>
        This is a text.
      </Text>

      <Tag color="blue">Tag One</Tag>
      <Tag color="green">Tag Two</Tag>
      <Tag>Tag Three</Tag>

      <Table />

      <IconButton
        type="primary"
        size="sm"
        icon="🚀"
        style={{ marginRight: "10px" }}
      />
      <IconButton
        type="secondary"
        size="md"
        icon="🔒"
        style={{ marginRight: "10px" }}
      />
      <IconButton type="default" size="md" icon="⭐" />
      </Container>
    </main>
  );
}
