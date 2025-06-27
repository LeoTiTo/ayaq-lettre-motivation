// mdx-components.js
/** ce hook permet de surcharger globalement vos composants MDX si besoin */
export function useMDXComponents(components) {
    return {
      // récupère tous les composants par défaut
      ...components,
      // par exemple vous pourriez surcharger h1, p, etc.
      // h1: (props) => <h1 className="text-4xl" {...props} />,
    }
  }
  