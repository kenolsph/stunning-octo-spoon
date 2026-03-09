import { ArrowRight } from "lucide-react";

const blogPosts = [
  // {
  //   title: "How to Explain Web3 to Your Friends Without Sounding Like a Scammer",
  //   date: "Dec 2024",
  //   description: "A guide to explaining Web3 concepts simply and effectively.",
  //   url: "https://monisdev.hashnode.dev/how-to-explain-web3-to-your-friends-without-sounding-like-a-scammer",
  // },
  // {
  //   title: "Smart Contracts 101: The Digital Agreements of the Crypto World",
  //   date: "Nov 2024",
  //   description: "Understanding the fundamentals of smart contracts and how they work.",
  //   url: "https://monisdev.hashnode.dev/smart-contracts-101-the-digital-agreements-of-the-crypto-world",
  // },
  // {
  //   title: "The Ultimate Beginner's Guide to Alternative Chains",
  //   date: "Oct 2024",
  //   description: "Exploring different blockchain networks beyond Ethereum and Bitcoin.",
  //   url: "https://monisdev.hashnode.dev/the-ultimate-beginners-guide-to-alternative-chains",
  // },
];

export const Blog = () => {
  // return (
  //   <section id="blog" className="py-24 px-4 bg-dark">
  //     <div className="container max-w-4xl">
  //       {/* Section Header */}
  //       <div className="mb-12">
  //         <h2 className="text-3xl md:text-4xl font-bold mb-3">Writing</h2>
  //         <p className="text-muted-foreground text-lg">
  //           Thoughts, learnings, and tutorials published on{" "}
  //           <a
  //             // href="https://monisdev.hashnode.dev/"
  //             target="_blank"
  //             rel="noopener noreferrer"
  //             className="text-primary hover:underline"
  //           >
  //             Hashnode
  //           </a>
  //           .
  //         </p>
  //       </div>

  //       {/* Blog Posts */}
  //       <div className="space-y-4">
  //         {blogPosts.map((post) => (
  //           <a
  //             key={post.title}
  //             href={post.url}
  //             target="_blank"
  //             rel="noopener noreferrer"
  //             className="group block p-6 rounded-xl bg-card border border-border hover:border-muted-foreground/50 transition-all duration-300 shadow-card"
  //           >
  //             <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
  //               <div className="flex-1">
  //                 <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
  //                   {post.title}
  //                 </h3>
  //                 <p className="text-muted-foreground text-sm">{post.description}</p>
  //               </div>
  //               <div className="flex items-center gap-2 text-sm text-muted-foreground">
  //                 <span>{post.date}</span>
  //                 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
  //               </div>
  //             </div>
  //           </a>
  //         ))}
  //       </div>
  //     </div>
  //   </section>
  // );
};
