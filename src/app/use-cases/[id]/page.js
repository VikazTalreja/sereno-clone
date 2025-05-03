'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function UseCasePage({ params }) {
  const router = useRouter();
  const resolvedParams = React.use(params);
  const { id } = resolvedParams;

  useEffect(() => {
    // Redirect to the use cases page with the modal parameter
    router.replace(`/use-cases?id=${id}&showModal=true`);
  }, [id, router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#0f253c]"></div>
        <p className="mt-4 text-gray-600">Loading...</p>
      </div>
    </div>
  );
} 