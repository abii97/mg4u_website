# Graph Report

**Nodes:** 70 | **Edges:** 82 | **Communities:** 19

## Hub Nodes (God Nodes)

- **framer_motion** (degree: 17, community: 50)
- **map** (degree: 17, community: 53)
- **page.js** (degree: 8, community: 15)
- **Navbar()** (degree: 7, community: 32)
- **CaseStudiesPage()** (degree: 4, community: 53)
- **Navbar.js** (degree: 4, community: 32)
- **ContactPage()** (degree: 4, community: 61)
- **next_link** (degree: 4, community: 25)
- **AboutPage()** (degree: 3, community: 53)
- **layout.js** (degree: 3, community: 13)

## Surprising Connections

- contact_page -> framer_motion (imports) [community 62 -> 50]
- contact_page -> contact_page::ContactPage (contains) [community 62 -> 61]
- about_page -> about_page::AboutPage (contains) [community 50 -> 53]
- case-studies_page -> case-studies_page::CaseStudiesPage (contains) [community 50 -> 53]
- services_page -> services_page::ServicesPage (contains) [community 50 -> 53]
- components_WhyUsSection -> framer_motion (imports) [community 46 -> 50]
- components_WhyUsSection::WhyUsSection -> map (calls) [community 46 -> 53]
- components_ServicesSection -> framer_motion (imports) [community 53 -> 50]
- components_IndustriesSection -> framer_motion (imports) [community 30 -> 50]
- components_IndustriesSection::IndustriesSection -> map (calls) [community 30 -> 53]
- components_Navbar -> react (imports) [community 32 -> 62]
- components_Navbar -> next_link (imports) [community 32 -> 25]
- components_Navbar -> framer_motion (imports) [community 32 -> 50]
- components_Navbar::Navbar -> usestate (calls) [community 32 -> 61]
- components_Navbar::Navbar -> map (calls) [community 32 -> 53]
- components_Testimonials::Testimonials -> map (calls) [community 50 -> 53]
- components_ServicesPreview -> framer_motion (imports) [community 38 -> 50]
- components_ServicesPreview::ServicesPreview -> map (calls) [community 38 -> 53]
- components_ProblemSection -> framer_motion (imports) [community 34 -> 50]
- components_CaseStudiesSection -> components_CaseStudiesSection::CaseStudiesSection (contains) [community 50 -> 53]
- components_ProcessSection -> components_ProcessSection::ProcessSection (contains) [community 50 -> 53]
- components_TrustedBySection -> framer_motion (imports) [community 43 -> 50]
- components_TrustedBySection::TrustedBySection -> map (calls) [community 43 -> 53]
- components_CaseStudiesPreview -> next_link (imports) [community 50 -> 25]
- components_CaseStudiesPreview::CaseStudiesPreview -> map (calls) [community 50 -> 53]
- components_CTASection -> framer_motion (imports) [community 20 -> 50]
- components_CTASection -> next_link (imports) [community 20 -> 25]

## Suggested Questions

- Why does framer_motion have so many connections?
- Why does map have so many connections?
- Why does page.js have so many connections?
- Why does Navbar() have so many connections?
- Why does CaseStudiesPage() have so many connections?
- What connects the 19 different communities?
