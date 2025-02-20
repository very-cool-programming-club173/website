import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "every week on thursdays from 13h-14h in room R105",
    description: <>consistant schedules are cool!</>,
  },
  {
    title: "have fun and make projects!",
    description: (
      <>
        every week, everyone works in their own project using a guided workshop,
        then they show what they did to everyone!
      </>
    ),
  },
  {
    title: "its made by students!",
    description: (
      <>
        its not made by a random professor that you never heard of (no negative
        connotations)
      </>
    ),
  },
];

function Feature({ title, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
