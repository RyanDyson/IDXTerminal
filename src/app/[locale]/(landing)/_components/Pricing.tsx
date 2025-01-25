import { DisplayFont } from "./DisplayFont";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
  CardTitle,
} from "~/components/ui/card";
import { Button } from "~/components/ui/button";

const PricingTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <CardTitle className="flex w-full justify-center">
      <DisplayFont className="text-4xl">{children}</DisplayFont>
    </CardTitle>
  );
};

const PriceCard = ({
  title,
  content,
  buttonLabel,
}: {
  title: string;
  content: React.ReactNode;
  buttonLabel: string;
}) => {
  return (
    <Card className="h-full w-80 border-2 border-stone-700 bg-stone-50">
      <CardContent className="flex h-full flex-col justify-between space-y-4">
        <CardHeader>
          <PricingTitle>{title}</PricingTitle>
        </CardHeader>
        {content}
        <CardFooter className="flex justify-center">
          <Button className="rounded-full bg-stone-800 px-4 py-2 font-bold">
            {buttonLabel}
          </Button>
        </CardFooter>
      </CardContent>
    </Card>
  );
};

const pricingData = [
  {
    title: "Free",
    content: (
      <div className="flex flex-col space-y-4">
        <p>Feature 1</p>
        <p>Feature 2</p>
        <p>Feature 3</p>
      </div>
    ),
    buttonLabel: "Get started Now",
  },
  {
    title: "Pro",
    content: (
      <div className="flex flex-col space-y-4">
        <p>Feature 1</p>
        <p>Feature 2</p>
        <p>Feature 3</p>
      </div>
    ),
    buttonLabel: "Buy Now",
  },
  {
    title: "Enterprise",
    content: (
      <div className="flex flex-col space-y-4">
        <p>Feature 1</p>
        <p>Feature 2</p>
        <p>Feature 3</p>
      </div>
    ),
    buttonLabel: "Contact Us",
  },
];

export const Pricing = () => {
  return (
    <div className="mt-16 flex h-screen w-screen flex-col items-center justify-start bg-stone-950 text-white">
      <DisplayFont className="text-3xl"> Pricing </DisplayFont>
      <div className="flex h-full w-full items-start justify-center space-x-6 py-8 pb-64">
        {pricingData.map((pricing, index) => (
          <PriceCard key={index} {...pricing} />
        ))}
      </div>
    </div>
  );
};
