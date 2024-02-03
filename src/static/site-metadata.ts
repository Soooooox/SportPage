interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'Sport Page',
  siteUrl: 'https://soooooox.github.io/HomePage/content/sport/sport.html',
  logo: 'https://soooooox.github.io/HomePage/images/avatar.png',
  description: 'Personal sport site',
  navLinks: [
    {
      name: 'Home',
      url: 'https://soooooox.github.io/HomePage/',
    },
    {
      name: 'Sport',
      url: 'https://soooooox.github.io/HomePage/content/sport/sport.html',
    },
  ],
};

export default data;
