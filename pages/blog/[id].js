import { loadPosts } from "@/libs/loadPosts";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Post({ post }) {
    return (
        <div>
            <Link href={'/'}>Home</Link>
            <h3>{ post.title }</h3>
            <h3>{ post.body }</h3>
        </div>
    )
}

export async function getServerSideProps({params}) {
    const post = await loadPosts(`https://jsonplaceholder.typicode.com/posts/${params.id}`)

    return {
        props: { post }
    }
}