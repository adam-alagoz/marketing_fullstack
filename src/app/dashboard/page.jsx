"use client";
import React from "react";
import useSWR from "swr";

const Dashboard = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );
  console.log("data", data);
  console.log("err", error);
  return (
    <div>
      {data?.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
};

export default Dashboard;
