import React, {Component, PropTypes} from 'react';
import './Search.scss'

export default class Search extends Component {
  handleSubmit(e) {
    const Search = this.refs.search
    const Location = Search.value.trim()
    if (e.which === 13) {
      this.props.searchLocation(Location)
      Search.value = ''
    }
  }
  render () {
    return(
      <section id="search-box">
        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input className="mdl-textfield__input" type="text" ref="search" onKeyDown={(e) => this.handleSubmit(e)}/>
          <label className="mdl-textfield__label" htmlFor="search">
            Search City or Country!
          </label>
        </div>
      </section>
    );
  }
}
