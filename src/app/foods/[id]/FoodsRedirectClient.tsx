'use client';

import { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';

export default function FoodsRedirectClient() {
  const params = useParams();
  const router = useRouter();

  useEffect(() => {
    const id = params?.id as string;
    if (id) {
      router.replace(`/healthy-foods/${id}`);
    }
  }, [params?.id, router]);

  return (
    <div className="min-h-screen flex items-center justify-center text-slate-600">
      Redirecting…
    </div>
  );
}
