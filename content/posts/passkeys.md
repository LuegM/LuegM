---
title: "Passkeys"
date: 2023-05-12T10:11:20+01:00
draft: false
tags: ["Passkeys", "Security", "Passwords", "Swift", "Swift", "Apple", "Google", "Microsoft", "SecurityKeys", "Yubico", "iOS", "Android"]
categories: ["Security"]
---

{{< notice info >}}
This blog post is currently in progress and not yet fully completed.
{{< /notice >}}

Welcome to this comprehensive step-by-step tutorial designed to guide you through the process of setting up a backend environment for a passkeys using Docker Desktop.
It will also guide you through the process of obtaining an Apple Developer Team-ID, a unique identifier required to manage your team on Apple's Developer platform.

By the end of this tutorial, you'll have a fully functional backend setup for your passkey workshop, and you'll be capable of managing and running your applications more effectively.
Happy learning!

### 1. install Docker Desktop
https://www.docker.com/products/docker-desktop/

### 2. get Apple Developer Team-ID
https://developer.apple.com/help/account/manage-your-team/locate-your-team-id/
<div style="page-break-after: always;"></div>

### 3. setup the backend
#### automated / script (macOS and Linux):
1. Clone the repository
   ```bash
    git clone https://github.com/YubicoLabs/passkey-workshop
   ```
2. Navigate to the *deploy* folder
   ```bash
    cd passkey-workshop/deploy
    ```
3. run the *mobile.sh* script
   ```bash
    ./mobile.sh
    ```
4. edit *.env* file
	1. open the file
	   ```bash
        vi .env
        or
        nano .env
        ```
	2. make changes
	   ![[CleanShot 2023-05-12 at 15.37.14@2x.png]]
		1. if you have a Team-ID -> add it here
		2. if you don't have a Team-ID -> change one character
5. run the *mobile.sh* script again
   ```bash
    ./mobile.sh
    ``` 
6. copy the url from the shell
   ![[CleanShot 2023-05-12 at 15.47.18@2x.png]]
7. open the url in a browser
8. you can now register and sign in with passkeys
#### manual (windows):

### 4. use it
#### 1. react web-app
#### 2. iOS app
#### 3. Android app
