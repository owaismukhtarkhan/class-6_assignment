import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex justify-center gap-10 bg-[#23292f] text-sm hover:underline hover:underline-offset-auto">
      <Link href="https://www.linkedin.com/in/owais-mukhtar-khan-29601653/">© 2024 Owais Mukhtar Khan. All rights reserved.</Link>
    </div>
  );
}
