import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function WhyNotOurCompetitorsPage() {
  return (
    <main className="flex-1 bg-gray-100 py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Not Our Competitors</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p>Our competitors are not as good as us. Here is why:</p>
            <ul className="list-disc list-inside">
              <li>They are not as experienced as us.</li>
              <li>They do not have the same level of expertise.</li>
              <li>They do not offer the same level of customer service.</li>
              <li>
                They are not stonks.
                <br />
                <br />
                <img src="https://preview.redd.it/l4elns44j7761.png?auto=webp&s=934738e370b3be736c03cd5d14f964a6b2b15741" width={500} height={500}/>
              </li>
            </ul>

          </CardContent>
        </Card>
      </div>
    </main>
  )
}
