import Head from 'next/head';

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='keywords' content={description} />

      <meta charSet='utf-8' />
      <link rel='icon' href='/logo.ico' />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: 'Bistro Lee | Sushi & Bar',
  keywords: 'japanese restaurant, toronto bar',
  description: 'Japanese Restaurant in Toronto',
};

export default Meta;
