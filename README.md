# Angular Development Sample App

This project was created following the course *Angular 7-The Complete Guide*, taught by Maximilian Schwarzmüller. The project includes a set of small sample components(snippets) that touched all parts of the Angular features, and a complete application that leverage these features, include:
- Data binding
- Directives
- Pipes
- Routing
- Forms (Template-driven and reactive)
- HttpClient
- Guards
- Interceptors
- NgRx
- Unit Testing

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Netlify build and deployment
Netlify is a cloud service that helps hosting static applications. Features include:
- CI/CD pipeline for static apps, including single page ones using Angular, React, Vue, etc.
- DNS service: Netlify allows custom domains to be used
- HTTPS: Let's Encrypt is used to provide TLS certification

Here are the steps to build and deploy the sample app on Netlify:
1. Clone this repository
2. Log in to Netlify portal using Github Identity service
3. Select the repository to build
4. Run *npm run build-prod*
5. Select dist/ as a publish directory

Link to the [demo](https://recipe-store.netlify.com/)
