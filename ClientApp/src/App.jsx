import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './custom.scss'
import { Layout } from './layouts/Layout'
import { LayoutNavOnly } from './layouts/LayoutNavOnly'
import { AClass } from './pages/AClass'
import { Classes } from './pages/Classes'
import { HomePage } from './pages/HomePage'
import { Monster } from './pages/Monster'
import { Monsters } from './pages/Monsters'
import { NotFound } from './pages/NotFound'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import { Spell } from './pages/Spell'
import { Spells } from './pages/Spells'

export function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Layout>
            <HomePage />
          </Layout>
        </Route>
        <Route exact path="/signup">
          <LayoutNavOnly>
            <SignUp />
          </LayoutNavOnly>
        </Route>
        <Route exact path="/login">
          <LayoutNavOnly>
            <SignIn />
          </LayoutNavOnly>
        </Route>
        <Route exact path="/slist">
          <Layout>
            <Spells />
          </Layout>
        </Route>
        <Route exact path="/mlist">
          <Layout>
            <Monsters />
          </Layout>
        </Route>
        <Route exact path="/clist">
          <Layout>
            <Classes />
          </Layout>
        </Route>
        <Route exact path="/slist/:spell">
          <Layout>
            <Spell />
          </Layout>
        </Route>
        <Route exact path="/mlist/:monster">
          <Layout>
            <Monster />
          </Layout>
        </Route>
        <Route exact path="/clist/:class">
          <Layout>
            <AClass />
          </Layout>
        </Route>
        <Route path="*">
          <LayoutNavOnly>
            <NotFound />
          </LayoutNavOnly>
        </Route>
      </Switch>
    </>
  )
}
