import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'

export default function InvestmentAdvisoryPage() {
  return (
    <main className="flex-1 bg-gray-100 py-12 md:py-24">
      <div className="container px-4 md:px-6 w-full">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold tracking-tighter sm:text-5xl">Investment Advisory</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 flex flex-col justify-between">
            <p>Our expert advisors provide personalized investment strategies to help you grow your wealth.</p>
            <img
              className=""
              src="https://www.apsbank.com.mt/wp-content/uploads/2024/04/Top-Benefits-of-Having-an-Investment-Advisor.jpg"
              width={500}
              height={500}
            />
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
