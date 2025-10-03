

# Information related to a development nicknamed Water Street Market Apartments.


## Salesforce
Parts of this project may require the Salesforce REST API.
* Install the [Salesforce development tools for VSCode](https://developer.salesforce.com/docs/platform/sfvscode-extensions/guide/install).
  * This includes the VSCode extensions, the Salesforce CLI, and an appropriate version of the Java Development Kit.
* Connect to org: <code>sf org login web --alias Sandbox__OcdPartial --instance-url https://test.salesforce.com</code>
* Display details about the connection: <code>sf org display</code>


## Installation
_Note: A secret is necessary to utilitze GitHub's Deploy to GitHub Pages functionality._
1. Clone this repository.
2. Run <code>git submodule update --init --recursive</code>.
3. Run <code>npm update</code>.
4. Run <code>npm run build</code>.
5. Optionally run any required server processes
 * sudo npm install -g nodemon
 * nodemon app.js

## Running the app
_Note: This project can be run in two target environments: <code>npm run watch</code> and <code>nodemon</code>.  TODO: additional instructions should be provided here about how this works in practice and how commands affect the target environment._
### Node express environment:
1. Run <code>npm run build-prod</code> to build the appropriate code in <code>dist/</code>.
2. Run <code>npm run start-server</code>.
3. Disable any already-running server software (these will conflict with the port 80 config of Express server).
4. Navigate to [Localhost](http://localhost).

### Webpack server environment:
1. Preview the base website using <code>npm run watch</code>.

# Additional resources

## Salesforce - Apex REST endpoints
* Exercise: Participate and take notes on "Creating Apex Classes" (in-meeting) tutorial.
  * Duplicate and recreate the <code>AwsSns</code> Apex class.
  * Duplicate and recreate the <code>AwsSnsTest</code> Apex test class.
* Review the layout and content of Salesforce's ["Exposing Apex Classes as REST Web Services"](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_rest.htm)
* Create an Apex class (either in the GUI or in VSCode)
* Annotate the Apex class consistent with the above Salesforce recommendations in "Exposing Apex Classes".
* Find an existing Apex REST class; use this class as an example for development.
* Document the location of the <code>@ocdla/salesforce</code> package in <code>dev_modules/</code>.
* Document the current use of the related <code>SalesforceRestApi</code> class, especially in <code>components/App.jsx</code> in <code>getVideoParser()</code>.


## Babel transpiling
* [Babel online parser](https://babeljs.io/repl/#?browsers=defaults)

## React
* [React Router](https://reactrouter.com/start/framework/navigating)
* [Complete guide to routing in React](https://hygraph.com/blog/routing-in-react)

## Server setup
* Ubuntu: How to run an express server [as a service](https://www.google.com/search?q=ubuntu+how+to+run+a+node+express+server+as+a+service)

## Deployment
Headless deployment, on Ubuntu
## Install npm, node, sfdx, pm2 and related dependencies
<code>npm install @salesforce/cli --global</code>

### Display the SFDX Auth URL
<code>sf org display --target-org MyOrg --verbose --json > authFile.json</code>

### Authorize in CLI using the URL
<code>sf org login sfdx-url --sfdx-url-file authFile.json --alias Sandbox__OcdPartial</code>


## Adding submodules
Git submodules can be added to this repository using the <code>git submodule add</code> command:
* <code>git submodule add https://github.com/ocdladefense/node-lib-salesforce dev_modules/@ocdla/salesforce</code>


## Design Resources
* https://webflow.com/blog/google-fonts
* https://www.material-tailwind.com/blocks
* https://sentry.io/answers/how-to-change-the-css-background-opacity-of-an-element/
* Adobe Express

## Citation parser
1. Identify the correct repositories
  * [<code>@ocdladefense/babel-webpack-javascript-template</code>](https://github.com/ocdladefense/babel-webpack-javascript-template)
  * 


## @TODO
* Data - The <code>data/</code> directory contains project data that properly belongs to the root repository.
* <code>Breadcrumbs.jsx</code> - The <code>separator</code> variable is calculated internally, but should be passed in as a parameter so that an application can render a breadcrumb trail with any separator.
* <code>Hyperlink.jsx</code> - The <code>switch</code> statement may be encoding JSX elements that could be made more explicit through top-level components.
* <code>Body.jsx</code>
* <code>dist/sw.js</code> - Add a Service Worker.
