// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Deck,
  Image,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  S,
  Link
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  apollo: require("../assets/logo-apollo-space-left.svg"),
  graphcool: require("../assets/graphcool.svg"),
  project: require("../assets/project.png"),
  files: require("../assets/files.png"),
  graphql: require("../assets/graphql.png"),
  permission: require("../assets/permission.png"),
  kitten: require("../assets/kitten.png"),
  user: require("../assets/user.png"),
  demo: require("../assets/demo.gif")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica",
  tertiary: "Merriweather"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["fade"]} transitionDuration={500} theme={theme}>
        <Slide bgColor="primary">
          <Heading size={4} caps lineHeight={1} textColor="secondary">
            Meetup Graphql
          </Heading>
          <Text margin="60px auto 10px" textColor="tertiary" textFont="secondary" size={1} bold>
            Boostraper une application Mobile
          </Text>
          <Text margin="0px auto 10px" textColor="tertiary" textFont="secondary" size={1} bold>
            avec Exponent (React Native) et GraphQL
          </Text>
          <Text margin="0px auto 40px" textColor="tertiary" textFont="secondary" size={1} bold>
            GraphCool et Apollo (GraphQL)
          </Text>
          <Text size={5} caps lineHeight={1} textColor="secondary" margin="0px auto 60px" italic>
            8 mars 2017
          </Text>

        </Slide>
        <Slide bgColor="primary">
          <Heading size={3} textColor="tertiary" margin="0px auto 60px">Tycho Tatitscheff</Heading>
          <Text size={2} textColor="secondary" textFont="secondary" margin="0px auto 20px">
            Développeur à BAM
          </Text>
          <Text size={2} textColor="secondary" textFont="secondary">
            @tychota
          </Text>
        </Slide>
        <Slide bgColor="primary" textColor="tertiary">
          <Heading size={4} textColor="tertiary" margin="0px auto 40px" caps>Problèmes adressés</Heading>
          <List>
            <Appear><ListItem textColor="secondary"><S type="bold">1j</S> pour bootstraper une app</ListItem></Appear>
            <Appear><ListItem textColor="secondary"><S type="bold">1/2j</S> pour boostraper un serveur</ListItem></Appear>
            <Appear><ListItem textColor="secondary">Besoin d'avoir un <S type="bold">Mac</S></ListItem></Appear>
            <Appear><ListItem textColor="secondary">99 $ + 25 $ = <S type="bold">124$</S></ListItem></Appear>
            <Appear><ListItem textColor="secondary">Difficulté à <S type="bold">scaler</S> le prototype</ListItem></Appear>
          </List>
        </Slide>
        <Slide bgColor="primary" textColor="tertiary">
          <Image src={images.apollo} height="115" margin="0px auto 40px"/>
          <List>
            <Appear><ListItem textColor="secondary">Un client GraphQL</ListItem></Appear>
            <Appear><ListItem textColor="secondary">Fait par Meteor</ListItem></Appear>
            <Appear><ListItem textColor="secondary"><S type="bold">Plus simple que relay</S></ListItem></Appear>
            <Appear><ListItem textColor="secondary">Des supers articles</ListItem></Appear>
          </List>
        </Slide>
        <Slide bgColor="primary" textColor="tertiary">
          <Image src={images.graphcool} height="100" margin="0px auto 40px"/>
          <List>
            <Appear><ListItem textColor="secondary">Un serveur <S type="bold">SAAS</S> GraphQL</ListItem></Appear>
            <Appear><ListItem textColor="secondary">Connecté à <S type="bold">AuthO, Algolia</S></ListItem></Appear>
            <Appear><ListItem textColor="secondary">Hook <S type="bold">AWS</S> lambda</ListItem></Appear>
            <Appear><ListItem textColor="secondary">Interface graphique</ListItem></Appear>
            <Appear><ListItem textColor="secondary">Bonne communauté</ListItem></Appear>
          </List>
        </Slide>
        <Slide bgColor="primary" textColor="tertiary">
          <Heading size={4} textColor="tertiary" margin="0px auto 40px" caps>Expo <S type="strikethrough">nent</S></Heading>
          <List>
            <Appear><ListItem textColor="secondary">Basé sur <S type="bold">React Native</S></ListItem></Appear>
            <Appear><ListItem textColor="secondary">Projet <S type="bold">100% JS</S></ListItem></Appear>
            <Appear><ListItem textColor="secondary"><S type="bold">"Code push"</S> intégré</ListItem></Appear>
            <Appear><ListItem textColor="secondary">Bonne communauté</ListItem></Appear>
          </List>
        </Slide>
        <Slide bgColor="primary" textColor="tertiary">
          <Heading size={4} textColor="tertiary" margin="0px auto 40px" caps>Le projet</Heading>
          <List>
            <Appear><ListItem textColor="secondary">Kitten Management system</ListItem></Appear>
            <Appear><ListItem textColor="secondary">Deux écrans</ListItem></Appear>
            <Appear><ListItem textColor="secondary">Login, query et mutation</ListItem></Appear>
            <Appear><ListItem textColor="secondary">30 min</ListItem></Appear>
          </List>
        </Slide>
        <Slide bgColor="primary" textColor="tertiary">
          <Heading size={4} textColor="tertiary" margin="0px auto 40px" caps>Le projet</Heading>
          <Image src={images.project} height="400" margin="0px auto 40px"/>
        </Slide>
        <Slide bgColor="primary" textColor="tertiary">
          <Heading size={4} textColor="tertiary" margin="0px auto 40px" caps>Création du serveur</Heading>
          <Image src={images.files} height="400" margin="0px auto 40px"/>
        </Slide>
        <Slide bgColor="primary" textColor="tertiary">
          <Heading size={4} textColor="tertiary" margin="0px auto 40px" caps>Création du serveur</Heading>
          <Image src={images.user} height="400" margin="0px auto 40px"/>
        </Slide>
        <Slide bgColor="primary" textColor="tertiary">
          <Heading size={4} textColor="tertiary" margin="0px auto 40px" caps>Création du serveur</Heading>
          <Image src={images.kitten} height="400" margin="0px auto 40px"/>
        </Slide>
        <Slide bgColor="primary" textColor="tertiary">
          <Heading size={4} textColor="tertiary" margin="0px auto 40px" caps>Création du serveur</Heading>
          <Image src={images.permission} height="400" margin="0px auto 40px"/>
        </Slide>
        <Slide bgColor="primary" textColor="tertiary">
          <Heading size={4} textColor="tertiary" margin="0px auto 40px" caps>Création du serveur</Heading>
          <Image src={images.graphql} height="400" margin="0px auto 40px"/>
        </Slide>
        <Slide bgColor="primary" textColor="tertiary">
          <Heading size={4} textColor="tertiary" margin="0px auto 40px" caps>Live coding</Heading>
          <Image src={images.demo} height="400" margin="0px auto 40px"/>
        </Slide>
        <Slide bgColor="primary" textColor="tertiary">
            <Heading size={4} textColor="tertiary" margin="0px auto 40px" caps>Next steps</Heading>
            <Link size={2} textColor="secondary" textFont="secondary" margin="0px auto 20px" href="https://www.learnapollo.com/">
              https://www.learnapollo.com/
            </Link>
        </Slide>
        <Slide bgColor="primary" textColor="tertiary">
          <BlockQuote>
            <Quote textColor="secondary" margin="0px auto 70px">Questions ?</Quote>
            <Cite>Maintenant si il y'a un peu de temps</Cite>
            <Cite>Autour d'une bière</Cite>
            <Cite>sur Twitter, @tychota</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
