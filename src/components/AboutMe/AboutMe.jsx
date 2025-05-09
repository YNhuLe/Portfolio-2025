import "./AboutMe.scss";
import headshot from "/images/headshot.png";
function AboutMe() {
  return (
    <section className="about">
      <div className="headshot">
        <img src={headshot} alt="headhot_img" className="headshot__img" />
      </div>
      <h1 className="about__title">Jenny Le</h1>
      <h2 className="about__text">Full-Stack Software Developer</h2>
      <p className="about__para">
        I'm a motivated and creative Computer Systems Technology student from
        Sheridan College and BrainStation, with over 3 years of experience in
        customer-facing roles and fast-paced environments. I have a passion for
        building things—whether it's coding up a new idea, designing something
        beautiful, or diving into DIY projects. I love exploring the
        intersection of technology and creativity, and I'm always excited to
        connect with others to share ideas, learn, and grow together.
      </p>
    </section>
  );
}

export default AboutMe;
