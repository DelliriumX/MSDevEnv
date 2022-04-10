import 'Page-Home.scss'
import { useStore } from 'core/react-bindings'

const HomePage = () => {
  const { logout } = useStore('logout')
  
  return (
    <div className="HomePage-wrapper">
      <h1>Home Page</h1>
      <h2>
        This application was bootstrapped with MSDevEnv.
      </h2>
      <p>
        Framework Includes:
      </p>
      <ul>
        <li>React (v17) support</li>
        <li>Easy-to-use Redux implementation via custom store created at compilation time</li>
        <li>React-Router (v5) like routing which is fully integrated with the Redux store</li>
        <li>Dynamic imports routing based on nearest ancestor (nested file structure support)</li>
        <li>Example Auth and API bundles</li>
        <li>IndexDB persistance support enabled</li>
        <li>Support for style/code files separation via import rewritting</li>
        <li>Webpack, Babel and ESLint preconfigured with configurations exposed for modification</li>
      </ul>
      <p>
        <b>Core</b> is a compilation-time generated dynamic module based on <code>src/app/manifest.json</code>.
        This module is the "engine" on which the framework runs. At it's core, pun intended, it is an enhanced
        version of a Redux store, integrated with a React Router as well as with custom bindings and hooks for React.
      </p>
      <p>
        It is fully extendible via bundles which allow you to create actions, reducers, selectors, 
        reactors, middleware, thunk args, etc. You can read more about bundles within <code>README.BUNDLES.MD</code>&nbsp;
        located in the root directory. Use <code>localStorage.debug = true</code> and refresh to debug. Happy coding.
      </p>
      <h3>Login state persisted, <a onClick={logout}>logout</a></h3>
    </div>
  )
}

export default HomePage
