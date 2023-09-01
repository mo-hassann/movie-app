import React from "react";
import { getListWithName } from "../../api";

export default function MoviesList() {
  return <div>MoviesList</div>;
}

export function loader({ request }) {
  const url = new URL(request.url);
  const list = url.searchParams.get("list");

  getListWithName(list);
  return null;
}
