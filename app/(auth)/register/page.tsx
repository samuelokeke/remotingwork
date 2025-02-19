import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function RegisterPage() {
  return (
    <Tabs defaultValue="employers" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="employers">Sign up as an Employer</TabsTrigger>
        <TabsTrigger value="job-seeker">Sign up as Job Seeker</TabsTrigger>
      </TabsList>

      <TabsContent value="employers">
        <Card>
          <CardHeader>
            <CardTitle>Employers</CardTitle>
            <CardDescription>Hire who you need, when you need them.</CardDescription>
          </CardHeader>

          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Fullname" />
            </div>

            <div className="space-y-1">
              <Label htmlFor="email">Business email</Label>
              <Input id="email" placeholder="careers@example.com" />
            </div>

            <div className="space-y-1">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="Enter password" />
            </div>

            <div className="space-y-1">
              <Label htmlFor="confirm-password">Confirm password</Label>
              <Input id="confirm-password" type="password" placeholder="Enter confirm password" />
            </div>
          </CardContent>

          <CardFooter>
            <Button>Sign up</Button>
          </CardFooter>
        </Card>
      </TabsContent>

      <TabsContent value="job-seeker">
        <Card>
          <CardHeader>
            <CardTitle>Job Seeker</CardTitle>
            <CardDescription>Find your next tire career..</CardDescription>
          </CardHeader>

          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Fullname" />
            </div>

            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="johndoe@example.com" />
            </div>

            <div className="space-y-1">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="Enter password" />
            </div>

            <div className="space-y-1">
              <Label htmlFor="confirm-password">Confirm password</Label>
              <Input id="confirm-password" type="password" placeholder="Enter confirm password" />
            </div>
          </CardContent>

          <CardFooter>
            <Button>Sign up</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
