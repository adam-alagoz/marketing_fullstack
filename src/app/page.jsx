import Image from "next/image";
import styles from "./page.module.css";
import Hero from "/public/hero.png";

export default function Home() {
  return (
    <div>
      <Image src={Hero} alt="Hero" />
      <div>
        {/* For external usage also update next.config.js */}
        <Image
          width={500}
          height={500}
          src="https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="External Image"
        />
      </div>
      ;
    </div>
  );
}
