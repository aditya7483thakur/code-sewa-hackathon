import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import Link from 'next/link'

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-900 to-slate-900 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Register for CodeSewa Hackathon</CardTitle>
          <CardDescription>Join us in building solutions for a better tomorrow</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" action="/api/register" method="POST">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">Full Name</label>
              <Input id="name" name="name" required />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <Input id="email" name="email" type="email" required />
            </div>
            <div className="space-y-2">
              <label htmlFor="institution" className="text-sm font-medium">Institution/Organization</label>
              <Input id="institution" name="institution" required />
            </div>
            <div className="flex gap-4">
              <Button type="submit" className="flex-1">Register</Button>
              <Link href="/" className="flex-1">
                <Button variant="outline" className="w-full">Cancel</Button>
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

