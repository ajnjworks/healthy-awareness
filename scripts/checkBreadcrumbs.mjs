const res = await fetch('http://localhost:3000/healthy-foods/banana');
const html = await res.text();

console.log('Status:', res.status);
console.log('Has href="/":', html.includes('href="/"'));
console.log('Has href="/healthy-foods":', html.includes('href="/healthy-foods"'));
console.log('Has href="/healthy-foods/fruits":', html.includes('href="/healthy-foods/fruits"'));

const bannerRes = await fetch('http://localhost:3000/healthy-foods/fruits');
const bannerHtml = await bannerRes.text();
console.log('Banner has href="/":', bannerHtml.includes('href="/"'));
console.log('Banner has href="/healthy-foods":', bannerHtml.includes('href="/healthy-foods"'));
