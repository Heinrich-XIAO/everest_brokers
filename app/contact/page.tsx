import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MountainIcon, MailIcon, PhoneIcon, MapPinIcon } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  return (
    <main className="flex-1 bg-gray-100 py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl font-bold tracking-tighter sm:text-5xl">Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Our Office</h3>
                <div className="flex items-start gap-4">
                  <MapPinIcon className="h-6 w-6 text-gray-500" />
                  <p className="text-gray-500">
                    1 Yonge St.
                    <br />
                    Toronto, M5E 1E5
                    <br />
                    Dominion of Canada
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Email</h3>
                <div className="flex items-center gap-4">
                  <MailIcon className="h-6 w-6 text-gray-500" />
                  <a href="mailto:contact@everestbrokers.com" className="text-blue-600 hover:underline">
                    contact@everestbrokers.com
                  </a>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Phone</h3>
                <div className="flex items-center gap-4">
                  <PhoneIcon className="h-6 w-6 text-gray-500" />
                  <a href="tel:+1234567890" className="text-blue-600 hover:underline">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
  )
}
