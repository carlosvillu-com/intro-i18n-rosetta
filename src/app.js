import React, {Component} from 'react';
import ReactDom from 'react-dom';

import Header from './Header';
import Button from './Button';

import Rosetta, {CHANGE_TRANSLATION_EVENT, rosetta} from '@schibstedspain/rosetta';
import Polyglot from '@schibstedspain/rosetta/lib/adapters/polyglot';


const languages = {
  'es-ES': {
    'hello world': 'Hola Mundo',
    'spanish': 'Español',
    'catalan': 'Catalá',
    'english': 'English',
    'review the console': 'Abre la consola' 
  },
  'ca-ES': {
    'hello world': 'Hola món',
    'spanish': 'Español',
    'catalan': 'Catalá',
    'english': 'English',
    'review the console': 'Obre la consola' 
  },
  'en-GB': {
    'hello world': 'Hello World',
    'spanish': 'Español',
    'catalan': 'Catalá',
    'english': 'English',
    'review the console': 'Open the console'
  }
};

const i18n = new Rosetta();
i18n.adapter = new Polyglot();
i18n.setTranslationsSilent(languages['en-GB']);

i18n.on(CHANGE_TRANSLATION_EVENT, (dicc) => console.log('The dicctionary has been changed to', dicc));

@rosetta(i18n, languages)
class App extends Component {
  constructor(...args){
    super(...args);
    this.i18n = this.getChildContext().i18n;
  }

  changeLanguage(i18n, language){
    i18n.translations = language;
  }

  render(){
    return (
      <div>
        <Header literal={this.i18n.t('hello world')}/>
        <Button handleClick={this.changeLanguage.bind(this)} isoCode='es-ES' label={this.i18n.t('spanish')}/>
        <Button handleClick={this.changeLanguage.bind(this)} isoCode='ca-ES' label={this.i18n.t('catalan')}/>
        <Button handleClick={this.changeLanguage.bind(this)} isoCode='en-GB' label={this.i18n.t('english')}/>
        <br/>
        <small>*{this.i18n.t('review the console')}</small>
      </div>
    )

  }
} 

ReactDom.render(<App />, document.querySelector('#root'));
