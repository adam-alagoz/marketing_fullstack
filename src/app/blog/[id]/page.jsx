import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw notFound();
  }

  return res.json();
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            voluptate cum repudiandae cumque quia nulla voluptatum, nihil omnis
            hic error odit facilis sit, laborum tempora labore odio dignissimos
            aliquam dolore. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Placeat voluptate cum repudiandae cumque quia nulla
            voluptatum, nihil omnis hic error odit facilis sit, laborum tempora
            labore odio dignissimos aliquam dolore. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Placeat voluptate cum repudiandae
            cumque quia nulla voluptatum, nihil omnis hic error odit facilis
            sit, laborum tempora labore odio dignissimos aliquam dolore. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Placeat voluptate
            cum repudiandae cumque quia nulla voluptatum, nihil omnis hic error
            odit facilis sit, laborum tempora labore odio dignissimos aliquam
            dolore.
          </p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/19841819/pexels-photo-19841819/free-photo-of-a-narrow-street-with-many-colorful-rugs-and-carpets.png?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>John Doe</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/11844123/pexels-photo-11844123.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>{data.content}</p>
      </div>
    </div>
  );
};

export default BlogPost;
