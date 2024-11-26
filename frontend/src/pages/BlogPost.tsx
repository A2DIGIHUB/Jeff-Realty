import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { CalendarIcon, UserIcon, ClockIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

// Blog post data type
interface BlogPostType {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
}

// Sample blog post data
const blogPosts: Record<string, BlogPostType> = {
  '1': {
    id: '1',
    title: 'Top Neighborhoods in Enugu for Family Living',
    content: `
    When it comes to family living in Enugu, several neighborhoods stand out for their exceptional amenities, safety, and community atmosphere. Let's explore some of the top choices for families looking to settle in this vibrant city.

    Independence Layout
    Known for its well-planned streets and modern infrastructure, Independence Layout is one of Enugu's most prestigious residential areas. The neighborhood features:
    • Spacious compounds with family-friendly layouts
    • Proximity to quality schools and healthcare facilities
    • Well-maintained roads and regular power supply
    • Safe and secure environment with active neighborhood watch

    GRA (Government Reserved Area)
    The GRA remains a top choice for families seeking a blend of luxury and comfort:
    • Tree-lined streets and serene environment
    • Close to shopping centers and recreational facilities
    • Home to several international schools
    • Regular maintenance of public infrastructure

    Trans-Ekulu
    This rapidly developing area has become increasingly popular among young families:
    • Affordable housing options
    • Growing community of young professionals
    • New developments with modern amenities
    • Easy access to other parts of the city

    Making Your Choice
    When choosing a neighborhood in Enugu for your family, consider factors such as:
    1. Proximity to schools and workplaces
    2. Security arrangements
    3. Available amenities
    4. Community atmosphere
    5. Future development plans

    Each of these neighborhoods offers unique advantages for family living. Your final choice should align with your specific needs, budget, and lifestyle preferences.
    `,
    excerpt: 'Discover the best family-friendly neighborhoods in Enugu, from the serene Independence Layout to the bustling GRA area.',
    author: 'Jeff Emmanuel',
    date: 'March 15, 2024',
    readTime: '5 min read',
    image: '/images/modern-city-1.jpg',
    category: 'Neighborhood Guide'
  },
  '2': {
    id: '2',
    title: 'Investment Opportunities in Calabar Real Estate',
    content: `
    Calabar's real estate market is experiencing unprecedented growth, offering numerous opportunities for savvy investors. This comprehensive guide explores why Calabar is becoming a hotspot for property investment and how you can capitalize on these opportunities.

    Why Calabar?
    Calabar has emerged as a promising investment destination due to several factors:
    • Growing tourism sector
    • Stable political environment
    • Improving infrastructure
    • Rising population of young professionals

    Prime Investment Areas
    1. Calabar Municipality
    • High rental yield potential
    • Growing commercial activities
    • Strong appreciation prospects

    2. Satellite Town
    • Affordable entry points
    • Rapid development
    • Future growth potential

    3. State Housing Estate
    • Premium properties
    • Established infrastructure
    • Stable property values

    Investment Strategies
    Consider these approaches when investing in Calabar real estate:
    1. Buy and Hold
    2. Rental Properties
    3. Property Development
    4. Land Banking

    Risk Mitigation
    To protect your investment:
    • Conduct proper due diligence
    • Work with licensed agents
    • Verify all documentation
    • Stay informed about local regulations

    The Future of Calabar Real Estate
    With ongoing development projects and increasing interest from both local and international investors, Calabar's real estate market shows strong potential for continued growth and returns.
    `,
    excerpt: "Learn about the growing real estate market in Calabar and why it's becoming a hotspot for property investors.",
    author: 'Sarah Okon',
    date: 'March 12, 2024',
    readTime: '4 min read',
    image: '/images/nigeria-city-2.jpg',
    category: 'Investment'
  },
  // Add more blog posts here
};

const BlogPostComponent: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = id ? blogPosts[id] : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-gray-900">Blog post not found</h1>
          <p className="mt-4 text-gray-600">The blog post you're looking for doesn't exist.</p>
          <Link
            to="/blog"
            className="mt-8 inline-flex items-center text-primary hover:text-primary/80"
          >
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[70vh] min-h-[500px]">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        
        {/* Hero Content */}
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
            <Link
              to="/blog"
              className="inline-flex items-center text-white hover:text-gray-200 mb-8 group"
            >
              <ArrowLeftIcon className="h-5 w-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Link>
            <div>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300 mb-4">
                <div className="flex items-center">
                  <UserIcon className="h-5 w-5 mr-2" />
                  {post.author}
                </div>
                <div className="flex items-center">
                  <CalendarIcon className="h-5 w-5 mr-2" />
                  {post.date}
                </div>
                <div className="flex items-center">
                  <ClockIcon className="h-5 w-5 mr-2" />
                  {post.readTime}
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                {post.title}
              </h1>
              <div className="mt-6">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/90 text-primary">
                  {post.category}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <article className="bg-white rounded-2xl shadow-xl p-6 sm:p-10">
          <div className="prose prose-lg max-w-none">
            {post.content.split('\n').map((paragraph, index) => {
              if (paragraph.trim().endsWith(':')) {
                return (
                  <h3 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                    {paragraph.trim()}
                  </h3>
                );
              } else if (paragraph.trim().startsWith('•')) {
                return (
                  <ul key={index} className="list-disc pl-6 mb-4">
                    <li className="text-gray-600">{paragraph.trim().substring(1).trim()}</li>
                  </ul>
                );
              } else if (paragraph.trim().match(/^\d+\./)) {
                return (
                  <ol key={index} className="list-decimal pl-6 mb-4">
                    <li className="text-gray-600">{paragraph.trim().substring(2).trim()}</li>
                  </ol>
                );
              } else if (paragraph.trim()) {
                return (
                  <p key={index} className="text-gray-600 mb-6">
                    {paragraph.trim()}
                  </p>
                );
              }
              return null;
            })}
          </div>

          {/* Author Bio */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-16 w-16 rounded-full"
                  src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                    post.author
                  )}&background=random&size=128`}
                  alt={post.author}
                />
              </div>
              <div className="ml-6">
                <div className="text-base font-medium text-gray-900">{post.author}</div>
                <div className="text-sm text-gray-500">Real Estate Expert</div>
                <p className="mt-1 text-base text-gray-500">
                  Passionate about Nigerian real estate and helping people find their perfect homes.
                </p>
              </div>
            </div>
          </div>

          {/* Share Buttons */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <h3 className="text-lg font-medium text-gray-900">Share this article</h3>
              <div className="flex items-center space-x-4">
                <button className="p-2 text-gray-500 hover:text-primary transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </button>
                <button className="p-2 text-gray-500 hover:text-primary transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </button>
                <button className="p-2 text-gray-500 hover:text-primary transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </article>

        {/* Newsletter Section */}
        <div className="mt-16 bg-gray-900 rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="relative z-10">
            <div className="max-w-xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white">Never Miss an Update</h2>
              <p className="mt-4 text-lg text-gray-300">
                Subscribe to our newsletter for the latest real estate insights and market updates.
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
  );
};

export default BlogPostComponent;
