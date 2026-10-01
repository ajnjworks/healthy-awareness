import { redirect } from 'next/navigation';

export default function FoodDetailRedirectPage({ params }: { params: { id: string } }) {
  redirect(`/healthy-foods/${params.id}`);
}
