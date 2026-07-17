import Link from "next/link";
import LikeButton from "./ui/likeButton";


export default function Home() {
  return (
    <div>
      Hello Next Js

      Blog page <Link href={"/blog/1"}>Blog</Link>

      <LikeButton></LikeButton>
    </div>
  );
}
