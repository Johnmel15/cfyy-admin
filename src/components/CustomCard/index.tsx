import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface CustomCardProps {
  title: string;
  children: React.ReactNode;
}

export function CustomCard({ title, children }: CustomCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}
