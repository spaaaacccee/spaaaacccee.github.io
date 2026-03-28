import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const commonFields = {
  title: z.string(),
  description: z.string(),
  meta_title: z.string().optional(),
  date: z.coerce.date().optional(),
  image: z.string().optional(),
  draft: z.boolean().optional(),
};

// KMT Homepage
const homepageCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/home" }),
  schema: z.object({
    ...commonFields,
    hero: z.object({
      tagline: z.string(),
      subtitle: z.string(),
    }),
    philosophy: z.object({
      opening: z.string(),
      body: z.string(),
      closer: z.string(),
    }),
    pillars: z.array(
      z.object({
        keyword: z.string(),
        description: z.string(),
      }),
    ),
    team: z.object({
      headline: z.string(),
      members: z.array(
        z.object({
          name: z.string(),
          epithet: z.string(),
          role: z.string(),
          bio: z.string(),
          image: z.string(),
        }),
      ),
    }),
    services: z.object({
      headline: z.string(),
      items: z.array(
        z.object({
          title: z.string(),
          description: z.string(),
        }),
      ),
    }),
    connect: z.object({
      line: z.string(),
      email: z.string(),
    }),
  }),
});

const pricingCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/pricing" }),
  schema: z.object({
    ...commonFields,
    hero: z.object({
      title: z.string(),
      content: z.string(),
    }),
    plans: z.object({
      label: z.string(),
      packs: z.array(
        z.object({
          name: z.string(),
          description: z.string(),
          price: z.object({
            monthly_price: z.number(),
            yearly_price: z.number(),
          }),
          duration: z.string(),
          button: z.object({
            enable: z.boolean(),
            label: z.string(),
            link: z.string(),
          }),
          feature: z.object({
            title: z.string(),
            points: z.array(z.string()),
          }),
        }),
      ),
    }),
    clients: z.object({
      title: z.string(),
      logos: z.array(z.string()),
    }),
    contact: z.object({
      title_1: z.string(),
      title_2: z.string(),
      button: z.object({
        enable: z.boolean(),
        label: z.string(),
        link: z.string(),
      }),
    }),
  }),
});

const customerStoryCollection = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "src/content/story",
  }),
  schema: z.object({
    ...commonFields,
    feedback: z.object({
      title: z.string(),
      content: z.string(),
    }),
    story: z.object({
      title: z.string(),
      stories: z.array(
        z.object({
          customerName: z.string(),
          customerAvatar: z.string(),
          customerDesignation: z.string(),
          social: z.object({
            icon: z.string(),
            url: z.url(),
          }),
          story: z.string(),
        }),
      ),
    }),
  }),
});

const featureCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/feature" }),
  schema: z.object({
    ...commonFields,
    hero: z.object({
      title: z.string(),
      content: z.string(),
    }),
    features: z.array(
      z.object({
        title: z.string(),
        icon: z.string(),
        content: z.string(),
        button: z.object({
          enable: z.boolean(),
          label: z.string(),
          link: z.string(),
        }),
      }),
    ),
  }),
});

const newsCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/news" }),
  schema: z.object({
    ...commonFields,
    hero: z
      .object({
        title: z.string(),
        description: z.string(),
      })
      .optional(),
  }),
});

const contactCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/contact" }),
  schema: z.object({
    ...commonFields,
    contact: z.object({
      title: z.string(),
      content: z.string(),
    }),
    sale: z.object({
      title: z.string(),
      contact: z.email(),
    }),
    support: z.object({
      title: z.string(),
      contact: z.email(),
    }),
    help: z.object({
      title: z.string(),
      content: z.string(),
    }),
    form: z.object({
      title: z.string(),
      content: z.string(),
    }),
  }),
});

const careerCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/career" }),
  schema: z.object({
    ...commonFields,
    duration: z.string().optional(),
    location: z.string().optional(),
    hero: z
      .object({
        title: z.string(),
        cards: z.array(
          z.object({
            title: z.string(),
            icon: z.string(),
            content: z.string(),
            button: z.object({
              enable: z.boolean(),
              label: z.string(),
              link: z.string(),
            }),
          }),
        ),
      })
      .optional(),
    join: z
      .object({
        title: z.string(),
        image: z.string(),
        content: z.string(),
        points: z.array(
          z.object({
            title: z.string(),
            content: z.string(),
          }),
        ),
      })
      .optional(),
  }),
});

const demoCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/demo" }),
  schema: z.object({
    ...commonFields,
    hero: z.object({
      title: z.string(),
      content: z.string(),
    }),
    features: z.array(z.string()),
    logos: z.array(z.string()),
  }),
});

// Pages collection schema
const pagesCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/pages" }),
  schema: z.object({
    ...commonFields,
    hero: z
      .object({
        title: z.string(),
        update: z.string().optional(),
        content: z.string().optional(),
      })
      .optional(),
    button: z
      .object({
        enable: z.boolean(),
        label: z.string(),
        link: z.string(),
      })
      .optional(),
  }),
});

// Section
const ctaSectionCollection = defineCollection({
  loader: glob({
    pattern: "call-to-action.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    title: z.string(),
    content: z.string(),
    button: z.object({
      enable: z.boolean(),
      label: z.string(),
      link: z.string(),
    }),
  }),
});

const faqSectionCollection = defineCollection({
  loader: glob({ pattern: "faq.{md,mdx}", base: "src/content/sections" }),
  schema: z.object({
    title: z.string(),
    content: z.string(),
    faqs: z.array(
      z.object({
        question: z.string(),
        answer: z.string(),
      }),
    ),
  }),
});

// Export collections
export const collections = {
  // Pages
  homepage: homepageCollection,
  pricing: pricingCollection,
  customerStory: customerStoryCollection,
  feature: featureCollection,
  news: newsCollection,
  contact: contactCollection,
  career: careerCollection,
  demo: demoCollection,
  pages: pagesCollection,

  // sections
  ctaSection: ctaSectionCollection,
  faqSection: faqSectionCollection,
};
