---
title: Frontend Setup
id: frontend-setup
sidebar_label: Frontend Setup
sidebar_position: 5
---

<br/>

## Setting up the frontend comes with following steps.

<br/>

### 1. Setting up Javascript Runtime in you computer.

You should have,
1. NodeJs installed.
2. Npm installed.

Latest stable version would work without any issue since we are regularly checking the compatibility when there is a new NodeJs version released. If you already have above two installed then you are good to go with the next steps,
but if you don't have them yet, it is pretty simple, you can download and install NodeJs from the <b>[Official NodeJs Org](https://nodejs.org/en)</b>
which includes npm as well.

This is just about having the basic javascript runtime environment in your computer, so if it is difficult, you can follow more other tutorials in the internet.
<br/>

### 2. Cloning the repo and installing dependencies.

#### 2.1 Clone the frontend repo.
You can clone the frontend code from community repo - <b>https://github.com/SkappHQ/skapp-fe</b>.

#### 2.2 Open the project in your favorite IDE.
Usually for frontend development, there are lot of IDEs used in the industry, 
but we are majorly using <b>[Webstorm](https://www.jetbrains.com/webstorm/)</b> and <b>[Visual Studio Code](https://code.visualstudio.com/)</b> as our primary IDEs for frontend development.

#### 2.3 Install the dependencies.
Now you should install the dependencies by executing <b>`npm install`</b> from your root folder.


<br/>

### 3. Updating the env file with desired values.

You should have the below env.local file within your root directory and that is what we are using to run the frontend service in development mode.

```
NEXT_PUBLIC_API_URL="<api-url>"
NEXTAUTH_SECRET="<random-string>"
NEXTAUTH_URL=<fe-base-url>
```

There are few values we have to set under your setup. So let's go through them one by one.

1. <b>NEXT_PUBLIC_API_URL</b> <br/>
This is the url which will use your frontend service to point to the running backend service, 
and most of the cases if you haven't changed any backend configurations, then this value would be http://localhost:8008/v1.
2. <b>NEXTAUTH_SECRET</b> <br/>
This is a random string used to sign and encrypt JWTs and cookies. Typically, a random string with 32+ characters.
3. <b>NEXTAUTH_URL</b> <br/>
This is the canonical URL of your site – the base URL used for generating callbacks, redirects, and absolute URLs during authentication flows. 
Simply this will be the base url of you application. So in your local setup, most of the time this would be http://localhost:3000 (if you are using a different port, specify it correctly)
and when you are running it in a cloud this would be your domain url (ex -	https://yourdomain.com)

<br/>

Once you set those values correctly, then you are good to go with the next step.

<br/>

### 3. Running the frontend service.

Final step is running the frontend service once you are done with everything as explained above. <br/>

Note - <em>We are using port 3000 to run the frontend by default, so if you have any processes running under this port,
please stop them or if you need to run in a different port you have to do some configuration changes before proceeding.</em>

You can simply run <b>`npm run dev`</b> from your root folder and if you can see the following logs in the terminal, that means your service is running as expected.

```
  ▲ Next.js x.x.x
  - Local:        http://localhost:3000
  - Environments: .env.local
```

Now you can open the http://localhost:3000 in any of you browsers and play around with the skapp community app.

If you are getting any difficulties in running the service, then there might be a problem in any of the steps above, so try to go through all the steps again. <br/>
If you are still stuck, then reach out to our community channels to get help from our community members.