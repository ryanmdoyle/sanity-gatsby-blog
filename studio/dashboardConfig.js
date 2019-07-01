export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5d1a7726b925054eff6f3cba',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-vugrgd79',
                  apiId: 'e3f685f7-181c-4f71-8a38-026db7060ee9'
                },
                {
                  buildHookId: '5d1a7727fbf19a4f6808e919',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-76xb921w',
                  apiId: '6e3fc2a5-4ce7-4784-8538-5d31c27c6172'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ryanmdoyle/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-76xb921w.netlify.com', category: 'apps'}
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
