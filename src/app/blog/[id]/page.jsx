import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
            repudiandae quae voluptate minima mollitia ratione deserunt delectus
            explicabo corporis libero sunt tempora rerum nihil ad,
            exercitationem dolores, quia natus! Facilis.
          </h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            officia nemo rem dicta autem similique, dolorum facilis temporibus,
            reiciendis soluta voluptas quod earum ullam fugiat hic veniam
            voluptatum molestias? Asperiores.
          </p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>John Doe</span>
          </div>
          <div className={styles.imageContainer}>
            <Image
              src="https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              fill={true}
              className={styles.image}
            />
          </div>
          <div>
            {styles.content}
            <p className={styles.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              est aliquid aliquam totam ipsa nobis consectetur architecto magnam
              hic facilis molestias illum, aperiam iure, assumenda et sapiente,
              libero eum voluptate.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
