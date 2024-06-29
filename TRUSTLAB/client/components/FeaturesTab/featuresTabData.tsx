import { FeatureTab } from "@/types/featureTab";

const featuresTabData: FeatureTab[] = [
  {
    id: "tabOne",
    title: "Access Your Health Journey...",
    desc1: `Log in to your patient account to view your test results, schedule appointments, and manage your health profile with ease.`,
    desc2: `Nam id eleifend dui, id iaculis purus. Etiam lobortis neque nec finibus sagittis. Nulla ligula nunc egestas ut.`,
    image: "/images/features/features-light-01.png",
    imageDark: "/images/features/features-dark-01.svg",
    onlyUrl:"/auth/signin"
  },
  {
    id: "tabTwo",
    title: "Connect with Care: Doctor Login",
    desc1: `Calling all medical professionals! Sign in to your doctor account to access patient records, manage appointments, and collaborate with colleagues seamlessly.`,
    desc2: `    Nam id eleifend dui, id iaculis purus. Etiam lobortis neque nec finibus sagittis. Nulla ligula nunc egestas ut.`,
    image: "/images/features/features-light-01.png",
    imageDark: "/images/features/features-dark-01.svg",
    onlyUrl:"/auth/signind"
  },
  {
    id: "tabThree",
    title: "Streamline Your Health Initiatives: Corporate Login",
    desc1: `Corporate partners, welcome aboard! Log in to your corporate account to streamline employee health programs, access health reports, and track wellness initiatives effortlessly`,
    desc2: `Nam id eleifend dui, id iaculis purus. Etiam lobortis neque nec finibus sagittis. Nulla ligula nunc egestas ut.`,
    image: "/images/features/features-light-01.png",
    imageDark: "/images/features/features-dark-01.svg",
    onlyUrl:"/auth/signinc"
  },
];

export default featuresTabData;
