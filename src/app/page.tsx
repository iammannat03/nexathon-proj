import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <span>Landing page</span>
      <div>
        <Button variant="outline" asChild>
          <Link href="/seeker">Get Started</Link>
        </Button>
      </div>
    </div>
  );
};

export default page;
