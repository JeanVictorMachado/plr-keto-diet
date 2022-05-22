import { useMemo } from "react";
import { CardTestimonial } from "../../components/CardTestimonial";
import { Footer } from "../../components/Footer";
import { TestimonialProps } from "../../context/ContextApi";

import testimonialScripts from "../../testimonials/testimonial_1.json";

import "./styles.css";

export const SalesPage = () => {
  const testimonial = useMemo(() => {
    return testimonialScripts as TestimonialProps[];
  }, []);

  return (
    <div className="sales-page__container">
      <div className="sales-page__header-color"></div>

      <div className="sales-page__title-container">
        <p>Especialista em emagrecimento saudável</p>
      </div>

      <div className="sales-page__title-container-2">
        <p>
          <strong>Conheça o método</strong> que está sendo mais utilizado no
          mundo em emagrecimento e descubra porque você nunca{" "}
          <strong>emagrece de forma definitiva</strong>
        </p>
      </div>

      <div className="sales-page__title-container-3">
        <p>[100% Natural e Garantido!]</p>
      </div>

      <div className="sales-page__video-container">
        <div className="sales-page__video-box">
          <iframe
            className="elementor-video-iframe"
            allowFullScreen
            title="Player de Vídeo vimeo"
            src="https://player.vimeo.com/video/675866377?color&amp;autopause=0&amp;loop=0&amp;muted=0&amp;title=0&amp;portrait=0&amp;byline=0&amp;h=7d6f99eb19#t="
            width="420"
            height="315"
          />
        </div>
      </div>

      <section className="sales-page__testimonial-container">
        <CardTestimonial testimonials={testimonial} />
      </section>

      <Footer />
    </div>
  );
};
