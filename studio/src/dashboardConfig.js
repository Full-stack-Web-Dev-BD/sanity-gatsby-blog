export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '602d6bd9586cbd37a502bae4',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-wgym3nje',
                  apiId: '6e5a007f-ca19-4f5e-9069-13471aaff43a'
                },
                {
                  buildHookId: '602d6bd90d211f2a05f109de',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-espkvhqr',
                  apiId: '957167f4-66e5-4c63-9bf5-8f0c61cbf6c8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Full-stack-Web-Dev-BD/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-espkvhqr.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
