export async function generateMetadata({ params, searchParams }, parent: any) {
  const slug = params.slug;

  const blogs = await fetch(`http://localhost:3000/api/`).then((res) =>
    res.json()
  );

  return {
    title: blogs[0].title,
    description: blogs[0].description,
  };
}

export default function BlogDetai(props) {
  return (
    <div style={{ padding: 50 }}>
      <h1>{props.params.slug}</h1>
      <hr></hr>
    </div>
  );
}
