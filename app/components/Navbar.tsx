import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <nav className="flex justify-end gap-6 bg-[#000001]">
      <Link href="/">
        <Image className="mt-12 ml-12"  src="/logo.svg" width={140} height={140} alt="Pak wheels logo" />
        </Link>
        <ul className="flex w-full text-White gap-14 justify-end pt-10 mt-6 mr-2">
          <li>Used Cars</li>
          <li>New Cars</li>
          <li>Bikes</li>
          <li>Auto Store</li>
          <li>Video</li>
          <li>Forums</li>
          <li>Blog</li>
          <li>More</li>
        </ul>
        <button className="bg-[#b73439] text-white text-bold rounded-md text-nowrap py-2 px-3 h-10 mt-14 mr-14 border border-solid border-transparent">
          Post an Ad
        </button>
      </nav>
    </div>
  );
}
