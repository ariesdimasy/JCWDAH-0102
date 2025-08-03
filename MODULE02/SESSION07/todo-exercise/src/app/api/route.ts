export async function GET(request: Request) {
    return await Response.json([
        {
            title: "berita heboh",
            slug: "berita-heboh",
            description: "berita heboh"
        },
        {
            title: "berita heboh juga",
            slug: "berita-heboh-juga",
            description: "berita heboh juga"
        }
    ])
}