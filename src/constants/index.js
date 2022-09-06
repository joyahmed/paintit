import {
  adamsGolf,
  award1,
  award2,
  award3,
  award4,
  company,
  customer,
  damaged,
  demarini,
  email,
  facebook,
  gutterReplaceInstall,
  heroSlide1,
  heroSlide2,
  heroSlide3,
  heroSlide4,
  instagram,
  leaked,
  linkedin,
  omni,
  people01,
  people02,
  people03,
  phone,
  pin,
  puncturesHoles,
  replacementSiding,
  residentialRoofing,
  roofDamage,
  roofIcon,
  roofLeak,
  roofLeakMan,
  send,
  senergy,
  shield,
  shrinkage,
  star,
  team1,
  team2,
  team3,
  transaction,
  twitter,
  uplifted,
} from "../assets";

export let navLinks = [
  {
    id: "home",
    title: "Home",
    href: "/",
  },
  {
    id: "features",
    title: "About",
    href: "about",
  },
  {
    id: "services",
    title: "Services",
    href: "services",
  },
  {
    id: "contact",
    title: "Contact",
    href: "contact",
  },
  {
    id: "admin/dashboard",
    title: "Dashboard",
    href: "admin/dashboard",
  },
  {
    id: "theme",
    title: "Theme",
    href: "",
  },
  // {
  //   id: "logout",
  //   title: "Logout",
  //   href: "",
  // },
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Rewards",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, aliquid.",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "Guaranted Satifaction",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, aliquid.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Money Back",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, aliquid.",
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Happy Customers",
    value: 3800,
    image: customer,
  },
  {
    id: "stats-2",
    title: "Trusted by Companies",
    value: 230,
    image: company,
  },
  {
    id: "stats-3",
    title: "Transactions",
    value: 500,
    image: transaction,
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, eveniet.",
    name: "Herman Jensen",
    title: "Founder & Leader",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias commodi perferendis error.",
    name: "Steve Mark",
    title: "Founder & Leader",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias commodi perferendis error.",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    img: people03,
  },
];

export const rooferServices = [
  {
    title: "Leaks",
    description: `Leaks are the most common roofing problems that people encounter. Leaking on the roof is normally caused by a variety of issues. For instance, accumulation of leaves on the roof can trigger moisture-related damages which end up causing leaks. Faulty installation and the age of the roof can also trigger leaks.`,
    img: leaked,
    icon: roofLeak,
  },
  {
    title: "Uplifted Roofing Material",
    description: `Uplifting of roofing materials is also a common type of roof damage and one of the primary reasons why homeowners seek roofing repairs. This type of damage is commonly caused by elements of weather like strong winds. Strong winds can cause misplacement of tiles and shingles hence causing leaks and paving the way for pests and insects to enter your home through the roof.`,
    img: uplifted,
    icon: roofDamage,
  },
  {
    title: "Damaged Roofing Materials",
    description: `Another common kind of roof damage is missing materials. When the roof misses materials like shingles and coverings, it leads to a lot of issues like leaks. Missing roofing materials is the easiest kind of roof damage to detect or identify.

		For instance, if the shingles dropped inside your house or around your compound, you could come across them and identify the damage.

		Note that missing shingles is an indication that your home is prone to water damage, especially during the rainy season. Damages to roofing materials caused by age and other factors are also very common.`,
    img: damaged,
    icon: roofIcon,
  },
  {
    title: "Punctures and Holes",
    description: `Punctures and holes are also very common types of roof damage. They may seem trivial, but they can cause a wide range of issues. For instance, holes on the roof can cause leaks and allow pests and insects into your home.

		Such damages can be caused by pests like woodpeckers or contractors walking over shingles when building. It can also come as a result of rotting caused by moisture on the roof.`,
    img: puncturesHoles,
    icon: roofLeakMan,
  },
];

export const servicePage = [
  {
    title: "Residentital Roofing",
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo consectetur vero mollitia nemo blanditiis unde rem veritatis aliquam minima cum vel, ipsa saepe rerum, dolore eligendi, exercitationem porro dolor laboriosam.`,
    img: residentialRoofing,
  },
  {
    title: "Replacement Gutter",
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo consectetur vero mollitia nemo blanditiis unde rem veritatis aliquam minima cum vel, ipsa saepe rerum, dolore eligendi, exercitationem porro dolor laboriosam.`,
    img: gutterReplaceInstall,
  },
  {
    title: "Replacement Siding",
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo consectetur vero mollitia nemo blanditiis unde rem veritatis aliquam minima cum vel, ipsa saepe rerum, dolore eligendi, exercitationem porro dolor laboriosam.`,
    img: replacementSiding,
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.hoobank.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: adamsGolf,
  },
  {
    id: "client-3",
    logo: omni,
  },
  {
    id: "client-2",
    logo: demarini,
  },
  {
    id: "client-4",
    logo: senergy,
  },
];

export const contactItems = [
  { name: phone, icon: phone, one: "+1-416-555-0130", two: "613 555 0154" },
  { name: email, icon: email, one: "info@roofer.com", two: "help@roofer.com" },
  {
    name: pin,
    icon: pin,
    one: "9 Florence St Ottawa",
    two: "Ontario K2P OW6, Canada",
  },
];

export const aboutList = [
  "Exploring version oflorem veritatis proin",
  "Auctor aliquet aenean simply free text veritatis quis",
  "Consequat ipsum nec lorem sagittis sem nibh",
];

export const awards = [award1, award2, award3, award4];

export const aboutStaffs = [
  `We've expert & certified staffs`,
  "We only provide quality services",
  "We offer you free estimates",
];

export const rooferTeam = [
  {
    id: 1,
    name: "Tom Jones",
    image: team1,
    designation: "Executive",
  },
  {
    id: 2,
    name: "Brenda Lee",
    image: team2,
    designation: "Manager",
  },
  {
    id: 3,
    name: "Mike Anderson",
    image: team3,
    designation: "Director",
  },
];

export const heroSlider = [
  {
    id: 1,
    image: heroSlide1,
    text1: "Commercial & Residential",
    text2: `Reliable Painting\n& Fixing Services`,
    text3: `We provide a variety of painting and maintenance services\n for all type of houses.
      `,
  },
  {
    id: 2,
    image: heroSlide2,
    text1: "Commercial & Residential",
    text2: `Reliable Painting\n& Fixing Services`,
    text3: `We provide a variety of painting and maintenance services\n for all type of houses.
      `,
  },
  {
    id: 3,
    image: heroSlide3,
    text1: "Commercial & Residential",
    text2: `Reliable Painting\n& Fixing Services`,
    text3: `We provide a variety of painting and maintenance services\n for all type of houses.
      `,
  },
  {
    id: 4,
    image: heroSlide4,
    text1: "Commercial & Residential",
    text2: `Reliable Painting\n& Fixing Services`,
    text3: `We provide a variety of painting and maintenance services\n for all type of houses.
      `,
  },
];
