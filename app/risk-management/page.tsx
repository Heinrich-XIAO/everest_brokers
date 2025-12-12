import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function RiskManagementPage() {
  return (
    <main className="flex-1 bg-gray-100 py-12 md:py-24 h-full">
      <div className="container px-4 md:px-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold tracking-tighter sm:text-5xl">Risk Management</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p>Our team helps you identify and mitigate financial risks to safeguard your investments. Our competitors are horrible at risk managment and their portfolio is not-stonks.</p>
            <img
              className=""
              src="https://eu-images.contentstack.com/v3/assets/blt07f68461ccd75245/blt77e60dbae0b45f57/6618064bf1336dcd3a2b41ea/GettyImages-1343006928-1401x788-49696df.jpeg"
              width={500}
              height={500}
            />
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
