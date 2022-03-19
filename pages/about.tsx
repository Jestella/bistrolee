import Image from 'next/image';

import aboutStyles from '../styles/About.module.scss';

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <div className={aboutStyles.about_container}>
        <div>
          {' '}
          <Image
            src='/images/about.jpg'
            width={300}
            height={460}
            alt='about image'
          />
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus
            scelerisque eleifend donec pretium vulputate. Condimentum id
            venenatis a condimentum vitae sapien pellentesque.
            <br />
            <br />
            Et pharetra pharetra massa massa ultricies mi quis hendrerit dolor.
            Tristique et egestas quis ipsum suspendisse. Risus ultricies
            tristique nulla aliquet. Mi sit amet mauris commodo quis imperdiet
            massa. Non arcu risus quis varius quam quisque. At erat pellentesque
            adipiscing commodo. Aliquam etiam erat velit scelerisque in dictum
            non consectetur. Lobortis mattis aliquam faucibus purus in massa
            tempor nec feugiat. In fermentum et sollicitudin ac orci phasellus
            egestas tellus rutrum.
            <br />
            <br />
            Diam sit amet nisl suscipit. Non pulvinar neque laoreet suspendisse
            interdum consectetur libero. Elementum integer enim neque volutpat
            ac tincidunt vitae semper quis. Malesuada pellentesque elit eget
            gravida cum sociis natoque penatibus. Ipsum a arcu cursus vitae
            congue mauris rhoncus. Eu nisl nunc mi ipsum faucibus vitae aliquet
            nec. Dolor sed viverra ipsum nunc aliquet bibendum. Vitae tempus
            quam pellentesque nec nam aliquam sem et tortor.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
