import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function WealthManagementPage() {
  return (
    <main className="flex-1 bg-gray-100 py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold tracking-tighter sm:text-5xl">Wealth Management</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p>We offer comprehensive wealth management services to protect and grow your assets for generations to come. We utilise modern chained-AI crypto edge-deployed modern innovative infrastructureto grow your money like it never has before.</p>
            <img
              className=""
              src="https://compote.slate.com/images/926e5009-c10a-48fe-b90e-fa0760f82fcd.png?width=1200&rect=680x453&offset=0x30"
              width={500}
              height={500}
            />
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
