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
      <DisplayFont className="text-3xl md:text-4xl">{children}</DisplayFont>
    </CardTitle>
  );
};

const PriceCard = ({
  title,
  price,
  content,
  buttonLabel,
  popular,
}: {
  title: string;
  price: string;
  content: React.ReactNode;
  buttonLabel: string;
  popular?: boolean;
}) => {
  return (
    <Card
      className={`relative h-full w-full max-w-sm border-2 text-stone-900 ${popular ? "border-blue-500" : "border-stone-700"} bg-stone-50`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-blue-500 px-4 py-1 text-sm font-bold text-white">
          Most Popular
        </div>
      )}
      <CardContent className="flex h-full flex-col justify-between space-y-4 p-6">
        <CardHeader className="p-0">
          <PricingTitle>{title}</PricingTitle>
          <div className="mt-4 text-center">
            <span className="text-4xl font-bold">{price}</span>
            <span className="text-stone-500">/month</span>
          </div>
        </CardHeader>
        {content}
        <CardFooter className="flex justify-center p-0">
          <Button
            className={`w-full rounded-full ${popular ? "bg-blue-500" : "bg-stone-800"} px-4 py-2 font-bold text-white hover:text-stone-900`}
          >
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
    price: "$0",
    content: (
      <div className="flex flex-col space-y-4">
        <p>✓ Basic market data</p>
        <p>✓ Limited technical indicators</p>
        <p>✓ Community access</p>
        <p>✓ Basic charting tools</p>
      </div>
    ),
    buttonLabel: "Get Started Now",
  },
  {
    title: "Pro",
    price: "$29",
    popular: true,
    content: (
      <div className="flex flex-col space-y-4">
        <p>✓ All Free features</p>
        <p>✓ Advanced technical analysis</p>
        <p>✓ Real-time market alerts</p>
        <p>✓ TradingView integration</p>
        <p>✓ Priority support</p>
      </div>
    ),
    buttonLabel: "Start Free Trial",
  },
  {
    title: "Enterprise",
    price: "Custom",
    content: (
      <div className="flex flex-col space-y-4">
        <p>✓ All Pro features</p>
        <p>✓ Custom API access</p>
        <p>✓ Dedicated account manager</p>
        <p>✓ White-label solutions</p>
        <p>✓ Advanced security features</p>
      </div>
    ),
    buttonLabel: "Contact Sales",
  },
];

export const Pricing = () => {
  return (
    <div className="mt-16 flex min-h-screen w-screen flex-col items-center justify-center bg-stone-950 px-4 py-12 text-white md:px-8">
      <DisplayFont className="mb-8 text-3xl md:text-4xl">
        Choose Your Plan
      </DisplayFont>
      <div className="grid w-full max-w-7xl flex-wrap justify-center gap-8 md:grid-cols-2 lg:grid-cols-3">
        {pricingData.map((pricing, index) => (
          <PriceCard key={index} {...pricing} />
        ))}
      </div>
    </div>
  );
};
