export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Slug: {slug}</p>
    </div>
  );
}
