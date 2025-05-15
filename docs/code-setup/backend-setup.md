---
title: Backend Setup
id: backend-setup
sidebar_label: Backend Setup
sidebar_position: 4
---

<br/>

## Setting up the backend comes with following steps.

<br/>

### 1. Setting up JAVA 21 in you computer.

You should have,
1. JDK installed.
2. Environment variables setup (required only for Windows and Ubuntu, since most of the cases this setup is already available in MacOS installation).

If you already have above two configured then you are good to go with the next steps,
but if you don't have them yet, then you can download and install java jdk from the <b>[Official Oracle Downloads](https://www.oracle.com/java/technologies/downloads/)</b>
and you can configure the environment variables referring <b>[Oracle Docs](https://docs.oracle.com/cd/F74770_01/English/Installing/p6_eppm_install_config/89522.htm)</b>.

This is just about having the basic java setup in your computer, so if it is difficult, you can follow more other tutorials in the internet.
<br/>

### 2. Cloning the repo and setting up the environment file.

#### 2.1 Clone the repo.
Skapp community is a monolithic repo where it contains both backend and frontend codebases in the same repository. 
You can clone the code from community repo - <b>https://github.com/SkappHQ/skapp</b>.

It has two main folders - frontend and backend. You can either use the same IDE or two different IDEs to run the backend and frontend separately following the next steps. 

#### 2.2 Open the project in your favorite IDE.
Usually our backend developers use IntelliJ IDEA so it is what we are going to use in this tutorial as well.

#### 2.3 Link environment file.
The env file is located in root level of the backend folder, and it is named as .env.local .

If you are coming from a java background you already know how to link the env file using the IntelliJ Edit Configurations setting.
If so, you can do it by your own, and then you can directly jump into the next step <b>[Frontend Setup](./frontend-setup)</b>. But if this is something new for you, 
then you can follow the detailed instructions below to set it up.

#### 2.2.1 Step by step guide to link env file in IntelliJ

> Open <b>Current File</b> menu and then click <b>Edit Configuration.</b> <br/>
> This is located towards the top right corner of your IDE as below. <br/>
> ![Edit Configurations](/img/intellij-env-setup-open-edit-configuration.png)

> It will open the following dialog.<br/>
> Then open the <b>Add New Configuration Panel</b> using one of the markers.<br/>
> ![Add New Configuration Panel](/img/intellij-env-setup-add-new-configuration-panel.png)

> It will open the menu list as below.<br/>
> Select <b>Application</b> menu from the list.<br/>
> ![Application menu item](/img/intellij-env-setup-setup-application.png)

>This will open the below dialog, and initially it is with empty fields but below you can find how to set each required field. <br/>
> 1 - Name: You can enter the configuration name (here we can put skapp-be). <br/>
> 2 - Java runtime: Here you can set the path for the java folder (search more on how to find the path if you are having difficulties in that step). <br/>
> 3 - Main class: Here you can set the main class file. <br/>
> 4 - Environment variables: Here you can set the path of our environment file located in the project root folder.
> ![Configuration Values](/img/intellij-env-setup-run-debug-configurations.png)

> Finally save the configurations using the <b>OK</b> button.

<br/>

### 3. Updating the env file with desired values.

Your initial .env.local file should looks like follows.

```
DB_URL=jdbc:mysql://localhost:3306/skapp-dev?createDatabaseIfNotExist=true
DB_USERNAME=<your-db-user-name>
DB_PASSWORD=<your-db-password>
SPRING_PROFILES_ACTIVE=non-prd
FILE_ENCRYPT_KEY=<random-string>
SIGN_IN_KEY=<random-base64-string>
ENCRYPT_DECRYPT_SECRET=<random-string>
```

But there are few values we have to set under your setup. So let's go through them one by one.

1. <b>DB_URL</b> <br/>
Most probably your local MySQL server is running on port 3306. So you can keep the value as it is. Note that skapp-dev would be the name of database which is getting created when you run the backend service.
2. <b>DB_USERNAME</b> and <b>DB_PASSWORD</b> <br/>
These are the database credentials you need to provide in order to connect the backend with the database. 
You should have remembered the username and password of your MySQL server, if not you can find some ways to reset it before continuing from here. 
Before proceeding, make sure your MySQL server is running and the username/password works using some other clients like MySQL Workbench. <br/>
3. <b>SPRING_PROFILES_ACTIVE</b> <br/>
This is the springboot profile we are using in the local development mode so you can keep it as it is for now.
4. <b>FILE_ENCRYPT_KEY</b> <br/>
Skapp application has some features where users can upload files, and for the security reasons those files are getting encrypted before storing in the desired location,
and this key is used as the encryption key for the encrypt decrypt algorithms. You can just put a random value for this.
5. <b>SIGN_IN_KEY</b> <br/>
This is the key used to create the JWT tokens(for authentication and authorizations) and this key should be in base64 format. 
There are simple ways of creating a random base64 string, and you can quickly generate a one using this link as well(https://www.convertsimple.com/random-base64-generator/).
6. <b>ENCRYPT_DECRYPT_SECRET</b> <br/>
This key is used in places where we need generic encryption and decryption.
Just a random string would be ok for it.

<br/>

### 3. Running the backend service.

Final step is running the backend service once you are done with everything as explained above. <br/>

Note - <em>We are using port 8008 to run the backend by default, so if you have any processes running under this port, 
please stop them or if you need to run in a different port you have to do some configuration changes before proceeding.</em>

As Follows you can find the run button towards the top right corder of the IDE.

![Intellij Run Button](/img/intellij-run-button.png)

Once you run the service successfully, you will get the following as the final console log which means that the application is running as expected.

`[main] [] [] INFO  [com.skapp.SkappApplication] - Started SkappApplication`

Additionally, if you want to open the <b>Swagger UI</b>, you can open the below url in any browser

<b>http://localhost:8008/swagger-ui/index.html</b>

<br/>
<br/>

If you are getting any difficulties in running the service, then there might be a problem in any of the steps above, so try to go through all the steps again. <br/>
If you are still stuck, then reach out to our community channels to get help from our community members.

<br/>
<br/>

Once you are done with the backend setup, then you can move to the next step - <b>[Frontend Setup](./frontend-setup)</b>.