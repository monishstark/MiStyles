import React from "react";
import "./LoginPage.css";

import { config } from "./Config";
import { PublicClientApplication } from "@azure/msal-browser";
import { Component } from "react";
import {
  GoogleLoginButton,
  GithubLoginButton,
  InstagramLoginButton,
  MicrosoftLoginButton,
} from "react-social-login-buttons";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isAuthenticated: false,
      user: {},
    };
    this.login = this.login.bind(this);
    this.PublicClientApplication = new PublicClientApplication({
      auth: {
        clientId: config.appId,
        redirectUri: config.redirectUri,
        authority: config.authority,
      },
      cache: {
        cacheLocation: "sessionStorage",
        storeAuthStateInCookie: true,
      },
    });
  }
  async login() {
    try {
      await this.PublicClientApplication.loginPopup({
        scopes: config.scopes,
        prompt: "select_account",
      });
      this.setState({ isAuthenticated: true });
    } catch (err) {
      this.setState({
        isAuthenticated: false,
        user: {},
        error: err,
      });
    }
  }
  logout() {
    this.PublicClientApplication.logout();
  }
  render() {
    return (
      <div className="app">
        <header className="app-header">
          {this.state.isAuthenticated ? (
            <p>Loged in successfully</p>
          ) : (
            <span className="loginbox">
              <strong className="title">Welcome to MyStyles</strong>
              <p className="title2">Login or Signup</p>
              <p>
                <MicrosoftLoginButton onClick={() => this.login()} />
                <GithubLoginButton />
                <GoogleLoginButton />
                <InstagramLoginButton />
              </p>
            </span>
          )}
        </header>
      </div>
    );
  }
}

export default LoginPage;
