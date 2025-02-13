import type { MetaFunction } from "@remix-run/node";
import { AppendAdPage } from "~/pages";


export const meta: MetaFunction = () => {
  return [
    { title: "Тестовое задание" },
  ];
};


export default function Index() {
  return (
      <AppendAdPage />
  );
}


