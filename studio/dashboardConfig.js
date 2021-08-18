export default {
  widgets: [
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
                  buildHookId: '611c765608a24a7b5ebcd6b1',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-u978wo45',
                  apiId: 'fb93084c-3fc9-4546-a9c2-26f69c7a9853'
                },
                {
                  buildHookId: '611c76574352b47766fdf32f',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-rxvgrgbo',
                  apiId: '36554b4e-99e9-4793-b98a-23f59cbb38b9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/josehernandezv/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-rxvgrgbo.netlify.app', category: 'apps'}
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
