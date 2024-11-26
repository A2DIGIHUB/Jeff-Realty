import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarIcon, UserIcon, ClockIcon } from '@heroicons/react/24/outline';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Top Neighborhoods in Enugu for Family Living',
    excerpt: 'Discover the best family-friendly neighborhoods in Enugu, from the serene Independence Layout to the bustling GRA area.',
    author: 'Jeff Emmanuel',
    date: 'March 15, 2024',
    readTime: '5 min read',
    image: '/images/modern-city-1.jpg',
    category: 'Neighborhood Guide'
  },
  {
    id: '2',
    title: 'Investment Opportunities in Calabar Real Estate',
    excerpt: "Learn about the growing real estate market in Calabar and why it's becoming a hotspot for property investors.",
    author: 'Sarah Okon',
    date: 'March 12, 2024',
    readTime: '4 min read',
    image: '/images/nigeria-city-2.jpg',
    category: 'Investment'
  },
  {
    id: '3',
    title: 'Tips for First-Time Home Buyers in Nigeria',
    excerpt: 'Essential advice for navigating the Nigerian real estate market as a first-time home buyer.',
    author: 'Chioma Nnamdi',
    date: 'March 10, 2024',
    readTime: '6 min read',
    image: '/images/modern-house-3.jpg',
    category: 'Buying Guide'
  },
  {
    id: '4',
    title: 'Understanding Property Documentation in Nigeria',
    excerpt: 'A comprehensive guide to property documentation and legal requirements for real estate transactions in Nigeria.',
    author: 'Barrister Michael Eze',
    date: 'March 8, 2024',
    readTime: '7 min read',
    image: '/images/modern-city-4.jpg',
    category: 'Legal'
  },
  {
    id: '5',
    title: 'Home Renovation Tips for Nigerian Properties',
    excerpt: 'Expert advice on renovating your property to increase its value in the Nigerian real estate market.',
    author: 'Architect Ada Okoro',
    date: 'March 5, 2024',
    readTime: '5 min read',
    image: '/images/luxury-house-5.jpg',
    category: 'Home Improvement'
  },
  {
    id: '6',
    title: 'The Rise of Luxury Real Estate in Enugu',
    excerpt: 'Exploring the growing luxury property market in Enugu and what it means for investors and homebuyers.',
    author: 'Jeff Emmanuel',
    date: 'March 1, 2024',
    readTime: '6 min read',
    image: '/images/mansion-2.jpg',
    category: 'Market Trends'
  }
];

const Blog: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gray-900 py-24 sm:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/images/blog-hero.jpg"
            alt="Blog hero"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/50" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Real Estate Insights
            </h1>
            <p className="mt-6 text-xl text-gray-300">
              Discover the latest trends, expert advice, and market insights in Nigerian real estate.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Post */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
        <Link
          to={`/blog/${blogPosts[0].id}`}
          className="group relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 block"
        >
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2">
              <div className="relative h-72 lg:h-[500px]">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent lg:bg-gradient-to-r" />
              </div>
            </div>
            <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center space-x-2 text-sm">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                  {blogPosts[0].category}
                </span>
                <span className="text-gray-500">{blogPosts[0].date}</span>
              </div>
              <h2 className="mt-4 text-3xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                {blogPosts[0].title}
              </h2>
              <p className="mt-4 text-lg text-gray-600 line-clamp-3">
                {blogPosts[0].excerpt}
              </p>
              <div className="mt-8 flex items-center">
                <img
                  src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                    blogPosts[0].author
                  )}&background=random`}
                  alt={blogPosts[0].author}
                  className="h-10 w-10 rounded-full"
                />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900">{blogPosts[0].author}</p>
                  <p className="text-sm text-gray-500">{blogPosts[0].readTime}</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-56">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/90 text-primary">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300 mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-600 line-clamp-3 mb-6">
                  {post.excerpt}
                </p>
                <div className="flex items-center">
                  <img
                    src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                      post.author
                    )}&background=random`}
                    alt={post.author}
                    className="h-8 w-8 rounded-full"
                  />
                  <span className="ml-3 text-sm font-medium text-gray-900">
                    {post.author}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-16 relative overflow-hidden">
          <div className="bg-gray-900 rounded-2xl p-8 md:p-12">
            <div className="relative z-10">
              <div className="max-w-xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-white">Stay Updated</h2>
                <p className="mt-4 text-lg text-gray-300">
                  Get the latest real estate insights delivered straight to your inbox.
                </p>
                <form className="mt-8 flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 min-w-0 px-4 py-3 text-base text-gray-900 placeholder-gray-500 bg-white border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <button
                    type="submit"
                    className="flex-none px-6 py-3 text-base font-medium text-white bg-primary rounded-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
            <div className="absolute inset-0 opacity-10 pattern-dots" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
