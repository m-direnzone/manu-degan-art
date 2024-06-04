import { Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { isMobile } from "react-device-detect";
import fotoRitratto from "../images/artist-painting-studio.jpg";

const BiographyPage = () => {
  const { t } = useTranslation();
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  useEffect(() => {
    if (isMobile || window.innerWidth <= 1050) {
      setIsMobileDevice(true);
    }
  }, []);

  return (
    <div>
      <Grid container px={"2%"} py={"4%"}>
        {isMobileDevice && (
          <Grid item xs={12}>
            <img src={fotoRitratto} alt="" />
          </Grid>
        )}
        <Grid item xs={12} xl={7}>
          <Typography className="title">{t("la-mia-storia")}</Typography>
          <Typography className="paragraph" mt={"3%"}>
            Emanuela Degan nasce a Venezia nel 1966. Frequenta l'unica scuola
            che fin da piccola sogna: il Liceo Artistico di Venezia. Segue poi
            con passione la sezione pittura dell'Accademia di Belle Arti sotto
            la guida dei professori Carmelo Zotti ed Ennio Finzi. Nel frattempo
            inizia a esporre in collettive e fa una personale a Padova. Nel 1991
            rallenta drasticamente l'attività artistica, come a volte accade per
            motivi di lavoro che la costringono a trasferirsi a Firenze. Nel
            2017 dopo aver seguito famiglia e lavoro per 17 anni, nel tempo
            libero riprende a lavorare sulla sua Arte. Si unisce a molte
            associazioni artistiche di tutto il territorio Toscano e con loro
            collabora a diversi progetti, diventa consigliera aggiunta per 4
            anni del Museo Casa di Giotto a Vicchio (Firenze) dove nel 2019
            organizza una mostra di 65 artiste per la festa della donna dedicata
            ad Artemisia Gentileschi e espone in tutta la Toscana conoscendo
            diverse realtà. Il suo personale approccio artistico non conosce
            contaminazioni da questa esperienza ma solo una opportunità di
            crescita, rimanendo fedele alla sua indole figurativa legata al
            corpo umano. Abbandona momentaneamente l'utilizzo della tavolozza e
            dei pennelli perché non li sente adatti alla propria necessità di
            approccio al suo pensiero, alle proprie tempistiche e alla
            profondità dei dettagli che la matita le consente di raggiungere.
            Anzi è la matita che le permette di “graffiare la superfice”, forte
            necessità che sente dentro a se stessa. L'antica tecnica del
            tratteggio così svilita le appartiene, non consente errori, è pulita
            ed espressiva. Ancora per le sue esperienze personali di vita
            sceglie di rappresentare il mondo femminile, donne! Donne che
            sognano, donne intense che esprimono in modo quasi teatrale
            sentimenti forti e anche tanta dolcezza, dolore, inedia. Grande la
            voglia di chiari e profondi scuri, lumeggiature raffinate, zone
            d'ombra forti che le esaltano. Quadri grafici pieni di simboli,
            sguardi profondi, intensi che ritraggono l'anima, lo scibile
            femminile. Fortemente ispirata dalla corrente artistica
            Preraffaellita, simbolista e Art Nouveau. Tornando alla figura
            femminile, ritiene che sia da proteggere ed esaltare, queste donne
            piene di pensieri, sentimenti, amore e paura devono essere
            rappresentate perché nessuno le dimentichi in un mondo dove non
            serve dire niente della condizione femminile. Donne che sfidano, ti
            osservano, che hanno bisogno di amore. In questo momento collabora
            attivamente con una compagnia teatrale “Live Art”. Insegna disegno
            dal vero con discreto successo visto il risultato degli allievi.
            Collabora dal 2000 con diverse compagnie teatrali e teatri come
            scenografa. Presente su YouTube in molte interviste video pubblicata
            sulla rivista più importante d'arte in toscana “la Toscana nuova”,
            presente in libreria con molte collaborazioni editoriali e di
            catalogo. Autrice di una Cover del libro -Saga dello scrittore
            fantasy Lorenzo Baggiani sempre in vendita online e in libreria.
          </Typography>
        </Grid>
        {!isMobileDevice && (
          <Grid item xl={5}>
            <img src={fotoRitratto} alt="" className="biography-image" />
          </Grid>
        )}
        <Grid item xl={12} xs={12} mt={"2%"}>
          <Typography className="small-title">
            {t("titolo-sezione-premi")}
          </Typography>
          <Typography className="paragraph" mt={"0.5%"}>
            2018 - 3° edizione Premio Claudio Cavallini Kevo.{" "}
            <strong>3° posto</strong>, con “sguardo dolce” grafica a pastello su
            carta. <br /> 2020 - 7° edizione Mostra internazionale “Donna oggi”
            Premio Sergio Manzi a San Gimignano. <strong>3° posto</strong>, con
            “occhi di luna” pastello su tavola di legno 100 x 70 cm. <br /> 2020
            - VII edizione Premio internazionale letteratura e arte “Nuovi occhi
            sul Mugello”, menzione d'onore con “il re che doveva morire”
            pastello su carta dedicato a Gianni Rodari. <br /> 2021 -
            Estemporanea “Arte e natura” Campugliano (Pt){" "}
            <strong>3° posto</strong>, Paesaggio a penna biro dal vero. <br />{" "}
            2021 - Premio unico dedicato a Giovanni de Nittis, Premio C.D.A.
            “Caffè delle Arti” Roma Con l'opera “Donna che sogna” opera a
            grafite su carta. <br /> 2022 - Premio Internazionale “Art work” IV
            edizione Firenze <strong>2° posto</strong>, con “Volare via” grafite
            e matite acquerellabili su carta. <br /> 2022 - Premio
            internazionale “Nuovi occhi sul Mugello ” Firenze{" "}
            <strong>3° posto</strong>, con l'opera “Angelo di luce” matita a
            cera su carta. <br /> 2023 - IX Premio internazionale Acipea,
            “Premio San Valentino “ Avellino Premio dedicato, “Cupido” all'opera
            “Lei e lui in un sogno” pastello su carta. <br /> 2023 - 55° Premio
            nazionale “Pro Lastra - Enrico Caruso” Targa unica del gruppo
            Fraires per L' opera che meglio esprime I valori dell'uomo, con
            l'opera “Falcone e Borsellino” grafite e matite <br />
            colorate su carta Modigliani , 100 x 70 cm
          </Typography>
        </Grid>
        <Grid item xl={12} xs={12} mt={"2%"}>
          <Typography className="small-title">
            {t("titolo-sezione-pubblicazioni")}
          </Typography>
          <Typography className="paragraph" mt={"0.5%"}>
            - Casa editrice Sillabe Livorno, libro Archeologia della risata a
            cura di Paola Dei e Franco Mariotti. 2021. Ritratto di Gigi Proietti
            in grafite <br />
            - Casa editrice Pluriversum Ferrara, Cover del libro saga “Evolution
            - la saga del trio” autore Lorenzo Baggiani 2023. <br />- A breve
            uscirà il 2° libro della saga del trio dello scrittore Lorenzo
            Baggiani con la cover disegnata da Emanuela Degan.
          </Typography>
        </Grid>
        <Grid item xl={12} xs={12} mt={"2%"}>
          <Typography className="small-title">
            {t("titolo-sezione-mostre")}
          </Typography>
          <Typography className="paragraph" mt={"0.5%"}>
            2021 - Chiesa San Giovanni Battista all'autostrada, personale
            “all'ombra della tenda” 2022- Sala dell'affresco presso il Comune di
            Signa “ Matite, forma e anima” Firenze <br /> 2022 - Antica birreria
            “Mostodolce” Vaiano, Prato. <br />
            2022 - Mostra personale per la “giornata internazionale contro la
            violenza di genere” 10 opere fanno da scenografia all'opera teatrale
            “In piedi signori davanti ad una donna” presso il teatro “Live Art”{" "}
            <br />
            2023 - presso lo spazio espositivo prestigioso e storico in Firenze
            La Soffitta - spazio delle arti a Sesto fiorentino Colonnata. “In
            punta di matita” Mostra antologica voluta per l'assonanza di
            Emanuela Degan con l'artista Anguissola. <br />
            2023 - Mostra personale al JB7Jazz Bristot, luogo di diffusione
            artistiche varie in via Aretina a Firenze. <br /> 2023 - mostra
            personale completamente femminile, sponsorizzata dal Comune di
            Firenze ed inserita nel “il filo rosso” per il 25 novembre “giornata
            internazionale contro la violenza di genere”.
            <br /> 2023 - “Negli occhi di una Donna” nella Sala del Paradiso,
            presso la storica Biblioteca di Palazzo Bandini. <br /> 2024 -
            Mostra collettiva internazionale Palazzo Pisani Revedin, “Venezia in
            Maschera” dal 27 gennaio al 13 febbraio 2024.
            <br /> 2024 - Vernice Art Fair Forlì, fiera.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default BiographyPage;
