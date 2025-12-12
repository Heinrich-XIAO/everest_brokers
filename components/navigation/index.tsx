import Link from "next/link";
import { MountainIcon, MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center bg-gray-900 text-white">
      <Link href="/" className="flex items-center justify-center" prefetch={false}>
        <MountainIcon className="h-6 w-6" />
        <span className="sr-only">Everest Brokers</span>
      </Link>
      <nav className="ml-auto hidden lg:flex gap-4 sm:gap-6">
        <Link href="/investment-advisory" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          Investment Advisory
        </Link>
        <Link href="/wealth-management" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          Wealth Management
        </Link>
        <Link href="/risk-management" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          Risk Management
        </Link>
        <Link href="/why-not-our-competitors" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          Why Not Our Competitors
        </Link>
        <Link href="/contact" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          Contact
        </Link>
      </nav>
      <Button variant="ghost" size="icon" className="ml-auto lg:hidden">
        <MenuIcon className="h-6 w-6" />
        <span className="sr-only">Toggle navigation menu</span>
      </Button>
    </header>
  );
}
