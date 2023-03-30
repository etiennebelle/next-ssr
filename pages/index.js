import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import { loadPosts } from "@/libs/loadPosts";

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Next SSR</title>
      </Head>
      <main>
        <ul>
          { posts.map((post) => (
            <Link href={ `/blog/${post.id}` } key={ post.id }>
              <li>{ post.id } - { post.title }</li>
           </Link>
         ))}
        </ul>
      </main>
    </>
  )
}

/* Dans le cas d'un contenu qui change fréquemment (style twitter feed, wall fb) */
export async function getServerSideProps() {
  const posts = await loadPosts('https://jsonplaceholder.typicode.com/posts?_limit=5')
  return {
    props: { posts }
  }
}