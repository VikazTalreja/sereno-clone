import React from 'react';
import Link from 'next/link';

const Blog = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Blog Insights</h2>
        <div className="space-y-6">
          <article className="border-l-4 border-sereno-green pl-4 py-2">
            <Link href="/blog/enterprise-ai-2025" className="block hover:opacity-80 transition">
              <h3 className="text-lg font-semibold mb-2">The 10-Year Stay Ahead of AI as an Enterprise In 2025</h3>
            </Link>
          </article>
          
          <article className="border-l-4 border-sereno-green pl-4 py-2">
            <Link href="/blog/ai-agent-swarms" className="block hover:opacity-80 transition">
              <h3 className="text-lg font-semibold mb-2">AI Agent Swarms: What They Are and How They'll Change Market Intelligence</h3>
            </Link>
          </article>
          
          <article className="border-l-4 border-sereno-green pl-4 py-2">
            <Link href="/blog/genai-indian-enterprises" className="block hover:opacity-80 transition">
              <h3 className="text-lg font-semibold mb-2">Beyond Datacots: Real Use Cases of GenAI in Indian Enterprises</h3>
            </Link>
          </article>
        </div>
        
        <div className="mt-8">
          <Link href="/blog" className="text-sereno-blue font-medium hover:underline">
            View All Posts →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog; 