import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

async function getData() {
  const res = await fetch("https://localhost:3000/api/posts", {
    cache: "no-store",
  });
  //There are 3 different caching in Nextjs
  //1- Caching Data --'force-cache'
  //Caching stores data so it doesn't need to be re-fetched from your data source on every request.
  // By default, Next.js automatically caches the returned values of fetch in the Data Cache on the server.
  // 'force-cache' is the default, and can be omitted
  // fetch("https://...", { cache: "force-cache" });

  //2-Revalidating Data- { next: { revalidate: 3600 }
  // Revalidation is the process of purging the Data Cache and re-fetching the latest data.
  // This is useful when your data changes and you want to ensure you show the latest information.

  //3- fetch to 'no-store'. { cache: 'no-store' } This will fetch data dynamically, on every request.
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Blog = async () => {
  const data = await getData();
  return (
    <div className={styles.mainContainer}>
      {data.map((item) => (
        <Link href={item._id} className={styles.container} key={item.id}>
          <div className={styles.imageContainer}>
            <Image
              src={item.img}
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
