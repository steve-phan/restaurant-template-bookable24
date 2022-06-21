import React from 'react';
import { graphql } from 'gatsby';

import Layout from '@bookable24/components/Layout/Layout';
import { SEO } from '@bookable24/components/Layout/SEO/SEO';
import { RestaurantName } from '@bookable24/RESTAURANT.CONFIG/RESTAURANT.CONFIG';
import { BoxLanding } from '@bookable24/components/molecules/BoxLanding/BoxLanding';

const Privacy = () => {
  return (
    <Layout>
      <BoxLanding>
        <h1>Privacy</h1>
        <SEO title={`Impressum ${RestaurantName} Restaurant`} />
        <h5>Widerruf Ihrer Einwilligung zur Datenverarbeitung.</h5>
        Nur mit Ihrer ausdrücklichen Einwilligung sind einige Vorgänge der
        Datenverarbeitung möglich. Ein Widerruf Ihrer bereits erteilten
        Einwilligung ist jederzeit möglich. Für den Widerruf genügt eine
        formlose Mitteilung per E-Mail. Die Rechtmäßigkeit der bis zum Widerruf
        erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
        <br />
        <h5>Recht auf Beschwerde bei der zuständigen Aufsichtsbehörde</h5>
        Als Betroffener steht Ihnen im Falle eines datenschutzrechtlichen
        Verstoßes ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
        Zuständige Aufsichtsbehörde bezüglich datenschutzrechtlicher Fragen ist
        der Landesdatenschutzbeauftragte des Bundeslandes, in dem sich der Sitz
        unseres Unternehmens befindet. Der folgende Link stellt eine Liste der
        Datenschutzbeauftragten sowie deren Kontaktdaten bereit.
        <br />
        <h5>Recht auf Datenübertragbarkeit</h5>
        Ihnen steht das Recht zu, Daten, die wir auf Grundlage Ihrer
        Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten,
        an sich oder an Dritte aushändigen zu lassen. Die Bereitstellung erfolgt
        in einem maschinenlesbaren Format. Sofern Sie die direkte Übertragung
        der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur,
        soweit es technisch machbar ist.{' '}
        <h5>Recht auf Auskunft, Berichtigung, Sperrung, Löschung</h5> Sie haben
        jederzeit im Rahmen der geltenden gesetzlichen Bestimmungen das Recht
        auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen
        Daten, Herkunft der Daten, deren Empfänger und den Zweck der
        Datenverarbeitung und ggf. ein Recht auf Berichtigung, Sperrung oder
        Löschung dieser Daten. Diesbezüglich und auch zu weiteren Fragen zum
        Thema personenbezogene Daten können Sie sich jederzeit über die im
        Impressum aufgeführten Kontaktmöglichkeiten an uns wenden.{' '}
        <h5>SSL- bzw. TLS-Verschlüsselung</h5> Aus Sicherheitsgründen und zum
        Schutz der Übertragung vertraulicher Inhalte, die Sie an uns als
        Seitenbetreiber senden, nutzt unsere Website eine SSL-bzw.
        TLS-Verschlüsselung. Damit sind Daten, die Sie über diese Website
        übermitteln, für Dritte nicht mitlesbar. Sie erkennen eine
        verschlüsselte Verbindung an der „https://“ Adresszeile Ihres Browsers
        und am Schloss-Symbol in der Browserzeile. <h5>Google Analytics</h5>{' '}
        Unsere Website verwendet Funktionen des Webanalysedienstes Google
        Analytics. Anbieter des Webanalysedienstes ist die Google Inc., 1600
        Amphitheatre Parkway, Mountain View, CA 94043, USA. Google Analytics
        verwendet „Cookies.“ Das sind kleine Textdateien, die Ihr Webbrowser auf
        Ihrem Endgerät speichert und eine Analyse der Website-Benutzung
        ermöglichen. Mittels Cookie erzeugte Informationen über Ihre Benutzung
        unserer Website werden an einen Server von Google übermittelt und dort
        gespeichert. Server-Standort ist im Regelfall die USA. Das Setzen von
        Google-Analytics-Cookies erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f
        DSGVO. Als Betreiber dieser Website haben wir ein berechtigtes Interesse
        an der Analyse des Nutzerverhaltens, um unser Webangebot und ggf. auch
        Werbung zu optimieren. <h5>IP-Anonymisierung</h5> Wir setzen Google
        Analytics in Verbindung mit der Funktion IP-Anonymisierung ein. Sie
        gewährleistet, dass Google Ihre IP-Adresse innerhalb von Mitgliedstaaten
        der Europäischen Union oder in anderen Vertragsstaaten des Abkommens
        über den Europäischen Wirtschaftsraum vor der Übermittlung in die USA
        kürzt. Es kann Ausnahmefälle geben, in denen Google die volle IP-Adresse
        an einen Server in den USA überträgt und dort kürzt. In unserem Auftrag
        wird Google diese Informationen benutzen, um Ihre Nutzung der Website
        auszuwerten, um Reports über Websiteaktivitäten zu erstellen und um
        weitere mit der Websitenutzung und der Internetnutzung verbundene
        Dienstleistungen gegenüber uns zu erbringen. Es findet keine
        Zusammenführung der von Google Analytics übermittelten IP-Adresse mit
        anderen Daten von Google statt. Browser Plugin Das Setzen von Cookies
        durch Ihren Webbrowser ist verhinderbar. Einige Funktionen unserer
        Website könnten dadurch jedoch eingeschränkt werden. Ebenso können Sie
        die Erfassung von Daten bezüglich Ihrer Website-Nutzung einschließlich
        Ihrer IP-Adresse mitsamt anschließender Verarbeitung durch Google
        unterbinden. Dies ist möglich, indem Sie das über folgenden Link
        erreichbare Browser-Plugin herunterladen und installieren. Widerspruch
        gegen die Datenerfassung Sie können die Erfassung Ihrer Daten durch
        Google Analytics verhindern, indem Sie auf folgenden Link klicken. Es
        wird ein Opt-Out-Cookie gesetzt, der die Erfassung Ihrer Daten bei
        zukünftigen Besuchen unserer Website verhindert: Google Analytics
        deaktivieren. Einzelheiten zum Umgang mit Nutzerdaten bei Google
        Analytics finden Sie in der Datenschutzerklärung von Google.
      </BoxLanding>
    </Layout>
  );
};

export default Privacy;

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
