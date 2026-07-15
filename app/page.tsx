import Link from "next/link";


export default function Home() {
  return (
    <div>
      Hello Next Js

      Blog page <Link href={"/blog/1"}>Blog</Link>
    </div>
  );
}
