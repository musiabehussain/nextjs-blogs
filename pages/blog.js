import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "../styles/blogs.module.css";
// step1:: collect all the files from blogData directory
// step2:: itrate through them  and desplay through them
const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/blogs")
      .then((a) => {
        return a.json();
      })
      .then((parsed) => {
        setBlogs(parsed);
      });
  }, []);

  
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {blogs.map((item) => {
          return (
            <>
              <div className="blogs" key={item.zdfsds}>
                <div>
                  <Link href={`/blogpost/${item.slug}`}>
                    <h2 className={styles.blogItemh3}>{item.title}</h2>
                  </Link>
                  <p className={styles.blogItemp}>
                    {item.content.substr(0, 140)}.read more
                  </p>
                </div>
              </div>
            </>
          );
        })}
      </main>
    </div>
  );
};

export default Blog;
