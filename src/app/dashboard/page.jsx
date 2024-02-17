"use client";
import React from "react";
import useSWR from "swr";
import { useSession } from "next-auth/react";
const Dashboard = () => {
  // const [data, setData] = useState([]);
  // const [error, setError] = useState(false);
  // const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   const getData = async () => {
  //     const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
  //       cache: "no-store",
  //     });
  //     if (!res.ok) {
  //       setError(true);
  //     }
  //     const responseData = await res.json();
  //     setData(responseData);
  //     setLoading(false);
  //   };
  //   getData();
  // }, []);
  // console.log("data", data);

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );
  console.log("useSession()", useSession());

  return <div>Dashboard</div>;
};

export default Dashboard;
