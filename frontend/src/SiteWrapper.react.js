import * as React from "react";
import { NavLink } from "react-router-dom";

import {
  Site,
  Nav,
  Grid,
  List,
  Button,
  RouterContextProvider,
} from "tabler-react";

//import type { NotificationProps } from "tabler-react";

type Props = {
  children: React.Node,
};

const navBarItems: Array<navItem> = [
  {
    value: "Overview",
    to: "/",
    icon: "home",

  },
  {
    value: "Add Employee",
    to: "/employee-add",
    icon: "user-plus",
   
  },
  {
    value: "List Employee",
    to: "/employee-list",
    icon: "users",
    
  },
  {
    value: "Add Attendance",
    to: "/attendance-add",
    icon: "book-open",
    
  },
  {
    value: "List Attendance",
    to: "/attendance-list",
    icon: "book",
  },
  {
    value: "Salary",
    to: "/salary-list",
    icon: "dollar-sign",
  },
];

class SiteWrapper extends React.Component<Props> {
  render(): React.Node {
    return (
      <Site.Wrapper
        headerProps={{
          href: "/",
          alt: "",
          imageURL: "https://www.buildpiper.io/wp-content/uploads/2022/05/logo_black.png",
        }}
        navProps={{ itemsObjects: navBarItems }}
        footerProps={{
          links: [
            <a href="#">First Link</a>,
            <a href="#">Second Link</a>,
            <a href="#">Third Link</a>,
            <a href="#">Fourth Link</a>,
            <a href="#">Five Link</a>,
            <a href="#">Sixth Link</a>,
            <a href="#">Seventh Link</a>,
            <a href="#">Eighth Link</a>,
          ],
          note:
            "Premium and Open Source dashboard template with responsive and high-quality UI. For Free!",
          copyright: (
            <span>&copy; 2023 Your Company Name</span>
          ),
          nav: (
            <React.Fragment>
              <Grid.Col auto={true}>
                <a href="./docs/index.html">Documentation</a>
              </Grid.Col>
              <Grid.Col auto={true}>
                <Button
                  href="https://github.com/tabler/tabler-react"
                  size="sm"
                  outline
                  color="primary"
                  RootComponent="a"
                >
                  Source code
                </Button>
              </Grid.Col>
            </React.Fragment>
          ),
        }}
      >
        {this.props.children}
      </Site.Wrapper>
    );
  }
}

export default SiteWrapper;
