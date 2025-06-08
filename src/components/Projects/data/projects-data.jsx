export const projectsData = [
  // CXC
  {
    title: "CXC",
    role: "Manager, UX/UI Design, Development",
    year: "2024-2025 @Booking.com",
    details: (
      <>
        <p className="mb-4">
          Modern software development relies on reusable components, but
          tracking their metadata, like ownership, maturity, accessibility,
          performance, and dependencies, can be chaotic. CXC (<b>C</b>
          ustomer e<b>X</b>perience <b>C</b>
          atalog) is a centralized hub that organizes every UI element and their
          API with detailed metadata, improving governance, efficiency, and
          scalability.
        </p>
        <p>
          In this project, I led end-to-end development, from initial
          architecture design to implementation. I collaborated closely with
          stakeholders to define requirements, built scalable frontend and
          backend systems, and ensured seamless integration with existing tools.
          My work enabled teams to efficiently discover, manage, and reuse
          components, reducing redundancy and accelerating development.
        </p>
      </>
    ),
    illustration: "src/components/Projects/assets/project0-lg.webp",
    id: 0,
    blocked: true,
    technology: {
      withReact: true,
      withSass: true,
      withTS: true,
      withJest: true,
      withTestingLibrary: true,
      withPlaywright: true,
      withAWS: true,
      withWebpack: true,
    },
  },
  // Circle of Lines
  {
    title: "Circle of Lines",
    role: "Development",
    year: 2025,
    details: (
      <>
        <p className="mb-4">
          What if you could see a circle without actually drawing one? In this
          playful coding adventure, I explored generative art by revealing
          circles through their diameters, no curves, just lines !
        </p>
        <p>
          Each run generates a unique composition turning math into mesmerizing
          art. No fancy libraries, just raw geometry and curiosity. Perfect for
          screensavers, wall art, or a nerdy reminder that complexity often
          hides in plain sight.
        </p>
      </>
    ),
    illustration: "src/components/Projects/assets/project1-lg.webp",
    id: 1,
    link: "https://math-is-art-gabriels.vercel.app/art/circlesOfLines/",
    technology: {
      withReact: true,
      withSass: true,
      withJest: true,
      withVite: true,
      withVercel: true,
    },
  },
  // chateau de Morin
  {
    title: "Chateau de Morin",
    role: "Development",
    year: 2016,
    illustration: "src/components/Projects/assets/project2-lg.webp",
    details: (
      <>
        <p className="mb-4">
          Imagine exchanging vows in a real-life castle, where ancient stone
          walls meet modern luxury. Our majestic venue offers grand halls,
          sweeping staircases, and enchanted gardens, perfect for weddings,
          milestone birthdays, or dreamy celebrations.
        </p>
        <p>
          Whether you're planning a whimsical wedding or a birthday fit for
          royalty, this castle transforms moments into legends.
        </p>
      </>
    ),
    link: "https://chateaudemorin.com/",
    id: 2,
  },
  // Coming soon
  {
    title: "Coming Soon",
    role: "Development",
    year: 2025,
    illustration: "src/components/Projects/assets/project3-lg.webp",
    id: 3,
    details: (
      <>
        <p>
          A lightweight React package that replaces any &lt;div&gt; with an
          elegant "Coming Soon" placeholder. Features customizable text, perfect
          for WIP sections or under-construction UI. Fun fact, it was used on
          this portfolio in some of the projects !
        </p>
      </>
    ),
    technology: {
      withReact: true,
      withVite: true,
      withNPM: true,
    },
  },
  // Math is Art
  {
    title: "math is Art",
    role: "Development",
    year: 2025,
    illustration: "src/components/Projects/assets/project4-lg.webp",
    id: 4,
    link: "https://math-is-art-gabriels.vercel.app/art/",
    details: (
      <>
        <p>
          Explore the mesmerizing world of algorithmic art with my interactive
          platform dedicated to generative experiments. From fractal landscapes
          to evolving digital patterns, I turn code into captivating visuals.
          Each piece is unique, dynamic, and born from mathematical beauty.
        </p>
      </>
    ),
  },
  // Hawaya
  {
    title: "Hawaya",
    role: "Direction of Engineering",
    year: "2021-2022 @MatchGroup",
    illustration: "src/components/Projects/assets/project5-lg.webp",
    id: 5,
    link: "https://www.hawaya.com/",
    details: (
      <>
        <p className="mb-4">
          Hawaya is a dating app designed for Muslim singles seeking serious
          relationships rooted in shared values. Unlike typical swipe apps,
          Hawaya combines smart matchmaking with safety features to create a
          trusted space for love to flourish.
        </p>
        <p>
          I was responsible for driving the architecture, scaling the platform,
          and ensuring high-quality delivery across frontend, backend, and
          infrastructure. My role spanned technical strategy, team leadership,
          and product excellence, overseeing performance optimization, security,
          and seamless user experiences. I collaborated with product, design,
          marketing, brand, to align tech with business goals, while
          implementing rigorous QA processes to maintain reliability.
        </p>
      </>
    ),
    technology: {
      withReactNative: true,
      withTS: true,
      withJest: true,
      withTestingLibrary: true,
      withGCP: true,
    },
  },
];
