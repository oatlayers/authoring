import Link from "next/link";

export default function NavLinkButton({ children, href }) {
  return (
    <Link href={href}>
      <button className="cursor-pointer rounded bg-purple-500 px-4 py-2 text-white hover:bg-purple-600">
        {children}
      </button>
    </Link>
  );
}
