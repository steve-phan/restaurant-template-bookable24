import React from 'react';
import { graphql } from 'gatsby';

import Layout from '@bookable24/components/Layout/Layout';
import { SEO } from '@bookable24/components/Layout/SEO/SEO';
import { RestaurantName } from '@bookable24/RESTAURANT.CONFIG/RESTAURANT.CONFIG';
import { BoxLanding } from '@bookable24/components/molecules/BoxLanding/BoxLanding';

const Impressum = () => {
  return (
    <Layout>
      <BoxLanding>
        <h1>Impressum</h1>
        <SEO title={`Impressum ${RestaurantName} Restaurant`} />
        <h5> Angaben gemäß § 5 TMG</h5>
        Geschäftsinhaber Nguyen Van A <br />
        {RestaurantName} – Restaurant <br />
        Berliner Alle 999 10999 Berlin <br />
        <h5> Kontakt: </h5>
        Telefon: 030 12365487
        <br />
        E-Mail: bookable24.de@gmail.com <br />
        <hr />
        <h5> Haftungshinweis Haftung für Inhalte</h5>
        Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf
        diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8
        bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet,
        übermittelte oder gespeicherte fremde Informationen zu überwachen oder
        nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
        hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
        Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
        Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
        Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von
        entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend
        entfernen. <h5>Haftung für Links</h5> Unser Angebot enthält Links zu
        externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben.
        Deshalb können wir für diese fremden Inhalte auch keine Gewähr
        übernehmen. Für die Inhalte der verlinkten Seiten ist stets der
        jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die
        verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche
        Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
        Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der
        verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer
        Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
        Rechtsverletzungen werden wir derartige Links umgehend entfernen.{' '}
        <h5>Urheberrecht</h5> Die durch die Seitenbetreiber erstellten Inhalte
        und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die
        Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung
        außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
        Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien
        dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch
        gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber
        erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere
        werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem
        auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
        entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden
        wir derartige Inhalte umgehend entfernen.
        <h5>Rechtswirksamkeit dieses Haftungsausschlusses</h5>
        Dieser Haftungsausschluss ist als Teil des Internetangebotes zu
        betrachten, von dem aus auf diese Seite verwiesen wurde. Sofern Teile
        oder einzelne Formulierungen dieses Textes der geltenden Rechtslage
        nicht, nicht mehr oder nicht vollständig entsprechen sollten, bleiben
        die übrigen Teile des Dokumentes in ihrem Inhalt und ihrer Gültigkeit
        davon unberührt.
      </BoxLanding>
    </Layout>
  );
};

export default Impressum;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
