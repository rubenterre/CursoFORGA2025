export const load = async ({ params }) => {
    const slug = params.slug;
    const modules = import.meta.glob('../../posts/*.md');

    // Busca o módulo cuxo nome coincide co slug
    const matchPath = Object.keys(modules).find((path) =>
        path.endsWith(`${slug}.md`)
    );

    if (!matchPath) {
        // Se non existe, retorna un error 404
        return { status: 404, error: new Error('Post no encontrado') };
    }
    
    // Importa o módulo correspondente
    const mod = await modules[matchPath]();
    // Devolve os metadatos e o compoñente de contido
    return {
        post: {
            ...mod.metadata,
            Content: mod.default
        }
    };
};