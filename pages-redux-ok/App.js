import React from 'react'

import { Navbar } from './app/Navbar'

import { PostsList } from './features/posts/PostsList'
import { AddPostForm } from './features/posts/AddPostForm'

function App() {
  const theme = {
    logo: {
      width: 124,
      topBarSource:
        'https://cdn.shopify.com/s/files/1/0446/6937/files/jaded-pixel-logo-color.svg?6215648040070010999',
      contextualSaveBarSource:
        'https://cdn.shopify.com/s/files/1/0446/6937/files/jaded-pixel-logo-gray.svg?6215648040070010999',
      url: 'http://jadedpixel.com',
      accessibilityLabel: 'Jaded Pixel',
    },
  };
  return (
   
 
<AppProvider
theme={theme}
i18n={{
  Polaris: {
    Avatar: {
      label: 'Avatar',
      labelWithInitials: 'Avatar with initials {initials}',
    },
    ContextualSaveBar: {
      save: 'Save',
      discard: 'Discard',
    },
    TextField: {
      characterCount: '{count} characters',
    },
    TopBar: {
      toggleMenuLabel: 'Toggle menu',

      SearchField: {
        clearButtonLabel: 'Clear',
        search: 'Search',
      },
    },
    Modal: {
      iFrameTitle: 'body markup',
    },
    Frame: {
      skipToContent: 'Skip to content',
      navigationLabel: 'Navigation',
      Navigation: {
        closeMobileNavigationLabel: 'Close navigation',
      },
    },
  },
}}
>
    <React.Fragment>
      <AddPostForm />
      <PostsList />
    </React.Fragment>

</AppProvider>
           
  )
}

export default App
