export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e49c0f19ce14cb15a463421',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-7ga4oqg7',
                  apiId: '2b450be5-3011-40f4-8f4e-4b328740059f'
                },
                {
                  buildHookId: '5e49c0f1645e93f829b1e789',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-53nbw4t2',
                  apiId: '7536fa24-d0c9-4870-bc31-8926d30b5e3e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/akholmatova/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-53nbw4t2.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
