export const load = async () => {
    const modules = import.meta.glob('../posts/*.md');

    console.log(modules);
    const posts = [];
    for (const path in modules) {
        const post = await modules[path]();
        posts.push({
            ...post.metadata,
            path: path
                .replace('../posts/', '')
                .replace('.md', '')
        });
    }
    console.log(posts);
    
    posts.sort((a, b) => new Date(b.date) - new Date(a.date));
    return { posts };
};