// import { useState } from "react";
import "../pages";
import headerLogo from "../images";

export default function App() {
  return (
    <div>
      <div className="page">
        <header className="header">
          <img
            src="./images/aound.png"
            alt="Logo Titulo"
            className="header__image"
          />
          <img
            src="./images/Line.png"
            alt="Linea"
            className="header__image-line"
          />
        </header>
        <main className="content">
          <section className="profile">
            <div className="profile__content">
              <div className="profile__avatar-container">
                <img
                  src="./images/Avatar.jpg"
                  alt="Foto Avatar"
                  className="profile__avatar"
                  id="profile-avatar"
                />
                <button className="profile__avatar-button" type="button">
                  <img
                    src="./images/Lapiz Editar.png"
                    alt="Editar foto"
                    className="profile__avatar-edit"
                  />
                </button>
              </div>
              <div className="profile__info">
                <div className="profile__header">
                  <h1 className="profile__header-title" id="profile-name">
                    Jacques Cousteau
                  </h1>
                  <button
                    type="button"
                    className="profile__header-button"
                  ></button>
                </div>
                <p className="profile__description" id="profile-description">
                  Explorador
                </p>
              </div>
            </div>
            <div className="profile__button">
              <button className="profile__button-add">+</button>
            </div>
          </section>
          <section className="elements">
            <div className="elements__grid">
              <template id="elements-template">
                <div className="elements__group">
                  <div className="elements__card">
                    <button className="elements__button-delete" type="button">
                      <img
                        className="button__delete"
                        src="./images/Trash.png"
                        alt="Botón Eliminar"
                      />
                    </button>
                  </div>
                  <img src="" alt="" className="elements__photo" />
                  <div className="elements__footer">
                    <p class="elements__footer-name"></p>
                    <button class="button__like"></button>
                  </div>
                </div>
              </template>
            </div>
          </section>
        </main>
        <footer class="footer">
          <p class="footer__copyright">&copy; 2024. Rubí Floreano</p>
        </footer>
      </div>
    </div>
  );
}
