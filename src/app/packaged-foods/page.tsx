import { redirect } from 'next/navigation';

export default function PackagedFoodsRedirectPage() {
  redirect('/healthy-foods/snacks');
}
