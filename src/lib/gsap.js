import { gsap } from "gsap";
import { ScrollTrigger, Flip, ScrollToPlugin } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger, Flip, ScrollToPlugin);

export { gsap, ScrollTrigger, Flip, useGSAP };
