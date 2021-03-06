import React from 'react'

export default props=>
<div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <a className="navbar-brand" href="#"><i className="fa fa-calendar-check-o"></i> TodoApp</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
            <a className="nav-link" href="#/todos">Tarefas</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href='#/about'>Sobre</a>
        </li>
        </ul>
    </div>
    </nav>
</div>
