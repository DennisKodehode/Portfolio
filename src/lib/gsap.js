import { gsap } from "gsap";
import { ScrollTrigger, Flip, ScrollToPlugin, SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger, Flip, ScrollToPlugin, SplitText);

export { gsap, ScrollTrigger, Flip, useGSAP, SplitText };
