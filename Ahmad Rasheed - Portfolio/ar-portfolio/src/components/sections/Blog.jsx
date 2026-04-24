import { motion } from 'framer-motion';

const Blog = () => {
  const posts = [
    {
      title: "Design conferences in 2022",
      category: "Design",
      date: "Fab 23, 2022",
      desc: "Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.",
      image: "https://picsum.photos/400/250?random=10"
    },
    {
      title: "Best fonts for every design",
      category: "Design",
      date: "Fab 23, 2022",
      desc: "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem.",
      image: "https://picsum.photos/400/250?random=11"
    },
    {
      title: "Design sign in font ecc",
      category: "Design",
      date: "Fab 23, 2022",
      desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
      image: "https://picsum.photos/400/250?random=12"
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <header className="relative pb-5">
        <h2 className="text-3xl font-semibold">Blog</h2>
        <div className="absolute bottom-0 left-0 w-10 h-1 bg-accent rounded-full"></div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post, index) => (
          <article key={index} className="glass-card overflow-hidden group cursor-pointer shadow-sm">
            <div className="relative overflow-hidden aspect-video">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
              />
            </div>
            <div className="p-6 space-y-3">
              <div className="flex items-center gap-2 text-sm text-text-secondary/60">
                <span>{post.category}</span>
                <span className="w-1 h-1 bg-text-secondary/30 rounded-full"></span>
                <time>{post.date}</time>
              </div>
              <h3 className="text-xl font-semibold group-hover:text-accent transition-colors">{post.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed line-clamp-2">{post.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </motion.div>
  );
};

export default Blog;
