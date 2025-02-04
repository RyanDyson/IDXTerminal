import placeholder1 from "~/../public/placeholder.png";
import placeholder2 from "~/../public/placeholder2.png";
import placeholder3 from "~/../public/placeholder3.png";

export const tempTemplateList = {
  data: [
    {
      image: placeholder1,
      title: "Default",
      subtitle: "A basic template for the first dashboard",
    },
    {
      image: placeholder2,
      title: "Comparison",
      subtitle: "Compare multiple securities",
    },
    {
      image: placeholder3,
      title: "Performance",
      subtitle: "Track the performance of your investments",
    },
  ],
};

export type TemplateType = (typeof tempTemplateList.data)[number];
