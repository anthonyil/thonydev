import React from 'react';
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs';
import { useRouter } from 'next/router';
import Search from '@components/Search';

function useHead() {
  const { asPath } = useRouter();
  const { frontMatter, title } = useConfig();
  const url = `https://anthonyil.github.io${asPath}`;
  const description = frontMatter.description || "Documentação dos scripts do Thony";

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/x-icon" href="/static/thony.ico" />
      <meta httpEquiv="Content-Language" content="pt-BR" />
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:url" content={url} />
    </>
  );
}

function useNextSeoProps() {
  const { asPath } = useRouter();
  const arr = asPath.replace(/[-_]/g, ' ').split('/');
  const category = (arr[1][0] !== '#' && arr[1]) || 'Thony Dev';
  const rawTitle = arr[arr.length - 1];
  const title = /[a-z]/.test(rawTitle) && /[A-Z]/.test(rawTitle) ? rawTitle : '%s';

  return {
    titleTemplate: `${title} - ${
      rawTitle === category ? 'Documentação' : category.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase())
    }`,
  };
}

const config: DocsThemeConfig = {
  logo: (
    <div
      style={{
        paddingLeft: '50px',
        lineHeight: '38px',
        background: "url('https://avatars.githubusercontent.com/u/16389307?v=4') no-repeat left",
        backgroundSize: '38px',
        fontWeight: 550,
      }}
    >
      Thony Dev
    </div>
  ),
  project: {
    link: 'https://github.com/anthonyil/thonydev',
  },
  chat: {
    link: 'https://discord.gg/KDAkc3p6MG',
  },
  docsRepositoryBase: 'https://github.com/anthonyil/thonydev/blob/main',
  footer: {
    text: 'Thony Dev',
  },
  // search: {
  //   component: <Search />,
  // },
  head: useHead,
  primaryHue: { dark: 200, light: 200 },
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },

  useNextSeoProps: useNextSeoProps,
};

export default config;
