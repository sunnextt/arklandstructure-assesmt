import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
body {
  background-color: #F5F5F5;
  font-size: 1rem;
  font-family: 'Roboto';
  color: #FFFFFF;
}


h2,
h3,
h4,
h5,
h6 {
  margin-top: 0;
  margin-bottom: 0;
  color: #FFFFFF;
  font-weight: 500;
}

h4 {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
}
h5 {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
}

h6 {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
}

p {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;

a,
a:link,
a:visited,
a:active {
  color: #3ca9e2;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
}
a:focus, a:hover,
a:link:focus,
a:link:hover,
a:visited:focus,
a:visited:hover,
a:active:focus,
a:active:hover {
  color: #329dd5;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
}
`;
