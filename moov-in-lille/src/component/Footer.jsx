import React, { Component } from "react";
import {
  Button,
  ButtonGroup,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
import "../style/footer.css";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        <ButtonGroup className="footer">
          <div className="mapLegend">
            <p>
              {" "}
              <img
                src={require("../pictures/indispo.png")}
                alt="indisponible"
              />{" "}
              Indisponible
              <img
                src={require("../pictures/75-99-2.png")}
                alt="places libres"
              />{" "}
              Peu/Plus de places
              <img
                src={require("../pictures/25-50-2.png")}
                alt="plus de places"
              />{" "}
              Places libres{" "}
            </p>
          </div>

          <Button onClick={this.toggle} className="mentions">
            Mentions légales
          </Button>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className={this.state.className}
          >
            <ModalHeader toggle={this.toggle}>Mentions Légales</ModalHeader>
            <ModalBody>
              <h2>1. Présentation du site :</h2>

              <p>
                Conformément aux dispositions des articles 6-III et 19 de la Loi
                n° 2004-575 du 21 juin 2004 pour la Confiance dans l'économie
                numérique, dite L.C.E.N., nous portons à la connaissance des
                utilisateurs et visiteurs du site : www.mooveinlille.fr les
                informations suivantes :{" "}
              </p>

              <h3>Informations légales :</h3>

              <p>
                Statut du propriétaire : <strong>societe</strong>
              </p>
              <p>
                Préfixe : <strong> SAS</strong>
              </p>
              <p>
                Nom de la Société :<strong> Groupe 3 JS - wcs</strong>
              </p>
              <p>
                Adresse :<strong> 4 RUE DES SAULES 59160 LILLE</strong>
              </p>
              <p>
                Tél :<strong> 07 61 83 26 08</strong>
              </p>
              <p>
                Au Capital de :<strong> 0 €</strong>
              </p>
              <p>
                SIRET :<strong> 465637832823923 </strong>R.C.S. :
                <strong> 439439 </strong>
              </p>
              <p>
                Numéro TVA intracommunautaire : <strong> 123456789 </strong>{" "}
              </p>
              <p>
                Adresse de courrier électronique : <strong> wcs@wild.fr</strong>
              </p>
              <br />
              <p>
                Le Créateur du site est : <strong>moovinlille.fr</strong>
              </p>
              <p>
                Le Responsable de la publication est :{" "}
                <strong>Mr Trello</strong>
              </p>
              <p>
                Contactez le responsable de la publication :{" "}
                <strong>mrtrello@wcs.fr</strong>
              </p>
              <p>
                Le responsable de la publication est une{" "}
                <strong> personne physique</strong>
              </p>
              <br />

              <p>
                Le Webmaster est : <strong>Mr Delahache</strong>
              </p>
              <p>
                Contactez le Webmaster : <strong>delahache@wcs.fr</strong>
              </p>
              <p>
                L’hebergeur du site est :{" "}
                <strong>Lenovo Thinkpad LocalHost 40400 NOTFOUND</strong>
              </p>
              <br />

              <h2>2. Description des services fournis :</h2>

              <p>
                Le site www.mooveinlille.fr a pour objet de fournir une
                information concernant l’ensemble des activités de la société.
                Le proprietaire du site s’efforce de fournir sur le site
                www.mooveinlille.fr des informations aussi précises que
                possible.
                <br />
                Toutefois, il ne pourra être tenue responsable des omissions,
                des inexactitudes et des carences dans la mise à jour, qu’elles
                soient de son fait ou du fait des tiers partenaires qui lui
                fournissent ces informations.
                <br />
                Tous les informations proposées sur le site www.mooveinlille.fr
                sont données à titre indicatif, sont non exhaustives, et sont
                susceptibles d’évoluer. Elles sont données sous réserve de
                modifications ayant été apportées depuis leur mise en ligne.
              </p>

              <h2>3. Propriété intellectuelle et contrefaçons :</h2>

              <p>
                Le proprietaire du site est propriétaire des droits de propriété
                intellectuelle ou détient les droits d’usage sur tous les
                éléments accessibles sur le site, notamment les textes, images,
                graphismes, logo, icônes, sons, logiciels… Toute reproduction,
                représentation, modification, publication, adaptation totale ou
                partielle des éléments du site, quel que soit le moyen ou le
                procédé utilisé, est interdite, sauf autorisation écrite
                préalable à l'email : delahache@wcs.fr . Toute exploitation non
                autorisée du site ou de l’un quelconque de ces éléments qu’il
                contient sera considérée comme constitutive d’une contrefaçon et
                poursuivie conformément aux dispositions des articles L.335-2 et
                suivants du Code de Propriété Intellectuelle.
              </p>

              <h2>4. Liens hypertextes et cookies :</h2>

              <p>
                Le site www.mooveinlille.fr contient un certain nombre de liens
                hypertextes vers d’autres sites (partenaires, informations …)
                mis en place avec l’autorisation de le proprietaire du site .
                Cependant, le proprietaire du site n’a pas la possibilité de
                vérifier le contenu des sites ainsi visités et décline donc
                toute responsabilité de ce fait quand aux risques éventuels de
                contenus illicites.
              </p>
              <br />

              <p>
                L’utilisateur est informé que lors de ses visites sur le site
                www.mooveinlille.fr, un ou des cookies sont susceptible de
                s’installer automatiquement sur son ordinateur. Un cookie est un
                fichier de petite taille, qui ne permet pas l’identification de
                l’utilisateur, mais qui enregistre des informations relatives à
                la navigation d’un ordinateur sur un site. Les données ainsi
                obtenues visent à faciliter la navigation ultérieure sur le
                site, et ont également vocation à permettre diverses mesures de
                fréquentation.
              </p>
              <br />

              <p>
                Le paramétrage du logiciel de navigation permet d’informer de la
                présence de cookie et éventuellement, de refuser de la manière
                décrite à l’adresse suivante : www.cnil.fr Le refus
                d’installation d’un cookie peut entraîner l’impossibilité
                d’accéder à certains services. L’utilisateur peut toutefois
                configurer son ordinateur de la manière suivante, pour refuser
                l’installation des cookies : Sous Internet Explorer : onglet
                outil / options internet. Cliquez sur Confidentialité et
                choisissez Bloquer tous les cookies. Validez sur Ok. Sous
                Netscape : onglet édition / préférences. Cliquez sur Avancées et
                choisissez Désactiver les cookies. Validez sur Ok.
              </p>

              <h2>
                5. Protection des biens et des personnes - gestion des données
                personnelles :
              </h2>

              <p>
                Utilisateur : Internaute se connectant, utilisant le site
                susnommé : www.mooveinlille.fr
              </p>
              <br />
              <p>
                En France, les données personnelles sont notamment protégées par
                la loi n° 78-87 du 6 janvier 1978, la loi n° 2004-801 du 6 août
                2004, l'article L. 226-13 du Code pénal et la Directive
                Européenne du 24 octobre 1995.
              </p>
              <br />

              <p>
                Sur le site www.mooveinlille.fr, le proprietaire du site ne
                collecte des informations personnelles relatives à l'utilisateur
                que pour le besoin de certains services proposés par le site
                www.mooveinlille.fr. L'utilisateur fournit ces informations en
                toute connaissance de cause, notamment lorsqu'il procède par
                lui-même à leur saisie. Il est alors précisé à l'utilisateur du
                site www.mooveinlille.fr l’obligation ou non de fournir ces
                informations.
              </p>
              <br />
              <p>
                Conformément aux dispositions des articles 38 et suivants de la
                loi 78-17 du 6 janvier 1978 relative à l’informatique, aux
                fichiers et aux libertés, tout utilisateur dispose d’un droit
                d’accès, de rectification, de suppression et d’opposition aux
                données personnelles le concernant. Pour l’exercer, adressez
                votre demande à www.mooveinlille.fr par email : email du
                webmaster ou en effectuant sa demande écrite et signée,
                accompagnée d’une copie du titre d’identité avec signature du
                titulaire de la pièce, en précisant l’adresse à laquelle la
                réponse doit être envoyée.
              </p>
              <br />

              <p>
                Aucune information personnelle de l'utilisateur du site
                www.mooveinlille.fr n'est publiée à l'insu de l'utilisateur,
                échangée, transférée, cédée ou vendue sur un support quelconque
                à des tiers. Seule l'hypothèse du rachat du site
                www.mooveinlille.fr à le proprietaire du site et de ses droits
                permettrait la transmission des dites informations à l'éventuel
                acquéreur qui serait à son tour tenu de la même obligation de
                conservation et de modification des données vis à vis de
                l'utilisateur du site www.mooveinlille.fr.
              </p>
              <br />

              <p>
                Le site www.mooveinlille.fr est en conformité avec le RGPD voir
                notre politique RGPD www.rgpd-moovinlille.fr.
              </p>
              <br />

              <p>
                Les bases de données sont protégées par les dispositions de la
                loi du 1er juillet 1998 transposant la directive 96/9 du 11 mars
                1996 relative à la protection juridique des bases de données.
              </p>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" onClick={this.toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </ButtonGroup>
        <p className="love">
          Made with <span className="hearth">&hearts;</span>{" "}
          <a href="" target="_blank">
            by Wild Code School
          </a>
        </p>
      </div>
    );
  }
}

export default Footer;
